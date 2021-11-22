import img1 from "./rest1.jpg";
import img2 from "./rest2.jpg";
import img3 from "./rest3.jpg";
import img4 from "./rest4.jpg";
import img5 from "./rest5.jpg";
import img6 from "./rest6.jpg";

export const verne = {
  title: "Windsor",
  cat: "single",
  type: "Meals",
  unitcost: 60,
  pax: 1,
  date: "8th Feb - Dinner",
  explanation: "Private rooms: Terrace (min 58 max 84), Salón Corcega (min 29 max 38), Main Dinning Room (min 45 max 60) ",
};

export const verne_data = {
  variant: "h6",
  title: "",
  pdf: null,
  paras: [
    ` Opened in 2015, Verne recreates an original aquatic environment thanks to the inspiration of Captain Nemo and its submarine Nautilus. Giant jellyfish and tentacles hanging from the ceiling are some of the elements that decorate the room and make us feel like we were in the deep ocean.`,
    ` <strong>Verne</strong> is certainly a different and funny venue where we can organize a chill mingle event`,
    ` The menu offers Mediterranean dishes and, how could it be otherwise, recommended seafood tapas ideal for sharing. After dinner, the restaurant remains open to provide good signature cocktails served in seashells in a very original way.`,
    ` <strong>Budget</strong>
    <ul>
    <li>Minimum expense F&B: 2500€ </li>
    <li>Cocktail dinner including 1h open bar of wine, beer and softdrinks  rates from: 48€ per person VAT inc</li>
    <li>3h open bar of wine, beer and softdrinks rates from: 37,50€ per person VAT inc</li>
    <li> DJ: 450€ VAT inc</li>
      </ul>`,
      ` <strong>TOTAL (30 cocktail menus + 30 x 3h open bar + DJ ): 3015€ VAT inc</strong>`,
 ,
  ],
  items: [
    {
      caption: "Private Events room",
      photo: img1,
    },
    {
      caption: "Restaurant",
      photo: img2,
    },
    {
      caption: "Private Events room",
      photo: img3,
    },
    {
      caption: "Entrance",
      photo: img4,
    },
    {
      caption: "Restaurant",
      photo: img5,
    },
    {
      caption: "Restaurant",
      photo: img6,
    },
  ],
};
