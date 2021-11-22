import { Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Gallery from "react-grid-gallery";
import HotelIcons from "../HotelIcons";
import { useStyles } from "./styles";
import Paragraph from "../Paragraph";

export default function HotelVendor({
  data: {
    title,
    stars,
    category,
    variant,
    paras,
    photos,
    leftIconsText,
    rightIconsText,
  },
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4' gutterBottom>
          {title}
        </Typography>
        <Rating name='read-only' value={stars} readOnly emptyIcon />
        <Typography component='subtitle1'>
          <sup>{category}</sup>
        </Typography>
      </div>
      <div className={classes.text}>
        <Paragraph variant={variant} paras={paras} />
      </div>
      <Gallery images={photos} />
      <HotelIcons
        leftIconsText={leftIconsText}
        rightIconsText={rightIconsText}
      />
    </div>
  );
}
