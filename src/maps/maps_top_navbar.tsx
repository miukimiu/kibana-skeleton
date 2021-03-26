import {
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import { EuiSuperDatePicker } from "../components/eui/super_date_picker";

export function MapsTopNavbar() {
  return (
    <EuiFlexGroup gutterSize="s" responsive={false} className="kbnGlobals">
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          display="base"
          size="s"
          iconType="filter"
          aria-label="Filter"
        />
      </EuiFlexItem>
      <EuiFlexItem grow={true}>
        <EuiFieldText
          placeholder="Filter with KQL..."
          compressed
          fullWidth
          append={
            <EuiButtonEmpty size="xs" iconType="plusInCircle">
              Add
            </EuiButtonEmpty>
          }
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiSuperDatePicker />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
