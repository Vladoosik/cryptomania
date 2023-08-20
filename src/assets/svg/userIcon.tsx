import React from "react";
import { SvgProp } from "../../interface/SvgProp";

const UserIcon = (props: SvgProp) => {
  const { width, height, color, className } = props;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M16 15.503A5.041 5.041 0 1016 5.42a5.041 5.041 0 000 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"
      />
    </svg>
  );
};

export default UserIcon;

UserIcon.defaultProps = {
  width: 35,
  height: 35,
  color: "#fff",
};
