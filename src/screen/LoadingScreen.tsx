import React from "react";
import { Easing, Animated, StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Asset } from "expo-asset";

import GradientView from "../component/GradientView";
import LoadingIndicator from "../component/Loading";

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

// сделаем от 5 до 10 этапов загрузки
const loadingCount = 5 + Math.ceil(Math.random() * 5);
// продолжительность анимации каждого этапа загрузки
const loadingAnimDuration = 2000;
const imageAnimDuration = 6000;
// картинки
Asset.loadAsync([
  require("../../assets/FigureTop.png"),
  require("../../assets/FigureBottom.png"),
  require("../../assets/Logo.png"),
]);

export default function LoadingScreen({ navigation }: Props) {
  const [loading, setLoading] = React.useState<number>(0);
  const figureAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // время загрузки/инициализации очередной порции данных
    let time = 0;

    // 5-10 этапов загрузки
    for (let i = 1; i <= loadingCount; i++) {
      // первый этап от 1 до 2х сек
      time += 2000 * Math.random();

      // через время симулируем окончание загрузки/инициализации
      // очередной порции данных
      setTimeout(() => {
        setLoading(i);
      }, time);
    }

    // загрузка последней порции
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "TabStack" }],
      });
    }, time + loadingAnimDuration);

    // Анимация фигур
    Animated.loop(
      Animated.timing(figureAnim, {
        toValue: 1,
        duration: imageAnimDuration * 2,
        // easing: Easing.bezier(1.0, 0.0, 0.0, 1.0),
        useNativeDriver: false,
      })
    ).start();
  }, [figureAnim]);

  const figureTopLeft = figureAnim.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [-362.5, -362.5, -592.5, -592.5, -362.5],
  });
  const figureBottomLeft = figureAnim.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [-539, -285, -285, -539, -539],
  });

  return (
    <View style={[styles.container, StyleSheet.absoluteFill]}>
      <GradientView />

      <Animated.Image
        source={require("../../assets/FigureTop.png")}
        style={{ position: "absolute", left: figureTopLeft, top: -121 }}
      />

      <Image source={require("../../assets/Logo.png")} />

      <Animated.Image
        source={require("../../assets/FigureBottom.png")}
        style={{ position: "absolute", left: figureBottomLeft, bottom: 21 }}
      />

      <LoadingIndicator
        bottom={120}
        width={120}
        positionCount={loadingCount}
        currentPosition={loading}
        maxDuration={loadingAnimDuration}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#FFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
