import React from "react";
import { Animated, View, Text } from "react-native";
import PropTypes from "prop-types";

import style from "../style";

function FlipCard({ setRef, type, size, number, flipCardStyle, numberStyle }) {
  return (
    <Animated.View
      ref={setRef}
      style={[
        style.flipCard,

        type === "front"
          ? {
              top: 0,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              // marginBottom: 0.5,
              borderBottomWidth: 0.5,
            }
          : {
              top: "50%",
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              // marginTop: 0.5,
              borderTopWidth: 0.5,
            },

        flipCardStyle,
      ]}
    >
      <View style={style.overflowContainer}>
        <Text
          style={[
            style.number,
            {
              transform: [
                type === "front"
                  ? { translateY: size * 0.3 }
                  : { translateY: -size * 0.3 },
              ],
              fontSize: size / 1.5,
              lineHeight: size / 1.5,
            },
            numberStyle,
          ]}
        >
          {number}
        </Text>
      </View>
    </Animated.View>
  );
}

FlipCard.defaultProps = {
  flipCardStyle: {},
  numberStyle: {},
};

FlipCard.propTypes = {
  setRef: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  flipCardStyle: PropTypes.object,
  numberStyle: PropTypes.object,
};

export default FlipCard;
