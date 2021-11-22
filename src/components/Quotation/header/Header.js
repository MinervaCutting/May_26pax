import {
  AppBar,
  Toolbar,
  IconButton,
  Switch,
  makeStyles,
} from "@material-ui/core";
import darkLogo from "../../../assets/logodark.png";
import lightLogo from "../../../assets/logolight.png";
import WbSunnyTwoToneIcon from "@material-ui/icons/WbSunnyTwoTone";
import Brightness2TwoToneIcon from "@material-ui/icons/Brightness2TwoTone";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";
import { Link, useHistory } from "react-router-dom";
import { selectDarkMode, SET_DARKMODE } from "../../../features/DarkModeSlice";
import { useSelector, useDispatch } from "react-redux";
import AboutRFP from "./AboutRFP";

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(SET_DARKMODE(!darkMode));
  };

  return (
    <div className={classes.root}>
      <AppBar position='sticky' className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to='/'>
            <img
              src={`${darkMode ? darkLogo : lightLogo}`}
              alt='logo'
              className={classes.logo}
            />
          </Link>
          <div>
            <AboutRFP />
            <Switch
              checked={darkMode}
              checkedIcon={<WbSunnyTwoToneIcon />}
              icon={<Brightness2TwoToneIcon />}
              onChange={toggleDarkMode}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    marginBottom: theme.spacing(4),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "10rem",
  },
}));

export default Header;
