import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import SentimentSatisfiedTwoToneIcon from "@material-ui/icons/SentimentSatisfiedTwoTone";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import { toc } from "../../data/table_of_contents";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { SET_TABOPTION } from "../../features/TabOptionSlice";
import { selectBody, SET_BODY } from "../../features/BodySlice";

export default function MultiSelectTreeView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const body = useSelector(selectBody);
  return (
    <Box className={classes.root}>
      <List component='nav'>
        <ListItem button onClick={(e) => dispatch(SET_BODY("quotation"))}>
          <ListItemIcon>
            <CreateTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary='Quotation' />
        </ListItem>
        {body === "quotation" && (
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
          >
            {toc.map((item) => (
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                activeClass='active'
                duration={500}
                offset={-70}
                key={item.id}
              >
                <TreeItem nodeId={item.id} label={item.title}>
                  {item.options?.map((option) => (
                    <Link
                      to={option.id}
                      spy={true}
                      smooth={true}
                      activeClass='active'
                      duration={500}
                      offset={-70}
                      key={option.id}
                    >
                      <TreeItem nodeId={option.id} label={option.service}>
                        {option.choices?.map((choice) => (
                          <TreeItem
                            key={choice.id}
                            nodeId={choice.id}
                            label={choice.service}
                            onClick={(e) =>
                              dispatch(SET_TABOPTION(choice.tabPosition))
                            }
                          />
                        ))}
                      </TreeItem>
                    </Link>
                  ))}
                </TreeItem>
              </Link>
            ))}
          </TreeView>
        )}
       
      </List>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    maxWidth: 360,
    marginLeft: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      position: "sticky",
      top: 100,
      left: 0,
    },
  },
}));
