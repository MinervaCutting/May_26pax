import { makeStyles } from "@material-ui/core";
import hospitalMarker from "@iconify-icons/mdi/hospital-marker";
import silverwareVariant from "@iconify-icons/mdi/silverware-variant";
import medalOutline from "@iconify-icons/mdi/medal-outline";
import { Icon } from "@iconify/react";

export default function LocationMarker({ onClick, text }) {
  const classes = useStyles();
  return (
    <div className={classes.location_marker} onClick={onClick}>
      <Icon
        icon={
          text === "hospitalMarker"
            ? hospitalMarker
            : text === "medalOutline"
            ? medalOutline
            : silverwareVariant
        }
        className={classes.location_icon}
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  location_icon: {
    fontSize: "2.5rem",
    color: "#ea5933",
  },
}));
