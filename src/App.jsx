import ReactPlayer from "react-player";

function App() {
  return (
    <div>
      <ReactPlayer
        url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        controls
      />
    </div>
  );
}

export default App;
