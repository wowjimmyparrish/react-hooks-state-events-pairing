import video from "../data/video.js";
import Title from "./Title.js";
import Details from "./Details";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Title title={video.title} />
      <Details
        views={video.views}
        time={video.createdAt}
        upVotes={video.upvotes}
        downVotes={video.downvotes}
      />
    </div>
  );
}

export default App;
