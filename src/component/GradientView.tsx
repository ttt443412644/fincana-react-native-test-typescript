import React from "react";
import { View, Dimensions } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function () {
  return (
    <View style={{ position: "absolute" }}>
      <Svg height={windowHeight} width={windowWidth}>
        <Defs>
          <RadialGradient
            id="gradient"
            cx="50%"
            cy="50%"
            rx="80.56%"
            ry="165.62%"
            fx="23.33%"
            fy="21.17%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor="#11BDFD" stopOpacity="1" />
            <Stop offset="1" stopColor="#0A83F8" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width={windowWidth}
          height={windowHeight}
          fill="url(#gradient)"
        />
      </Svg>
    </View>
  );
}
