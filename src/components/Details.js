import React, { useState } from "react";

function Details({ views, time, upVotes, downVotes }) {
  const [upVote, setUpVote] = useState();
  const [downVote, setDownVote] = useState();
  const [HideComments, setHideComments] = useState();

  function handleUpClick() {
    return console.log("Upclick");
  }
  function handleDownClick() {
    return console.log("downClick");
  }
  function handleHideClick() {
    return console.log("hideClick");
  }

  return (
    <div>
      <p>
        {views} Views | Uploaded {time}
      </p>
      <button onClick={handleUpClick}>{upVotes}👍</button>
      <button onClick={handleDownClick}>{downVotes}👎</button>
      <p>
        <button onClick={handleHideClick}>Hide Comments</button>
      </p>
    </div>
  );
}

export default Details;
