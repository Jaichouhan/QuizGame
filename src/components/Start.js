import React from 'react';

const Start = ({ onQuizStart }) => {
  const disable = localStorage.getItem('true');

  return(
    <>
    <div className="card">
      <div className="card-content">
        <div className="content">
          {disable ? "" : (<p>Please Login and play game</p>)}
          <h1>Start the quiz</h1>
          <p>Good luck!</p>
          <button className="button is-info is-medium" disabled={!disable} onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Start;