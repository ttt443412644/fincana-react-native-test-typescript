import React from "react";
import { Path } from "react-native-svg";
import BaseIcon, { IconProps } from "./BaseIcon";

const Icon = (props: IconProps) => {
  const { iconColor } = props;

  return (
    <BaseIcon {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5 16.5V8.5C9.5 7.4 10.39 6.5 11.5 6.5H20.5V5.5C20.5 4.4 19.6 3.5 18.5 3.5H4.5C3.39 3.5 2.5 4.4 2.5 5.5V19.5C2.5 20.6 3.39 21.5 4.5 21.5H18.5C19.6 21.5 20.5 20.6 20.5 19.5V18.5H11.5C10.39 18.5 9.5 17.6 9.5 16.5ZM12.5 8.5C11.95 8.5 11.5 8.95 11.5 9.5V15.5C11.5 16.05 11.95 16.5 12.5 16.5H21.5V8.5H12.5ZM14 12.5C14 13.33 14.67 14 15.5 14C16.33 14 17 13.33 17 12.5C17 11.67 16.33 11 15.5 11C14.67 11 14 11.67 14 12.5Z"
        fill={iconColor}
      />
    </BaseIcon>
  );
};

export default React.memo(Icon);
