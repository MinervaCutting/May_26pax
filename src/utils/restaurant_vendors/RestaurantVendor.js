import { Typography, Divider, Button } from "@material-ui/core";
import RestaurantSlider from "../../vendors/vendorUtils/RestaurantUtils";
import { useStyles } from "./styles";
import Paragraph from "../Paragraph";

export default function RestaurantVendor({
  data: { title, variant, paras, items, pdf },
}) {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <div>
        <Typography variant='h4' gutterBottom>
          {title}
        </Typography>
        <Paragraph variant={variant} paras={paras} />
        {pdf && (
          <div className={classes.pdfContainer}>
            <Button variant='contained' className={classes.pdfButton}>
              <a href={pdf} download>
                Download Sample menus
              </a>
            </Button>
          </div>
        )}

        <Divider />
      </div>
      <RestaurantSlider items={items} img1={items[0].photo} />
    </div>
  );
}
