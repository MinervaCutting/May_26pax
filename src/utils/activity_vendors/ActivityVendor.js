import ImageGallery from "react-image-gallery";
import { useStyles } from "./styles";
import Paragraph from "../Paragraph";

export default function ActivityVendor({ data: { variant, paras, images } }) {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <Paragraph variant={variant} paras={paras} />
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}
