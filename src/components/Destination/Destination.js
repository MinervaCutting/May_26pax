import { makeStyles } from "@material-ui/core";
import VideoSection from "./VideoSection";
import Weather from "./Weather";

const Destination = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <VideoSection />
      <Weather />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

export default Destination;
