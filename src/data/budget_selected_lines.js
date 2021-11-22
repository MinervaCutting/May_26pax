
import {
  airportd18,
  airportd29,
  airportd50,
  airportd59,
  airportd71,
  airportn18,
  airportn29,
  airportn50,
  airportn59,
  airportn71,
  disposal4h50d,
  disposal4h50n,
  disposal50km50n,
  disposal6h50d,
} from "./transfers";


import { windsor } from "../vendors/windsor/data";
import { lolive } from "../vendors/lolive/data";
import { canfisher } from "../vendors/can_fisher/data";
import { estadiolimpic } from "../vendors/estadi_olimpic/data";
import { tragaluz } from "../vendors/tragaluz/data";
import { barceloneta } from "../vendors/barceloneta/data";
import { somni } from "../vendors/somni/data";
import { dostorres } from "../vendors/dos_torres/data";
import { mana } from "../vendors/mana75/data";

export const useBudgetRows = () => {

  const budgetRows = [

    { event: "Transfer to/from Airport-BCN, 18-seater coach (08.00h-20.00h)", selected: airportd18 },
    { event: "Transfer to/from Airport-BCN, 29-seater coach (08.00h-20.00h)", selected: airportd29 },
    { event: "Transfer to/from Airport-BCN, 50-seater coach (08.00h-20.00h)", selected: airportd50 },
    { event: "Transfer to/from Airport-BCN, 59-seater coach (08.00h-20.00h)", selected: airportd59 },
    { event: "Transfer to/from Airport-BCN, 71-seater coach (08.00h-20.00h)", selected: airportd71 },
    { event: "Transfer to/from Airport-BCN, 18-seater coach (20.00h- 08.00h)", selected: airportn18 },
    { event: "Transfer to/from Airport-BCN, 29-seater coach (20.00h- 08.00h)", selected: airportn29 },
    { event: "Transfer to/from Airport-BCN, 50-seater coach (20.00h- 08.00h)", selected: airportn50 },
    { event: "Transfer to/from Airport-BCN, 59-seater coach (20.00h- 08.00h)", selected: airportn59 },
    { event: "Transfer to/from Airport-BCN, 71-seater coach (20.00h- 08.00h)", selected: airportn71 },
    { event: "Bus at disposal 4h (08.00h-20.00h)", selected: disposal4h50d },
    { event: "Bus at disposal 6h (08.00h-20.00h)", selected: disposal6h50d },
    { event: "Bus at disposal 4h (20.00h- 8.00h)", selected: disposal4h50n },
    { event: "Bus at disposal for dinner outside Barcelona (5h) (20.00h- 8.00h)", selected: disposal50km50n },
    {event: "Olympic Stadium, Venue rental to organice sportive activity",
      selected: estadiolimpic
    },
    
    {event: "Dinner at Restaurant Windsor (Menu including water, wine and coffees) from",
      selected: windsor
    },
    
    {event: "Dinner at Restaurant L'Olive (Menu including water, wine and coffees) from",
      selected: lolive
    },
    
    {event: "Dinner at Restaurant Can Fisher (Menu including water, wine and coffees) from",
      selected: canfisher
    },
    {event: "Dinner at Restaurant Tragaluz (Menu including water, wine and coffees) from",
    selected: tragaluz
    },
    {event: "Dinner at Restaurant Barceloneta (Menu including water, wine and coffee) from",
    selected: barceloneta
    },
    {event: "Dinner at Restaurant Somni (Menu including water, wine and coffee) from",
    selected: somni
    },
    {event: "Dinner at Restaurant Dos Torres (Menu including water, wine and coffee) from",
    selected: dostorres
    },
    {event: "Dinner at Restaurant Mana 75 (Menu including water, wine and coffee) from",
    selected: mana
  },
    



  ];

  return [budgetRows];
};
