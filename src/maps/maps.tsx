import { EuiPageHeader } from "@elastic/eui";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Circle, TileLayer } from "react-leaflet";
import { MapsTimeslider } from "./maps_timeslider";
import { MapsTopNavbar } from "./maps_top_navbar";
import { MapsToolbar } from "./maps_toolbar";
import { EuiDualRangeProps } from "../components/eui/range/dual_range";
import { MapsLayersWidget } from "./maps_layers_widget";

const username = "miukimiu";
const style_id = "ckm4ugehhdgzf17l9r58xfm45";
const tile_size = "256";
const url = `https://api.mapbox.com/styles/v1/${username}/${style_id}/tiles/${tile_size}/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`;

export default function Maps() {
  const last90DaysText: String[] = [
    "Feb 28 - Mar 7",
    "Mar 7 - Mar 14",
    "Mar 14 - Mar 21",
    "Mar 21 - Mar 28",
    "Mar 28 - April 4",
    "April 4 - April 11",
  ];
  const last90Days: EuiDualRangeProps["value"][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
  ];
  const ticks = [
    { label: "Feb 28", value: 0 },
    { label: "Mar 7", value: 1 },
    { label: "Mar 14", value: 2 },
    { label: "Mar 21", value: 3 },
    { label: "Mar 28", value: 4 },
    { label: "April 4", value: 5 },
    { label: "April 11", value: 6 },
  ];

  const radiusIncreaseArray = [4000, -2000, 1000, 1600, 2800, -2400];
  const radiusIncreaseArray2 = [3000, 1000, 3000, -2100, 500, -4000];

  const [timeWindow, setTimeWindow] = useState(last90Days[0]);
  const [timeWindowText, setTimeWindowText] = useState(last90DaysText[0]);
  const [radiusIncrease, setRadiusIncrease] = useState(0);
  const [radiusIncrease2, setRadiusIncrease2] = useState(0);

  const onChangeTimeWindow: EuiDualRangeProps["onChange"] = (value) => {
    setTimeWindow(value);
  };

  const onClickNext = () => {
    const isElement = (element: EuiDualRangeProps["value"]) =>
      element[0] === timeWindow[0];

    const position = last90Days.findIndex(isElement);

    if (position >= last90Days.length - 1) {
      setTimeWindow(last90Days[0]);
      setTimeWindowText(last90DaysText[0]);
      setRadiusIncrease(radiusIncreaseArray[0]);
      setRadiusIncrease2(radiusIncreaseArray2[0]);
    } else {
      setTimeWindow(last90Days[position + 1]);
      setTimeWindowText(last90DaysText[position + 1]);
      setRadiusIncrease(radiusIncreaseArray[position + 1]);
      setRadiusIncrease2(radiusIncreaseArray2[position + 1]);
    }
  };
  const onClickPrevious = () => {
    const isElement = (element: EuiDualRangeProps["value"]) =>
      element[0] === timeWindow[0];

    const position = last90Days.findIndex(isElement);

    if (position <= 0) {
      setTimeWindow(last90Days[last90Days.length - 1]);
      setTimeWindowText(last90DaysText[last90Days.length - 1]);
      setRadiusIncrease(radiusIncreaseArray[last90Days.length - 1]);
      setRadiusIncrease2(radiusIncreaseArray2[last90Days.length - 1]);
    } else {
      setTimeWindow(last90Days[position - 1]);
      setTimeWindowText(last90DaysText[position - 1]);
      setRadiusIncrease(radiusIncreaseArray[position - 1]);
      setRadiusIncrease2(radiusIncreaseArray2[position - 1]);
    }
  };

  const [isTimeSliderActive, setIsTimeSliderActive] = useState(false);

  const onToggleTimeslider = () => {
    setIsTimeSliderActive(!isTimeSliderActive);

    if (!isTimeSliderActive) {
      setTimeWindow(last90Days[0]);
      setRadiusIncrease(radiusIncreaseArray[0]);
      setRadiusIncrease2(radiusIncreaseArray2[0]);
    } else {
      setRadiusIncrease(0);
      setRadiusIncrease2(0);
    }
  };

  console.log("radiusIncrease", radiusIncrease);

  return (
    <div className="kbnMaps">
      <EuiPageHeader style={{ padding: 16 }}>
        <MapsTopNavbar />
      </EuiPageHeader>
      <div className="kbnMaps__container">
        <MapsToolbar onToggleTimeslider={onToggleTimeslider} />
        {isTimeSliderActive && (
          <MapsTimeslider
            onClose={onToggleTimeslider}
            onChangeTimeWindow={onChangeTimeWindow}
            onClickPrevious={onClickPrevious}
            onClickNext={onClickNext}
            timeWindowText={timeWindowText}
            timeWindow={timeWindow}
            ticks={ticks}
          />
        )}

        <MapsLayersWidget />

        <MapContainer
          center={[51.505, -0.09]}
          zoom={9}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={url}
          />

          <Circle
            center={[51.3, -1.3]}
            className="kbnMaps__circle"
            radius={6700 + radiusIncrease}
          />
          <Circle
            center={[51.505, -0.09]}
            className="kbnMaps__circle"
            radius={10700 + radiusIncrease}
          />

          <Circle
            center={[51.8, -0.9]}
            className="kbnMaps__circle"
            radius={5000 + radiusIncrease2}
          />
        </MapContainer>
      </div>
    </div>
  );
}
