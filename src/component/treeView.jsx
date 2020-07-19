import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Timeline } from "@material-ui/lab";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FavoriteIcon from "@material-ui/icons/Favorite";
import myJpg from "../img/a1.jpg";
import myJpg2 from "../img/a2.jpg";
import myJpg3 from "../img/a3.jpg";
import myJpg4 from "../img/A4.jpg";
import FaceIcon from "@material-ui/icons/Face";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ImgMediaCard from "./cardView";

const deskripsi = {
  judul: "Cewek gengsi tapi ...",
  descOne:
    "Pribadi yg unik dengan tingkah polosnya selalu menggelitik. Terkadang selalu bikin kesel tapi ya mau apalagi sudah terlanjur sayang :D Hahaha",
};

const deskripsi2 = {
  judul: "Cinta itu datang dari ...",
  descOne:
    "Mungkin kebanyakan manusia biasa mencintai manusia lainnya dengan segala kelebihannya. Namun itu kasus ini sebaliknya, Setiap kekurangannya membuat rasa cinta tumbuh :p",
  gambar: myJpg2,
  delay: 2500,
};

const deskripsi3 = {
  judul: "Kok bisa sih ...",
  descOne:
    "Banyak hal yg terjadi, dimulai dari ngitung bonteng teu beres - beres :D sampe ngitung juga pakai jari XD. Pokoknya setiap kekurangan kutertawakan jadi sebuah alasan tumbuhnya perasaan dihati.",
  gambar: myJpg3,
  delay: 4500,
};
const deskripsi4 = {
  judul: "Dodol! Bikin Cape sih ..",
  descOne:
    "Entah bagaimana namun selalu terlintas rasa kesal kalau inget dia masih aja belum bisa move on :( Padahal sudah diperjuangkan semaksimal mungkin. Tapi ya sudahlah mungkin memang jalannya harus seperti ini.",
  gambar: myJpg4,
  delay: 6500,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  dangerTail: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();
  const pathImg = myJpg;
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            Si Rahmi Versi Aa
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FavoriteIcon color="white" />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <ImgMediaCard
            img={myJpg}
            desc={deskripsi.descOne}
            judul={deskripsi.judul}
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>{/* **/}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FaceIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <ImgMediaCard
            img={deskripsi2.gambar}
            desc={deskripsi2.descOne}
            judul={deskripsi2.judul}
            delay={deskripsi2.delay}
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <ThumbUpIcon />
          </TimelineDot>
          <TimelineConnector className={classes.dangerTail} />
        </TimelineSeparator>
        <TimelineContent>
          <ImgMediaCard
            img={deskripsi3.gambar}
            desc={deskripsi3.descOne}
            judul={deskripsi3.judul}
            delay={deskripsi3.delay}
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <ThumbDownIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <ImgMediaCard
            img={deskripsi4.gambar}
            desc={deskripsi4.descOne}
            judul={deskripsi4.judul}
            delay={deskripsi4.delay}
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
