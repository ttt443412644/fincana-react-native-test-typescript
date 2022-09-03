import * as React from "react";
import { Path } from "react-native-svg";

import BaseIcon, { IconProps } from "./BaseIcon";

const CrossIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path
        d="M19 5L5 19M19 19L5 5"
        fill="none"
        stroke={props.iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </BaseIcon>
  );
};

export default React.memo(CrossIcon);
