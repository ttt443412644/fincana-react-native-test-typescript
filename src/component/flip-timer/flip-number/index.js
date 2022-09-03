/* eslint-disable no-param-reassign, radix */
import React from "react";
import PropTypes from "prop-types";

import NumberCard from "./number-card";

function FlipNumber({
  number,
  previousNumber,
  size,
  perspective,
  numberWrapperStyle,
  cardStyle,
  flipCardStyle,
  numberStyle,
}) {
  /*
  number = parseInt(number);

  let previousNumber = number - 1;
  previousNumber = previousNumber === -1 ? 9 : previousNumber;
  */

  return (
    <NumberCard
      number={number.toString()}
      previousNumber={previousNumber.toString()}
      size={size}
      perspective={perspective}
      numberWrapperStyle={numberWrapperStyle}
      cardStyle={cardStyle}
      flipCardStyle={flipCardStyle}
      numberStyle={numberStyle}
    />
  );
}

FlipNumber.defaultProps = {};

FlipNumber.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  previousNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  size: PropTypes.number,
  perspective: PropTypes.number,
  numberWrapperStyle: PropTypes.object,
  cardStyle: PropTypes.object,
  flipCardStyle: PropTypes.object,
  numberStyle: PropTypes.object,
};

export default FlipNumber;
