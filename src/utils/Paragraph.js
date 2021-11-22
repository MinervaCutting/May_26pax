import { Typography } from "@material-ui/core";
import parse from "html-react-parser";

const Paragraph = ({ variant, paras }) => {
  return (
    <div>
      {paras.map((para, i) => (
        <Typography variant={variant} paragraph key={i}>
          {parse(`${para}`)}
        </Typography>
      ))}
    </div>
  );
};

export default Paragraph;
