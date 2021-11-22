import { makeStyles, Typography } from "@material-ui/core";

export default function LocationInfoBox({ info }) {
  const classes = useStyles();
  return (
    <div className={classes.location_info}>
      <Typography variant='h5'>Vendor Info</Typography>
      <ul>
        <li>
          Name : <strong>{info.title}</strong>
        </li>
        <li>
          Category : <strong>{info.category}</strong>
        </li>
      </ul>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  location_info: {
    position: "absolute",
    top: "0.5rem",
    left: "0.5rem",
    width: "auto",
    minWidth: "200px",
    padding: theme.spacing(1),
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: "10px",
    fontSize: "1rem",
    color: "#fff",
    "& ul": {
      listStyleType: "none",
      padding: theme.spacing(0),
    },
    "& ul li": {
      padding: theme.spacing(1, 0, 1, 0),
    },
  },
}));
