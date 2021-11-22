import {
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import accounting from "accounting";
import Row from "./Row";
import { getTotal } from "../../utils/utils";
import { forwardRef } from "react";
import { useBudgetRows } from "../../data/budget_selected_lines";
import BudgetSubTotals from "./BudgetSubTotals";
import bedOutline from "@iconify-icons/mdi/bed-outline";
import silverwareVariant from "@iconify-icons/mdi/silverware-variant";
import medalOutline from "@iconify-icons/mdi/medal-outline";
import bus from "@iconify-icons/mdi/bus";

const Budget = (props, ref) => {
  const classes = useStyles();
  const [budgetRows] = useBudgetRows();

  const typesArr = [
    { type: "Hospitality", icon: bedOutline },
    { type: "Meals", icon: silverwareVariant },
    { type: "Activities", icon: medalOutline },
    { type: "Transfers", icon: bus },
  ];

  return (
    <div className={classes.root} ref={ref}>
      <Table stickyHeader size='small' id='budget'>
        <TableHead>
          <TableRow>
            <TableCell width='5%' />
            <TableCell width='20%'>Date</TableCell>
            <TableCell width='35%'>Service</TableCell>
            <TableCell width='5%'>pax</TableCell>
            <TableCell width='15%'>unit cost w/VAT</TableCell>
            <TableCell width='10%'>Cost incl VAT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {budgetRows.map((row) => (
            <Row key={row.title} row={row} />
          ))}
          <TableRow>
            <TableCell colSpan={4} />
            <TableCell>
              <strong>TOTAL BUDGET</strong>
            </TableCell>
            <TableCell>
              <strong>
                {accounting.formatMoney(getTotal(budgetRows), "€")}
              </strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Grid container spacing={3} className={classes.gridLayout}>
        {typesArr.map(({ type, icon }, i) => (
          <Grid item key={i} xs={6} md={3}>
            <BudgetSubTotals cost={budgetRows} itemType={type} icon={icon} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      overflowX: "scroll",
    },
  },
  gridLayout: {
    padding: theme.spacing(3),
  },
}));

export default forwardRef(Budget);
