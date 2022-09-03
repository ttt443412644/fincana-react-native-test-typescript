import * as React from "react";
import BaseIcon, { IconProps } from "./BaseIcon";
import { Path } from "react-native-svg";

interface Props extends IconProps {
  strokeWidth?: number;
}

const Icon = (props: Props) => {
  const { iconColor = "white", strokeWidth = 2 } = props;

  //       <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">

  return (
    <BaseIcon {...{ viewBox: "0 0 19 13", ...props }}>
      <Path
        d="M2 6.5H19M2 6.5L7.5 1M2 6.5L7.5 12"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
    </BaseIcon>
  );
};

export default React.memo(Icon);
