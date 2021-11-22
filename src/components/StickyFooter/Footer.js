import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary'>
      {"Copyright © "}
      <Link color='inherit' href='https://cuttingedge-events.com/'>
        CUTT/events
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component='main' className={classes.main} maxWidth='sm'>
        <Typography variant='h3' gutterBottom>
          We are CUTT/events !
        </Typography>
        <Typography variant='h5' gutterBottom>
          This is our mission !
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Typography variant='body1'>Follow us on Social Networks</Typography>
          <div>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </div>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
}));
