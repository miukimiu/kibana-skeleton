import { FunctionComponent } from "react";
import { MapsIconProps } from "./maps_icon_props";

export const MapsIconPlay: FunctionComponent<MapsIconProps> = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}

    <circle cx="12.133" cy="12.285" r="12" fill="#07C"></circle>
    <path
      fill="#fff"
      d="M17.327 11.22L10.93 7.147c-.831-.529-1.907.078-1.907 1.066v8.145c0 .987 1.076 1.594 1.907 1.065l6.397-4.072a1.267 1.267 0 000-2.131z"
    ></path>
  </svg>
);
