import React, { useState } from "react";

function Details({ views, time, upVotes, downVotes }) {
  const [upVote, setUpVote] = useState(upVotes);
  const [downVote, setDownVote] = useState(downVotes);
  const [HideComments, setHideComments] = useState();

  function handleUpClick() {
    setUpVote(upVote + 1);
    console.log(upVote);
  }
  function handleDownClick() {
    setDownVote(downVote + 1);
    console.log(downVote);
  }
  function handleHideClick() {
    console.log("Click");
  }

  return (
    <div>
      <p>
        {views} Views | Uploaded {time}
      </p>
      <button onClick={handleUpClick}>{upVote}👍</button>
      <button onClick={handleDownClick}>{downVote}👎</button>
      <p>
        <button onClick={handleHideClick}>Hide Comments</button>
      </p>
      <p></p>
    </div>
  );
}

export default Details;
