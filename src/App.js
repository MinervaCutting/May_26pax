import { Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./features/DarkModeSlice";
import DrawerStructure from "./components/Quotation/DrawerStructure";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Header from "./components/Quotation/header/Header";

function App() {
  const darkMode = useSelector(selectDarkMode);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#22281b" : "#DDBCB0",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ea5933",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: "Barlow Condensed",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightBold: 700,
      h4: {
        color: "#ea5933",
      },
    },
    overrides: {
      MuiListItemText: {
        primary: {
          fontSize: 18,
          cursor: "pointer",
          color: "#ea5933",
          "&:hover": {
            backgroundColor: "#ea5933",
            color: "#fff",
          },
        },
      },
      MuiSwitch: {
        switchBase: {
          color: "#0000ff",
        },
        colorSecondary: {
          "&$checked": {
            color: "#ffff00",
          },
        },
        track: {
          opacity: 0.2,
          backgroundColor: "#fff",
          width: 50,
        },
      },
      MuiTab: {
        root: {
          fontSize: "1.5rem",
          fontWeight: "bold",
        },
      },
      MuiTreeItem: {
        iconContainer: {
          color: "#ea5933",
        },
        label: {
          color: "#ea5933",
          fontSize: 18,
          "&&:hover": {
            backgroundColor: "#DDBCB0",
            color: darkMode ? "#fff" : "#22281b",
          },
        },
      },
      MuiMenuItem: {
        root: {
          padding: "2rem",
          "&&:hover": {
            backgroundColor: "#ea5933",
            opacity: 0.7,
            color: "#fff",
          },
        },
      },
    },
  });
  return (
    <Container maxWidth='lg'>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/destination'>
              <Header />
              <Destination />
            </Route>
            <Route path='/'>
              <DrawerStructure />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Container>
  );
}

export default App;
