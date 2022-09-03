import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import BackIcon from "./icon/BackIcon";

type Props = {
  onPress: () => void;
  iconColor?: string;
  backgroundColor?: string;
};

export default ({
  onPress,
  iconColor = "#262B34",
  backgroundColor = "#F1F1F1",
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <BackIcon iconColor={iconColor} width={19} height={13} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F1F1F1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
