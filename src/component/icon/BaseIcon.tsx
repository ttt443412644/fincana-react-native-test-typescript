import React from "react";
import { View, ViewStyle } from "react-native";
import Svg from "react-native-svg";

export interface IconProps {
  iconColor?: string;
  children?: JSX.Element;
  size?: number;
  width?: number;
  height?: number;
  viewBox?: string;
  style?: ViewStyle;
}

// https://stackoverflow.com/questions/48602395/how-can-i-automatically-scale-an-svg-element-within-a-react-native-view
export default function ({
  children,
  iconColor = "white",
  size = 24,
  width = size,
  height = size,
  viewBox = "0 0 24 24",
  style,
}: IconProps) {
  return (
    <View {...style}>
      <Svg
        viewBox={viewBox}
        width={width}
        height={height}
        fill={iconColor}
        preserveAspectRatio="xMinYMin slice"
      >
        {children}
      </Svg>
    </View>
  );
}
