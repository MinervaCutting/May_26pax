import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import RestaurantTwoToneIcon from "@material-ui/icons/RestaurantTwoTone";
import HotelTwoToneIcon from "@material-ui/icons/HotelTwoTone";
import WifiTwoToneIcon from "@material-ui/icons/WifiTwoTone";
import PoolTwoToneIcon from "@material-ui/icons/PoolTwoTone";
import QueryBuilderTwoToneIcon from "@material-ui/icons/QueryBuilderTwoTone";
import LocalCafeTwoToneIcon from "@material-ui/icons/LocalCafeTwoTone";
import AccessibleForwardTwoToneIcon from "@material-ui/icons/AccessibleForwardTwoTone";
import { useStyles } from "../vendors/vendorStyles/styles";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export default function HotelIcons({ leftIconsText, rightIconsText }) {
  const classes = useStyles();
  const leftIcons = [
    <RoomTwoToneIcon />,
    <RestaurantTwoToneIcon />,
    <HotelTwoToneIcon />,
    <WifiTwoToneIcon />,
  ];

  const rightIcons = [
    <PoolTwoToneIcon />,
    <QueryBuilderTwoToneIcon />,
    <LocalCafeTwoToneIcon />,
    <AccessibleForwardTwoToneIcon />,
  ];

  let mixedLeft = leftIcons.map((x, i) => {
    return { icon: x, text: leftIconsText[i] };
  });

  let mixedRight = rightIcons.map((x, i) => {
    return { icon: x, text: rightIconsText[i] };
  });

  return (
    <div className={classes.icons}>
      <List component='nav' aria-label='main mailbox folders'>
        {mixedLeft.map((item, i) => (
          <ListItem key={i}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <List component='nav' aria-label='main mailbox folders'>
        {mixedRight.map((item, i) => (
          <ListItem key={i}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
