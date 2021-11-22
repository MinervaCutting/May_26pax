import {
  Paper,
  Box,
  ButtonGroup,
  makeStyles,
  Typography,
} from "@material-ui/core";
import parse from "html-react-parser";
import Paragraph from "../../utils/Paragraph";
import infographic from "../../assets/infographic.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import ArrowRightAltTwoToneIcon from "@material-ui/icons/ArrowRightAltTwoTone";

const textUpper = {
  variant: "h6",
  paras: [
    ` <strong> Cutting Edge Events</strong> offers a fresh approach to the world of [Meetings & Events]. As the name of the company suggests, we are on top of the latest technologies, and apply them every day to stay on top of the game.`,

    `We at <strong>Cutting Edge Events</strong> are very proud of our progress, from a two man operation back in 2008, to the award winning agency that we are today.`,

    `Here’s a brief list of our main Unique Selling Points and typical workflow, which combines with a honest passion for the industry.`,
  ],
};

const listItems = [
  `When you send us a <strong>RFP</strong>, rather than a 26-page <strong>pdf</strong> and an <strong>excel sheet budget</strong>, you get a <strong>private website link</strong> containing all the information you need, in a beautiful structured layout including maps, and program overviews.`,

  `As a special service, we offer to build the very same <strong>website</strong> using your logo, so that you can directly send the link to your client. If you send us the text in your language, we can place it in the <strong>website</strong> - <em>t&c apply</em>`,

  `If the program is confirmed, we will assign your project to an experienced project manager that will be your main point of contact. All the documents, contracts, financials, and communications leading up to the Event will be added to the original <strong>website</strong> , so that you - the client - get easy access to the information at all times.
  `,

  `We will share working documents in the cloud, like the day-by-day and transfer lists, so that rather than exchanging thousands of emails, you will be able to edit just one document. <strong>It just works!</strong>`,

  `All our hard and honest work during the past 10 years is paying off, and we currently enjoy a vast network of vendors within the industry across all our destinations - namely <strong>Spain and Portugal</strong> Thanks to this network, we are able to offer a wide range of <strong>MICE products</strong> and mind-blowing activities.`,

  ` All in all, we encourage you to try us - and experience an Agency that works like no other in the industry !
  `,
];

const textLower = {
  variant: "h6",
  paras: [
    ` You can find plenty of references within our Curriculum, but here’s what some of our latest clients had to say about our work - (<em>all groups had above 70pax attendance</em>):`,
  ],
};

const recommendations = {
  variant: "h6",
  paras: [
    ` <em>
    Just a short note that I got some feedback from our client this morning. They were really pleased with all our arrangements. Good hotels, very good restaurants and very good organised all in all. They are really happy and want to book next year’s trip soon . Thank you both for excellent cooperation, it is a pleasure working with you, as always! - Frowald Strallhofer, <strong>A Company</strong>, - February, 2019
    </em>`,

    ` <em>
    Once again, THANK YOU for your great contribution to the success of last week event in Sitges! We have received so much praise and acknowledgement for the flawless execution of the event and of course for the hotel, meeting facilities and restaurants. We couldn?t have done it without your experience and deep knowledge. You really did a great job! -Anne Orthmann,  <strong>Oticon</strong>, - May, 2018
    </em>`,

    `<em>
    As a partner at Better Travel & Events , I have had the pleasure of collaborating with Cutting Edge Events on several occasions. On each event, I have experienced a very high level of professionalism, personal service, flexibility, and good understanding of our needs and briefing, for different clients and nationalities. It is always a great pleasure to work with Cutting Edge Events and a solid partnership - Mette Ingsgrup, <strong>Better travel</strong>, - March, 2019
    </em>`,
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "carousel-item",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: true,
  sliderClass: "",
  slidesToSlide: 1,
};

const Credentials = () => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.bodyContainer}>
      <div className={classes.text_bullets}>
        <Paragraph variant={textUpper.variant} paras={textUpper.paras} />
        <Carousel {...carouselParams}>
          {listItems.map((item, i) => (
            <Box key={i}>
              <Typography variant='h5'>
                <span>
                  <ArrowRightAltTwoToneIcon
                    color='primary'
                    fontSize='large'
                    className={classes.icon}
                  />
                </span>
                {parse(item)}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </div>
      <div className={classes.lower}>
        <Paragraph variant={textLower.variant} paras={textLower.paras} />
        {recommendations.paras.map((recommendation, i) => (
          <div className={classes.recommendation} key={i}>
            <Typography variant='h6'> {parse(recommendation)}</Typography>
          </div>
        ))}
      </div>
      <div>
        <img src={infographic} alt='infographic' />
      </div>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    "& h6": {
      textIndent: "2rem",
    },
  },
  text_bullets: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  lower: {
    padding: theme.spacing(4),
    flex: 0.5,
  },
  icon: {
    fontSize: 40,
  },
  recommendation: {
    borderRight: "5px solid #ea5933",
    borderBottom: "1px solid #ea5933",
    borderRadius: "1rem",
    cursor: "grab",
    margin: theme.spacing(2),
    padding: theme.spacing(5),

    "& h6": {
      fontSize: 22,
      transition: "scale 2s",
      transitionTimingFunction: "ease-in-out",
    },
    "&:hover": {
      borderBottom: "1px solid #000",
      borderRight: "5px solid #000",
      backgroundColor: "#ea5933",
    },
    "& h6:hover": {
      transform: "scale(1.05)",
      color: "#fff",
    },
  },
}));

export default Credentials;
