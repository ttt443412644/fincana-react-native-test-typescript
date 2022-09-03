import React from "react";
import { Path } from "react-native-svg";
import BaseIcon, { IconProps } from "./BaseIcon";

const Icon = (props: IconProps) => {
  const { iconColor } = props;

  /*
  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">

   */

  const newProps = { ...props, viewBox: "0 -1 16 21" };

  return (
    <BaseIcon {...newProps}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4.03333C12 1.81999 10.2133 0.0333252 8 0.0333252C5.78667 0.0333252 4 1.81999 4 4.03333C4 6.24666 5.78667 8.03333 8 8.03333C10.2133 8.03333 12 6.24666 12 4.03333ZM0 14.6733C1.72 17.26 4.66667 18.9666 8 18.9666C11.3333 18.9666 14.28 17.26 16 14.6733C15.96 12.02 10.6533 10.5666 8 10.5666C5.33333 10.5666 0.04 12.02 0 14.6733Z"
        fill={iconColor}
      />
    </BaseIcon>
  );
};

export default React.memo(Icon);
