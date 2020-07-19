import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ElevateAppBar from "./component/appBar";
import ReactAudioPlayer from "react-audio-player";
import song from "./backsound.mp3";

function App() {
  return (
    <div className="App">
      <ElevateAppBar />
      <ReactAudioPlayer src={song} autoPlay controls />
    </div>
  );
}

export default App;
