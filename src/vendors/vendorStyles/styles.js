import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    "& h6": {
      textIndent: "2rem",
    },
  },

  icons: {
    display: "flex",
    justifyContent: "flex-start",
  },
  pdfContainer: {
    display: "flex",
    justifyContent: "center",
  },
  pdfButton: {
    marginBottom: theme.spacing(3),
    backgroundColor: "#ea5933",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "tomato",
    },
  },
}));

export { useStyles };
