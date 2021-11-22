import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import { useState, useEffect } from "react";
import LocationInfoBox from "./LocationInfoBox";

export default function OverviewMap({ center, zoom }) {
  const [locationInfo, setLocationInfo] = useState(null);
  const [vendors, setVendors] = useState();

  useEffect(() => {
    (async () => {
      const baseURL = "https://warm-sea-39187.herokuapp.com/api/map-vendors";
      try {
        let response = await fetch(baseURL, { importance: "high" });
        const data = await response.json();
        setVendors(data);
        console.log("here are the markers =>", vendors);
      } catch (err) {
        console.log("error=>", err);
      }
    })();
  }, []);

  const handleAPILoaded = (map, maps) => {
    map.streetViewControl = true;
  };

  return (
    <div style={{ width: "100%", height: "800px", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCfSR8KYZbIyX5FwhTRN6sc6sMsBBfzHGA" }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={center}
        defaultZoom={zoom}
        onGoogleApiLoaded={({ map, maps }) => handleAPILoaded(map, maps)}
      >
        {vendors?.map((vendor) => (
          <LocationMarker
            key={vendor._id}
            lat={vendor.coordinates[1]}
            lng={vendor.coordinates[0]}
            text={vendor.icon}
            onClick={() =>
              setLocationInfo({ title: vendor.text, category: vendor.cat })
            }
          />
        ))}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
}

OverviewMap.defaultProps = {
  center: {
    lat: 41.387,
    lng: 2.17,
  },
  zoom: 14,
};
