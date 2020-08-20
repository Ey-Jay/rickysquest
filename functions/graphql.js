const { ApolloServer, gql } = require('apollo-server-lambda');

const { RESTDataSource } = require('apollo-datasource-rest');

class CharactersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://rickandmortyapi.com/api/';
  }

  async getAllCharacters({ id }) {
    const response = await this.get(`character/${id}`);
    return Array.isArray(response)
      ? response.map((character) => this.characterReducer(character))
      : [];
  }

  async getCharacterById({ id }) {
    const response = await this.get(`character/${id}`);
    return this.characterReducer(response);
  }

  characterReducer(character) {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
    };
  }
}

const typeDefs = gql`
  type Character {
    id: ID!
    name: String
    image: String
  }

  type Query {
    characters(id: [ID]): [Character]
    character(id: ID): Character
  }
`;

const resolvers = {
  Query: {
    characters: (_, { id }, { dataSources }) =>
      dataSources.charactersAPI.getAllCharacters({ id }),
    character: (_, { id }, { dataSources }) =>
      dataSources.charactersAPI.getCharacterById({ id }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    charactersAPI: new CharactersAPI(),
  }),
});

exports.handler = server.createHandler();
