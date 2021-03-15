import { HTMLAttributes, ReactElement } from "react";
import { CommonProps } from "@elastic/eui";
import classNames from "classnames";
import { EuiIcon, EuiButtonIcon } from "@elastic/eui";
import { MapsIconNext, MapsIconPrevious } from "./icons/";
import { EuiDualRange } from "../components/eui";
import { EuiDualRangeProps } from "../components/eui/range/dual_range";

type MapsTimesliderProps = CommonProps &
  HTMLAttributes<HTMLDivElement> & {
    onClose: () => void;
    onChangeTimeWindow: EuiDualRangeProps["onChange"];
    onClickPrevious: () => void;
    onClickNext: () => void;
    timeWindowText: String;
    timeWindow: EuiDualRangeProps["value"];
    ticks: EuiDualRangeProps["ticks"];
  };

export function MapsTimeslider({
  className,
  onClose,
  onChangeTimeWindow,
  timeWindowText,
  onClickPrevious,
  onClickNext,
  timeWindow,
  ticks,
}: MapsTimesliderProps): ReactElement {
  const classes = classNames("kbnMapsTimeslider", className);

  return (
    <div className={classes}>
      <div className="kbnMapsTimeslider__row">
        <EuiButtonIcon
          onClick={onClose}
          iconType="cross"
          color="subdued"
          className="kbnMapsTimeslider__close"
          aria-label="Close timeslider"
        ></EuiButtonIcon>

        <div className="kbnMapsTimeslider__timeWindow">
          <EuiIcon
            className="kbnMapsTimeslider__timeWindowDot"
            type="dot"
            color="primary"
          ></EuiIcon>
          <span>{timeWindowText}</span>
        </div>
        <div className="kbnMapsTimeslider__innerPanel">
          <EuiButtonIcon
            className="kbnMapsTimeslider__settings"
            color="text"
            iconType="controlsHorizontal"
          />
          <div className="kbnMapsTimeslider__controls">
            <EuiButtonIcon
              onClick={onClickPrevious}
              iconType={MapsIconPrevious}
              color="text"
              aria-label="Previous time window"
            ></EuiButtonIcon>
            <EuiButtonIcon
              onClick={onClickNext}
              iconType={MapsIconNext}
              color="text"
              aria-label="Next time window"
            ></EuiButtonIcon>
          </div>
        </div>
      </div>
      <div className="kbnMapsTimeslider__row">
        <EuiDualRange
          fullWidth={true}
          value={timeWindow}
          onChange={onChangeTimeWindow}
          showTicks={true}
          min={0}
          max={6}
          step={1}
          ticks={ticks}
        />
      </div>
    </div>
  );
}
