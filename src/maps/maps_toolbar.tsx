import {
  CommonProps,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import classNames from "classnames";
import { HTMLAttributes, ReactElement } from "react";
import { MapsIconClockPlay } from "./icons/";

type MapsToolbarProps = CommonProps &
  HTMLAttributes<HTMLDivElement> & {
    onToggleTimeslider: () => void;
  };

export function MapsToolbar({
  className,
  onToggleTimeslider,
  ...rest
}: MapsToolbarProps): ReactElement {
  const classes = classNames("kbnMapsToolbarOverlay", className);

  return (
    <EuiFlexGroup
      gutterSize="s"
      responsive={false}
      className={classes}
      direction="column"
      {...rest}
    >
      <EuiFlexItem>
        <EuiFlexGroup
          gutterSize="s"
          responsive={false}
          direction="column"
          {...rest}
        >
          <EuiFlexItem className="kbnMapsToolbarOverlay__buttonGroup">
            <EuiButtonIcon
              color="text"
              size="s"
              iconType="plusInCircleFilled"
              aria-label="Filter"
            />

            <EuiButtonIcon
              color="text"
              size="s"
              iconType="minusInCircleFilled"
              aria-label="Filter"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiButtonIcon
          className="kbnMapsToolbarOverlay__button"
          color="text"
          size="s"
          iconType="crosshairs"
          aria-label="Filter"
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiButtonIcon
          className="kbnMapsToolbarOverlay__button"
          color="text"
          size="s"
          iconType="expand"
          aria-label="Filter"
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiButtonIcon
          className="kbnMapsToolbarOverlay__button"
          color="text"
          size="s"
          iconType="wrench"
          aria-label="Filter"
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiButtonIcon
          className="kbnMapsToolbarOverlay__button"
          color="text"
          size="s"
          iconType={MapsIconClockPlay}
          aria-label="Filter"
          onClick={onToggleTimeslider}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
