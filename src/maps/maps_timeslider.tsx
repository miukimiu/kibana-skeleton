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
          <EuiPopover
            button={
              <EuiBadge
                iconType={MapsIconLayers}
                onClick={onClickLayersBadge}
                onClickAriaLabel="Aria label applied to text button"
              >
                1 layer
              </EuiBadge>
            }
            isOpen={isLayersPopoverOpen}
            closePopover={closeLayersPopover}
            anchorPosition="upCenter"
          >
            <div className="mapTocEntry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#D36086"
                fillOpacity="0.6"
                stroke="#D36086"
                strokeWidth="1"
                viewBox="0 0 16 16"
              >
                <defs>
                  <path d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 118 0a8 8 0 010 16zm0-4a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"></path>
                </defs>
                <ellipse
                  cx="8.035"
                  cy="7.966"
                  rx="7.382"
                  ry="7.381"
                  transform="skewY(.967) scale(.99986 1)"
                ></ellipse>
              </svg>
              <span>Number of cases</span>
            </div>
          </EuiPopover>

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
