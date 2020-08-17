# Ricky's Quest

Ricky's Quest is a Rick and Morty game developed by [Erick Jansen](https://github.com/Ey-Jay), [Joss Doebler](https://github.com/jossdoe), and [Justin Horn](https://github.com/JustinHorn). We used the [Rick and Morty free GRAPHQL API](https://rickandmortyapi.com/documentation) to get the characters data. We are using [Google Firebae](https://firebase.google.com/) for Authentication and Database. Our frontend is written using React, bootstrapped using [Create React App](https://github.com/facebook/create-react-app).

We are hosted on Netlify and using Netlify Functions.

[![Netlify Status](https://api.netlify.com/api/v1/badges/fce8d6bf-5f8a-4c48-98fa-ca839dcdffb4/deploy-status)](https://app.netlify.com/sites/rickysquest/deploys)

## Getting Started

### Create Firebase Account

Add a new Project in the [firebase console](https://console.firebase.google.com).

**Set up authentication**
Go to sign-in method and enable the Google provider.

**Database**
Choose cloud firestore.

### Local development

Clone this repo.

You need to have node v10+ and npm installed.
Once you have verified you got these. `npm i -g netlify-cli`

`cd` to the root of the repository and `npm i` to install all dependencies.

[![deploy to netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Ey-Jay/rickysquest)

#### Firebase Service Account Key

Once deployed to netlify.

Go to your firebase project settings.
Under "Service Accounts", Generate a new private key.
Use these values provided to you in your json key, to populate your netlify env variables.

#### Netlify dev

Go to the root of the repository, and run `netlify link` to link your hosted env variables with your local repo. Then run `netlify dev` to work on your cloud functions locally and also your front end. Have fun.
