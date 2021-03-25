import {
  EuiButtonIcon,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiTitle,
  EuiToolTip,
} from "@elastic/eui";
import { EuiIcon } from "@elastic/eui";

export function MapsLayersWidget() {
  return (
    <div className="mapWidgetOverlay">
      <EuiPanel
        className="mapWidgetControl mapWidgetControl-hasShadow"
        paddingSize="none"
        grow={false}
      >
        <EuiFlexItem className="mapWidgetControl__headerFlexItem" grow={false}>
          <EuiFlexGroup
            justifyContent="spaceBetween"
            alignItems="center"
            responsive={false}
            gutterSize="none"
          >
            <EuiFlexItem>
              <EuiTitle size="xxxs" className="mapWidgetControl__header">
                <h2>Layers</h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiToolTip delay="long" content="Collapse layers panel">
                <EuiButtonIcon
                  className="mapLayerControl__closeLayerTOCButton"
                  iconType="menuRight"
                  color="text"
                />
              </EuiToolTip>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem className="mapLayerControl">
          <div className="mapLayerTOC">
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
              <EuiIcon type="clock" size="s" color="subdued"></EuiIcon>
            </div>
            <div className="mapTocEntry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#E79685"
                fillOpacity="0.6"
                stroke="#AF0303"
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
              <span>Vaccinated</span>
            </div>
            <div className="mapTocEntry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="euiIcon euiIcon--medium"
                viewBox="0 0 16 16"
              >
                <path d="M1 5V1h4v4H1zm3-1V2H2v2h2zm2 1V1h4v4H6zm3-1V2H7v2h2zm2 1V1h4v4h-4zm1-1h2V2h-2v2zM1 10V6h4v4H1zm3-1V7H2v2h2zm2 1V6h4v4H6zm3-1V7H7v2h2zm2 1V6h4v4h-4zm3-1V7h-2v2h2zM1 15v-4h4v4H1zm1-1h2v-2H2v2zm4 1v-4h4v4H6zm1-1h2v-2H7v2zm4 1v-4h4v4h-4zm1-1h2v-2h-2v2z"></path>
              </svg>
              <span>Road map</span>
            </div>
          </div>
        </EuiFlexItem>
      </EuiPanel>

      <EuiButton className="mapLayerControl__addLayerButton" fill fullWidth>
        Add layer
      </EuiButton>
    </div>
  );
}
