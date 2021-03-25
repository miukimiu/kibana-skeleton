import { HTMLAttributes, ReactElement, useState } from "react";
import { CommonProps, EuiPopover } from "@elastic/eui";
import classNames from "classnames";
import { EuiButtonIcon, EuiBadge, EuiButtonEmpty } from "@elastic/eui";
import { MapsIconNext, MapsIconPrevious, MapsIconLayers } from "./icons/";
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
  const [isLayersPopoverOpen, setIsLayersPopoverOpen] = useState(false);
  const [isTimeWindowPopoverOpen, setIsTimeWindowPopoverOpen] = useState(false);

  const onClickLayersBadge = () =>
    setIsLayersPopoverOpen((isLayersPopoverOpen) => !isLayersPopoverOpen);

  const closeLayersPopover = () => setIsLayersPopoverOpen(false);

  const onClickTimeWindow = () =>
    setIsTimeWindowPopoverOpen(
      (isTimeWindowPopoverOpen) => !isTimeWindowPopoverOpen
    );

  const closeTimeWindowPanel = () => setIsTimeWindowPopoverOpen(false);

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
          <EuiPopover
            button={
              <EuiButtonEmpty
                size="s"
                iconType="controlsHorizontal"
                flush="left"
                color="text"
                onClick={onClickTimeWindow}
              >
                {timeWindowText}
              </EuiButtonEmpty>
            }
            isOpen={isTimeWindowPopoverOpen}
            closePopover={closeTimeWindowPanel}
            anchorPosition="upCenter"
          >
            <div>
              <div>Enable history</div>
              <div>Lock current time window</div>
            </div>
          </EuiPopover>
        </div>

        <div className="kbnMapsTimeslider__innerPanel">
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
