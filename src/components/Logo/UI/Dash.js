import * as React from "react";
const SvgDash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height="px"
    viewBox="0 0 22 6"
    {...props}
  >
    <path
      d="M22 5.496 17.637 0 0 3.223V6Zm0 0"
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "#000",
        fillOpacity: 1,
      }}
    />
  </svg>
);
export default SvgDash;
