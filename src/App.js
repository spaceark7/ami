import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import ElevateAppBar from "./component/appBar";
import ReactAudioPlayer from "react-audio-player";
import song from "./backsound.mp3";
import CustomizedTimeline from "./component/treeView";
import { Grid } from "@material-ui/core";
import Intro from "./component/intro";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  return (
    <div className="App">
      <Intro />
      {/* <ElevateAppBar />
      <CustomizedTimeline />

      <ReactAudioPlayer src={song} autoPlay controls /> */}
    </div>
  );
}

export default App;
