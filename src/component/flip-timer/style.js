import { StyleSheet } from "react-native";

export default StyleSheet.create({
  numberWrapper: {
    // backgroundColor: "rgba(255, 255, 255, 0.15)",
    // backgroundColor: "#333333",
    margin: 1, // gap 2px
  },
  card: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "#1f1f1f",
    // borderColor: "transparent",
    borderColor: "#0FAEFC",
    overflow: "hidden",
    //backgroundColor: "#33BCFC",
    // borderWidth: 1,
  },
  overflowContainer: {
    overflow: "hidden",
  },

  number: {
    fontWeight: "700",
    color: "#F1F1F1",
  },

  flipCard: {
    position: "absolute",
    left: 0,
    height: "50%",
    width: "100%",
    backgroundColor: "#33BCFC",
    // borderWidth: 1,
    //    borderColor: "#1f1f1f",
    borderColor: "#0FAEFC",
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  separator: {
    marginHorizontal: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  /*
  circle: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: "#333333",
  },
  */
});
