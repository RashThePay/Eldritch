import * as React from "react";
const SvgMenu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height="px"
    viewBox="0 0 23 17"
    {...props}
  >
    <defs>
      <clipPath id="menu_svg__a">
        <path d="M0 0h22.867v4.902H0Zm0 0" />
      </clipPath>
      <clipPath id="menu_svg__b">
        <path d="M0 6.047h22.867v4.902H0Zm0 0" />
      </clipPath>
      <clipPath id="menu_svg__c">
        <path d="M.137 12.102H23V17H.137Zm0 0" />
      </clipPath>
    </defs>
    <g clipPath="url(#menu_svg__a)">
      <path
        d="m22.863.414-4.535 4.484L0 2.27V0Zm0 0"
        style={{
          stroke: "none",
          fillRule: "evenodd",
          fillOpacity: 1,
        }}
      />
    </g>
    <g clipPath="url(#menu_svg__b)">
      <path
        d="m22.863 6.465-4.535 4.484L0 8.32V6.05Zm0 0"
        style={{
          stroke: "none",
          fillRule: "evenodd",
          fillOpacity: 1,
        }}
      />
    </g>
    <g clipPath="url(#menu_svg__c)">
      <path
        d="M23 12.516 18.465 17 .137 14.371v-2.27Zm0 0"
        style={{
          stroke: "none",
          fillRule: "evenodd",
          fillOpacity: 1,
        }}
      />
    </g>
  </svg>
);
export default SvgMenu;
