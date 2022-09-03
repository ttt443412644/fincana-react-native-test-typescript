import React from "react";
import { View, Animated } from "react-native";

export type Props = {
  bottom: number;
  width: number;
  positionCount: number;
  currentPosition: number;
  maxDuration?: number;
};

export default function LoadingIndicator({
  bottom,
  width,
  positionCount,
  currentPosition,
  maxDuration = 2000,
}: Props) {
  const loadingAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const duration = maxDuration; // * Math.random();

    // длина индикатора загрузки
    const value = loadingPosWidth * currentPosition;

    Animated.timing(loadingAnim, {
      toValue: value,
      duration,
      useNativeDriver: false,
    }).start();
  }, [currentPosition]);

  // ширина 1 порции загрузки
  const loadingPosWidth = width / positionCount;

  return (
    <View
      style={{
        position: "absolute",
        bottom,
        width,
      }}
    >
      <View
        style={{
          width,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.4)",
        }}
      />
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          width: loadingAnim,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 1)",
        }}
      />
    </View>
  );
}
