import { useState } from "react";
import {
  makeStyles,
  IconButton,
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import accounting from "accounting";
import { getHotelTotal, getTotalRooms } from "../../utils/utils";
import SingleChoice from "./SingleChoice";

export default function Row({
  row: {
    event,
    selected,
    selected: { date, cat, pax, unitcost, rooms, explanation },
  },
}) {
  const [open, setOpen] = useState(true);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        {cat === "hospitality" ? (
          <TableCell>
            <IconButton size='small' onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        ) : (
          <TableCell></TableCell>
        )}

        <TableCell>{date}</TableCell>
        <TableCell>
            <SingleChoice event={event} explanation={explanation} />
        </TableCell>
        <TableCell>{pax}</TableCell>
        <TableCell>
          {cat !== "hospitality" && accounting.formatMoney(unitcost, "€")}
        </TableCell>
        <TableCell>
          {cat !== "hospitality"
            ? accounting.formatMoney(pax * unitcost, "€")
            : accounting.formatMoney(getHotelTotal(selected), "€")}
        </TableCell>
      </TableRow>
      {/* breakdown starts here  */}
      {cat === "hospitality" && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box margin={1}>
                <Table size='small' aria-label='hotel breakdown'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Nr. Units </TableCell>
                      <TableCell>Nr. of nights </TableCell>
                      <TableCell>Cost per room per night</TableCell>
                      <TableCell>Total Cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rooms.map((room) => (
                      <TableRow key={room.title}>
                        <TableCell component='th' scope='row'>
                          {room.title}
                        </TableCell>
                        <TableCell>
                          {room.cat === "citytax"
                            ? getTotalRooms(selected.rooms)
                            : room.units}
                        </TableCell>
                        <TableCell>{room.nights}</TableCell>
                        <TableCell>
                          {accounting.formatMoney(room.unitcost, "€")}
                        </TableCell>
                        <TableCell>
                          {room.cat === "citytax"
                            ? accounting.formatMoney(
                                getTotalRooms(rooms) * room.unitcost,
                                "€"
                              )
                            : accounting.formatMoney(
                                room.units * room.nights * room.unitcost,
                                "€"
                              )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  delete: {
    cursor: "pointer",
    opacity: 0.8,
    "&:hover": {
      color: "#ea5933",
      opacity: 1,
    },
  },
});
