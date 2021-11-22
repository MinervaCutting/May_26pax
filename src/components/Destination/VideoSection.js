import { useState } from "react";
import { Container, Box, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DestiThumb from "../../assets/desti_thumb.jpg";
import PlayCircleFilledWhiteTwoToneIcon from "@material-ui/icons/PlayCircleFilledWhiteTwoTone";
import ModalVideo from "react-modal-video";
import "./styles.scss";

function VideoSection(props) {
  const { classes } = props;
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section>
      <Container className={classes.containerBox}>
        <Box className={classes.thumbnail}>
          <img src={DestiThumb} alt='Thumbnail' />
          <IconButton className={classes.videoBtn} onClick={handleClick}>
            <PlayCircleFilledWhiteTwoToneIcon className={classes.largeIcon} />
          </IconButton>
        </Box>
      </Container>
      <ModalVideo
        channel='youtube'
        isOpen={videoOpen}
        videoId='Pym5otg6748'
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}

const styles = (theme) => ({
  containerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  thumbnail: {
    margin: "0 auto",
    position: "relative",
    "& img": {
      zIndex: 1,
      height: 310,
      borderRadius: "10px",
    },
  },
  videoBtn: {
    position: "absolute",
    left: 140,
    top: 60,
    zIndex: 2,
    margin: theme.spacing(2),
    padding: 24,
  },
  largeIcon: {
    fontSize: "4em",
    color: theme.palette.type === "dark" ? "#ccc" : "#ea5933",
    "&:hover": {
      color: theme.palette.type === "light" ? "#ccc" : "#ea5933",
    },
  },
});

export default withStyles(styles)(VideoSection);
