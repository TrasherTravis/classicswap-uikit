import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg height="60px" viewBox="0 0 150 60" {...props}>
      <image
        width="60"
        height="60"
        href={isDark ? "/images/viva/LogoTextNewDark.png" : "/images/viva/LogoTextNewWhite.png"}
      />
    </Svg>
  );
};

export default Logo;
