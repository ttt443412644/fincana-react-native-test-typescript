import * as React from "react";
import BaseIcon, { IconProps } from "../BaseIcon";
import { Path } from "react-native-svg";

const ArrowIcon = (props: IconProps) => {
  const { iconColor } = props;

  //       <svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg">

  const newProps = { viewBox: "0 0 26 40", ...props };

  return (
    <BaseIcon {...newProps}>
      <Path
        d="M7.6418 18.007C7.6418 21.409 9.1538 25.252 12.9968 25.252C16.8188 25.252 18.3518 21.409 18.3518 18.007C18.3518 14.584 16.8188 10.783 12.9968 10.783C9.1538 10.783 7.6418 14.584 7.6418 18.007ZM16.5668 18.007C16.5668 20.8 15.6638 23.698 12.9968 23.698C10.3298 23.698 9.4268 20.8 9.4268 18.007C9.4268 15.214 10.3298 12.337 12.9968 12.337C15.6638 12.337 16.5668 15.214 16.5668 18.007Z"
        fill={iconColor}
      />
    </BaseIcon>
  );
};

export default React.memo(ArrowIcon);
