import * as React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { color, font, fontWeight, Enum } from "../branding";

const styles = StyleSheet.create({
  baseStyle: {
    margin: 0,
    fontWeight: fontWeight.regular,
  },

  textBody: {
    color: color.secondaryText,
    fontSize: font.base.size,
    lineHeight: font.base.lineHeight,
  },

  textBodyStrong: {
    color: color.secondaryText,
    fontSize: font.base.size,
    lineHeight: font.base.lineHeight,
    fontWeight: fontWeight.medium,
  },

  textButton: {
    color: color.primaryText,
    fontSize: font.base.size,
    lineHeight: font.base.lineHeight,
    fontWeight: fontWeight.bold,
  },

  textCaption: {
    color: color.secondaryText,
    fontSize: font.s.size,
    lineHeight: font.s.lineHeight,
  },

  textDisplay1: {
    color: color.primaryText,
    fontSize: font.xl.size,
    lineHeight: font.xl.lineHeight,
    fontWeight: fontWeight.medium,
  },

  textDisplay2: {
    color: color.primaryText,
    fontSize: font.xxl.size,
    lineHeight: font.xxl.lineHeight,
    fontWeight: fontWeight.bold,
  },

  textSubheader: {
    color: color.primaryText,
    fontSize: font.l.size,
    lineHeight: font.l.lineHeight,
  },

  textSubheaderStrong: {
    color: color.primaryText,
    fontSize: font.l.size,
    //fontSize: font.xl.size,
    lineHeight: font.l.lineHeight,
    //lineHeight: font.xl.lineHeight,
    fontWeight: fontWeight.bold,
    //fontWeight: fontWeight.bold
  },

  textTitle: {
    color: color.primaryText,
    fontSize: font.m.size,
    lineHeight: font.m.lineHeight,
  },

  textTitleStrong: {
    color: color.primaryText,
    fontSize: font.m.size,
    lineHeight: font.m.lineHeight,
    //fontSize: font.l.size,
    //lineHeight: font.l.lineHeight,
    fontWeight: fontWeight.medium,
    //fontWeight: fontWeight.bold
  },
});

export class TextDisplayType extends Enum<any> {
  public static readonly BODY = new Enum(styles.textBody);
  public static readonly BODYSTRONG = new Enum(styles.textBodyStrong);
  public static readonly BUTTON = new Enum(styles.textButton);
  public static readonly CAPTION = new Enum(styles.textCaption);
  public static readonly DISPLAY1 = new Enum(styles.textDisplay1);
  public static readonly DISPLAY2 = new Enum(styles.textDisplay2);
  public static readonly SUBHEADER = new Enum(styles.textSubheader);
  public static readonly SUBHEADERSTRONG = new Enum(styles.textSubheaderStrong);
  public static readonly TITLE = new Enum(styles.textTitle);
  public static readonly TITLESTRONG = new Enum(styles.textTitleStrong);
}

export interface TextProps {
  readonly className?: TextStyle[];
  readonly children: string | number | React.ReactNode;
  readonly display?: TextDisplayType;
  readonly textColor?: string;
  readonly numberOfLines?: number;
  readonly allowFontScaling?: boolean;
  readonly ellipsizeMode?: "head" | "middle" | "tail" | "clip";
}

const BlaText = ({
  className,
  children,
  display = TextDisplayType.BODY,
  textColor,
  numberOfLines,
  allowFontScaling,
  ellipsizeMode = "tail",
}: TextProps) => {
  const inlineStyle = textColor && { color: textColor };

  /*numberOfLines={ellipsizeMode ? 1 : undefined}
      ellipsizeMode={ellipsizeMode || "tail"}*/

  return (
    <Text
      style={[styles.baseStyle, display.value, className, inlineStyle]}
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
};

export default BlaText;
