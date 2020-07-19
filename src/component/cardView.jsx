import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Zoom } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  console.log(props.img);
  return (
    <Zoom in={true} style={{ transitionDelay: props.delay }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Ami"
            height="285"
            image={props.img}
            title="Rahmi"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.judul}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Benar
          </Button>
          <Button size="small" color="primary">
            Tidak
          </Button>
        </CardActions>
      </Card>
    </Zoom>
  );
}
