import * as React from "react";
import BaseIcon, { IconProps } from "./BaseIcon";
import { Path } from "react-native-svg";

const Icon = (props: IconProps) => {
  const { iconColor = "white" } = props;
  return (
    <BaseIcon {...props}>
      <Path
        d="M8.99953 6.71075C8.60953 7.10075 8.60953 7.73075 8.99953 8.12075L12.8795 12.0008L8.99953 15.8808C8.60953 16.2708 8.60953 16.9008 8.99953 17.2908C9.38953 17.6808 10.0195 17.6808 10.4095 17.2908L14.9995 12.7008C15.3895 12.3108 15.3895 11.6808 14.9995 11.2908L10.4095 6.70075C10.0295 6.32075 9.38953 6.32075 8.99953 6.71075Z"
        fill={iconColor}
      />
    </BaseIcon>
  );
};

export default React.memo(Icon);
