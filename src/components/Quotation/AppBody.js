import { Paper, makeStyles, Typography, Button } from "@material-ui/core";
import VendorOptionsTab from "../../utils/TabPanel";
import Budget from "../Budget/Budget";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Footer from "../StickyFooter/Footer";
import RestaurantVendor from "../../utils/restaurant_vendors/RestaurantVendor";
import ActivityVendor from "../../utils/activity_vendors/ActivityVendor";
import { sbevents_data } from "../../vendors/sb_events/data";
import { verne_data } from "../../vendors/verne/data";
import {canalolimpic_data } from "../../vendors/canal_olimpic/data";
import { marae_data } from "../../vendors/marae/data";



export default function AppBody() {
  const classes = useStyles();
  const budgetRef = useRef();
  const pageStyle = `
  @media all {
    .page-break {
      display: none;
    }
  }
  
  @media print {
    html, body {
      height: initial !important;
      overflow: auto !important;
      -webkit-print-color-adjust: exact;
    }
  }
  
  @media print {
    .page-break {
      margin-top: 1rem;
      display: block;
      page-break-before: auto;
    }
  }
  
  @page {
    size: landscape;
    margin: 20mm;
   
  }
`;



  return (
    <Paper elevation={2} className={classes.bodyContainer}>
      <Typography variant='h4' gutterBottom>
        Group 26 pax  - 16-20 May 2022 - Barcelona
      </Typography>
      <Typography variant='h6' gutterBottom>
        <em>Cutting Edge Events - November 22nd, 2021</em>
      </Typography>

      <Typography variant='h6' gutterBottom>
        <strong>Program Overview: </strong>
        <ul>
          <li><strong>16th May:</strong> Arrival, transfer and dinner at hotel SB BCN Events</li>
          <li><strong>17th May </strong> Meetings, buffet lunch and dinner at hotel SB BCN Events</li>
          <li><strong>18th May: </strong> Meetings, buffet lunch and dinner at hotel SB BCN Events</li>
          <li><strong>19th May: </strong> Teambuilding activities at Olympic Channel, lunch at hotel SB BCN Events and dinner at Marae Beach Bar</li>
          <li><strong>20th May: </strong> Transfer out, departures</li>
        </ul>
      </Typography>
      <Typography variant='h6' gutterBottom>
      Following the client needs and budget, I am very happy to send you my proposal. I think it is a very good option and I hope your client will love it🤗, 
      </Typography>
      <Typography variant='h6' gutterBottom>
      The hotel we propose is located in Castelldefels, 2,5km from the beach (approx 30 minutes walking) just next to a big shopping mall and in fron the Olympic Channel (where we propose to organize the teambuilding activity)
      </Typography>
      <Typography variant='h4' gutterBottom id='rest1'>
      🛌🏼 SB BCN Events
      </Typography>
      <RestaurantVendor data={sbevents_data} />
      <Typography variant='h4' gutterBottom id='rest2'>
      🚣🏻‍♂️ Team Building - Canal Olimpic
      </Typography>
      <ActivityVendor data={canalolimpic_data} />
      <Typography variant='h4' gutterBottom id='rest3'>
      🍽️ Marae
      </Typography>
      <RestaurantVendor data={marae_data} />


      
      <Typography variant='h4' gutterBottom id='map'>
      <a href="https://www.google.com/maps/d/edit?mid=1IZ9kiOUAQFyOJLhDHyF06fwZ3_H_Hyyy&usp=sharing" target ="_blank">🗺️ Overview Map</a>
      </Typography>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    width: "100%",
  },
}));
