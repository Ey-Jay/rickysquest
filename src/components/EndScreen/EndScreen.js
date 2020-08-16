import React from "react";
import { Follower, HomeButton } from "./styled";
import { useParams, useHistory } from "react-router-dom";

const EndScreen = ({ quest }) => {
  const history = useHistory();

  const onClickHandler = () => history.push("/");

  const success = true;

  return (
    <>
      <h1>Finished: {quest.type.toUpperCase()}</h1>

      {success ? (
        <>
          <div>
            <strong>You were successful! </strong>
            Your reward:
          </div>
        </>
      ) : (
        <div style={{ marginBottom: "40px" }}>
          <strong>You have failed.</strong> Better luck next time.
        </div>
      )}

      {success ? (
        <Follower>
          <img src={quest.follower.img} alt="" />
          <p>{quest.follower.name}</p>
        </Follower>
      ) : null}
      <div style={{ textAlign: "center" }}>
        <HomeButton onClick={onClickHandler}> Go to dashboard </HomeButton>
      </div>
    </>
  );
};

export default EndScreen;
