import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { Asset } from "expo-asset";

import GradientView from "../component/GradientView";
import Button, { ButtonStatus } from "../component/button/Button";
import Text, { TextDisplayType } from "../component/text/Text";
import { ArrowIcon } from "../component/icon";
import { color } from "../component/branding";
import FlipNumber from "../component/flip-timer/flip-number/";

interface State {
  count: number;
  prevCount: number;
}

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

const initialState: State = {
  count: 25271990,
  prevCount: 0,
};

Asset.loadAsync([
  require("../../assets/AuthImage.png"),
  require("../../assets/Logo.png"),
]);

/**
 * Похожее на ютуб
 * https://youtu.be/0FVnzuyFNSE?t=916
 * https://github.com/wcandillon/can-it-be-done-in-react-native/blob/master/the-10-min/src/Transformations/components/Face.tsx
 *
 * https://github.com/pritishvaidya/react-native-flip-timer
 *
 *
 *
 *
 */
export default function ({ navigation }: Props) {
  const [counter, setCounter] = React.useState<State>(initialState);

  // симулируем
  React.useEffect(() => {
    setInterval(() => {
      setCounter(({ count }) => ({
        count: count + Math.floor(Math.random() * 5),
        prevCount: count,
      }));
    }, 1000);
  }, []);

  const { count, prevCount } = counter;

  const currentNumbers = String(count)
    .replace(/(.)(?=(\d{3})+$)/g, "$1 ")
    .split("");
  const prevNumbers = String(prevCount)
    .replace(/(.)(?=(\d{3})+$)/g, "$1 ")
    .split("");

  const diff = currentNumbers.length - prevNumbers.length;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      prevNumbers.unshift(" ");
    }
  }

  // переход на экран логина
  const loginClick = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <GradientView />

      <Image
        source={require("../../assets/Logo.png")}
        style={{ marginTop: 48 }}
      />

      <Image
        source={require("../../assets/AuthImage.png")}
        style={{
          flex: 1,
          resizeMode: "contain",
          width: "100%",
        }}
      />

      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          display={TextDisplayType.SUBHEADER}
          className={[styles.headerText]}
        >
          Welcome to Payeer
        </Text>

        <Text display={TextDisplayType.CAPTION}>TOTAL USERS REGISTERED</Text>
      </View>

      <View style={styles.counterContainer}>
        {currentNumbers.map((item, index) => {
          if (item === " ") {
            return <View key={index} style={styles.counterSeparator} />;
          }

          return (
            <FlipNumber
              key={index}
              number={item}
              previousNumber={prevNumbers[index]}
              size={31.5}
              numberWrapperStyle={styles.counterWrapper}
              numberStyle={styles.counterNumber}
              cardStyle={styles.counterCard}
              flipCardStyle={styles.counterFlipCard}
            />
          );
        })}
      </View>

      <Button
        status={ButtonStatus.PRIMARY}
        shadowed
        className={styles.buttonContainer}
      >
        <View style={styles.buttonSubContainer}>
          <View style={styles.buttonTextContainer}>
            <Text display={TextDisplayType.BUTTON}>CREATE ACCOUNT</Text>
            <Text display={TextDisplayType.CAPTION}>
              IN LESS THEN 30 SECONDS
            </Text>
          </View>

          <ArrowIcon iconColor={color.primaryText} style={styles.buttonIcon} />
        </View>
      </Button>

      <View style={{ padding: 4 }}>
        <Text display={TextDisplayType.CAPTION}>OR</Text>
      </View>

      <Button
        status={ButtonStatus.SECONDARY}
        className={{
          ...styles.buttonContainer,
          backgroundColor: "transparent",
        }}
        onClick={loginClick}
      >
        <View style={styles.buttonSubContainer}>
          <View style={styles.buttonTextContainer}>
            <Text display={TextDisplayType.BUTTON}>LOGIN</Text>
            <Text display={TextDisplayType.CAPTION}>I HAVE AN ACCOUNT</Text>
          </View>

          <ArrowIcon iconColor={color.primaryText} style={styles.buttonIcon} />
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    padding: 16,
  },

  counterContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 14,
    marginBottom: 28,
  },

  headerText: {
    lineHeight: 30,
  },

  counterWrapper: {
    width: 26,
    height: 40,
  },

  counterNumber: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: "400",
    color: color.dark,
    marginTop: -2,
  },

  counterCard: {
    backgroundColor: "#33BCFC",
  },

  counterFlipCard: {
    backgroundColor: "#33BCFC",
  },

  counterSeparator: {
    width: 4,
  },

  buttonContainer: {
    width: "100%",
  },

  buttonSubContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  buttonIcon: {
    width: 50,
    display: "flex",
    alignItems: "flex-end",
  },

  buttonTextContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 48,
  },
});
