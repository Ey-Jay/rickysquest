import React, { useContext } from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';

import QuestContext from 'context/quests';

const QuestLog = () => {
  const { unfinishedQuests, finishedQuests } = useContext(QuestContext);

  return (
    <Container>
      <h3> QuestLog</h3>
      <br />

      <br />
      <p>unfinshed quests:</p>

      {unfinishedQuests.map((x, i) => {
        if (x.finished) return '';
        return (
          <Link key={i} to={'quiz/' + x.id}>
            {' '}
            {x.character}
          </Link>
        );
      })}

      <p>finished quests:</p>
      {finishedQuests.map((x, i) => {
        if (!x.finished) return '';
        return <div key={i}> {x.character} </div>;
      })}
    </Container>
  );
};

export default QuestLog;
