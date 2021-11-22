import { makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";

export default function RestaurantSlider({ items, img1 }) {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <div onClick={() => setIsOpen(true)} className={classes.main_image}>
        <img src={img1} alt='' />
        <Typography variant='h5'>
          Click on the image to access all pictures
        </Typography>
      </div>

      <ReactBnbGallery
        show={isOpen}
        photos={items}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  main_image: {
    position: "relative",
    "& img": {
      border: "2px solid #ea5933",
      width: "100%",
      objectFit: "cover",
      cursor: "pointer",
    },
    "& h5": {
      position: "absolute",
      top: "1rem",
      left: "1rem",
      color: "#fff",
      background: "#000",
      padding: theme.spacing(1),
      borderRadius: "0.5rem",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem",
      },
    },
  },
}));
