import {
  makeStyles,
  Tooltip,
  withStyles,
  Typography,
  Fade,
} from "@material-ui/core";

export default function SingleChoice({ event, explanation }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {explanation ? (
        <BudgetTooltip
          title={explanation}
          arrow
          interactive
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 800 }}
          placement='top-end'
        >
          <Typography variant='subtitle1'>{event}</Typography>
        </BudgetTooltip>
      ) : (
        <Typography variant='subtitle1'>{event}</Typography>
      )}
    </div>
  );
}

const BudgetTooltip = withStyles((theme) => ({
  tooltip: {
    fontSize: 16,
    backgroundColor: "#ea5933",
  },
  arrow: {
    color: "#ea5933",
    fontSize: 25,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(-3),
    cursor: "pointer",
  },
}));
