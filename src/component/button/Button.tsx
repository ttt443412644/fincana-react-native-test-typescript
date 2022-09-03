import * as React from "react";
import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";

import { color, font, componentSizes, space, shadow } from "../branding";

export enum ButtonStatus {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  WARNING = "warning",
  UNSTYLED = "unstyled",
  LOADING = "loading",
  CHECKED = "checked",
}

export interface ButtonProps {
  readonly children: string | number | JSX.Element;
  readonly className?: ViewStyle;
  readonly title?: string;
  readonly status?: ButtonStatus;
  readonly isBubble?: boolean;
  readonly shadowed?: boolean;
  readonly onClick?: () => void;
  readonly onTouchStart?: (event: React.TouchEvent) => void;
  readonly onTouchEnd?: (event: React.TouchEvent) => void;
  readonly onDoneAnimationEnd?: () => void;
  readonly disabled?: boolean;
  // buttonRef?: (button: JSX.Element) => void;
}

type TypeProps = {
  // ref?: (button: JSX.Element) => void;
  title?: string;
  onClick?: () => void;
  onTouchStart?: (event: React.TouchEvent) => void;
  onTouchEnd?: (event: React.TouchEvent) => void;
  disabled?: boolean;
};

export interface ButtonState {
  readonly value: {
    name: string;
    value: string;
  };
}

type ButtonActionEvents = React.TouchEvent;
type functionEvent = (event: ButtonActionEvents) => void;

export const eventHandler = (
  componentEvent: functionEvent | undefined,
  childEvent: functionEvent | undefined
) => (event: ButtonActionEvents) => {
  componentEvent && componentEvent(event);
  childEvent && childEvent(event);
};

class Button extends React.PureComponent<ButtonProps, ButtonState> {
  // private button: JSX.Element;

  static defaultProps: Partial<ButtonProps> = {
    children: "",
    className: undefined,
    status: ButtonStatus.PRIMARY,
    isBubble: false,
    shadowed: false,
    disabled: false,
    // buttonRef() {},
  };

  /*
  ref = (button: JSX.Element) => {
    this.button = button;
    this.props.buttonRef(button);
  };
   */

  render() {
    const {
      children,
      className,

      title,

      // Modifiers
      status,
      isBubble,
      shadowed,
      // Actions
      onClick,
      onTouchStart,
      onTouchEnd,
      // onDoneAnimationEnd,
      disabled,
      // buttonRef,
      // Extend case of the button for the expand component
      // ...attrs
    } = this.props;

    const hasLoader =
      status === ButtonStatus.LOADING || status === ButtonStatus.CHECKED;

    let typeProps: TypeProps = {};

    // typeProps.ref = this.ref;
    typeProps.title = title;

    typeProps.onTouchStart = eventHandler(onTouchStart, typeProps.onTouchStart);
    typeProps.onTouchEnd = eventHandler(onTouchEnd, typeProps.onTouchEnd);
    typeProps.disabled = hasLoader || disabled;

    /*
    const props = {
      className: [styles.kirkButton, className],
      ...typeProps,
      ...attrs,
    };
     */

    const viewStyles: ViewStyle[] = [styles.kirkButton];
    const textStyles: TextStyle[] = [];
    switch (status) {
      case ButtonStatus.PRIMARY:
        viewStyles.push(styles.kirkButtonPrimary);
        textStyles.push(styles.textPrimary);
        break;
      case ButtonStatus.SECONDARY:
        viewStyles.push(styles.kirkButtonSecondary);
        textStyles.push(styles.textSecondary);
        break;
      case ButtonStatus.TERTIARY:
        viewStyles.push(styles.kirkButtonTertiary);
        textStyles.push(styles.textTertiary);
        break;
      case ButtonStatus.WARNING:
        viewStyles.push(styles.kirkButtonWarning);
        textStyles.push(styles.textWarning);
        break;
      case ButtonStatus.UNSTYLED:
        viewStyles.push(styles.kirkButtonUnstyled);
        textStyles.push(styles.textUnstyled);
        break;
      case ButtonStatus.LOADING:
        viewStyles.push(styles.kirkButtonLoading);
        break;
      case ButtonStatus.CHECKED:
        viewStyles.push(styles.kirkButtonChecked);
        break;
    }

    if (isBubble || hasLoader) {
      viewStyles.push(styles.kirkButtonBubble);
      textStyles.push(styles.textBubble);
    }
    if (shadowed) {
      viewStyles.push(
        status === ButtonStatus.SECONDARY
          ? styles.kirkButtonSecondaryShadowed
          : styles.kirkButtonShadowed
      );
    }

    if (disabled) {
      if (
        !status ||
        ![
          ButtonStatus.UNSTYLED,
          ButtonStatus.LOADING,
          ButtonStatus.CHECKED,
        ].includes(status)
      ) {
        viewStyles.push(styles.disabled);
      }
    }

    className && viewStyles.push(className);

    return (
      <TouchableOpacity
        activeOpacity={disabled || hasLoader ? 0.5 : 0.2}
        onPress={onClick}
        style={viewStyles}
      >
        {hasLoader ? (
          /*
          <Loader
            size={48}
            inline
            done={status === ButtonStatus.CHECKED}
            onDoneAnimationEnd={onDoneAnimationEnd}
          />
                       */ <Text>
            Loader
          </Text>
        ) : typeof children === "object" ? (
          children
        ) : (
          <Text style={textStyles}>{children}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  kirkButton: {
    position: "relative",
    flex: 0,
    display: "flex",
    paddingVertical: 0,
    paddingHorizontal: space.m,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 8,
    minHeight: componentSizes.buttonIconSize,
    minWidth: componentSizes.buttonIconSize,
    alignItems: "center",
    justifyContent: "center",
  },

  kirkButtonPrimary: {
    backgroundColor: color.primary,
  },
  textPrimary: {
    //fontSize: font.base.size,
    fontSize: font.l.size,
    lineHeight: font.l.lineHeight,
    textAlign: "center",
    color: color.white,
  },

  kirkButtonSecondary: {
    backgroundColor: color.white,
    borderColor: color.border,
  },
  textSecondary: {
    color: color.accent,
  },

  kirkButtonTertiary: {
    backgroundColor: color.white,
    borderColor: "transparent",
  },
  textTertiary: {
    color: color.accent,
  },
  kirkButtonWarning: {
    backgroundColor: color.danger,
  },
  textWarning: {
    color: color.white,
  },

  kirkButtonUnstyled: {
    backgroundColor: "transparent",
  },
  textUnstyled: {
    color: color.accent,
    textAlign: "left",
  },

  kirkButtonLoading: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  kirkButtonChecked: {
    borderWidth: 0,
  },

  kirkButtonBubble: {
    flex: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0,
    minWidth: componentSizes.buttonIconSize,
    height: componentSizes.buttonIconSize,
  },
  textBubble: {
    textAlign: "center",
    lineHeight: 0,
  },

  kirkButtonShadowed: {
    ...shadow.default,
    // borderWidth: 2,
    // borderColor: color.white,
  },

  kirkButtonSecondaryShadowed: {
    ...shadow.default,
    borderWidth: 0,
  },

  kirkButtonLoadingCheckedDisabled: {
    opacity: 1,
  },

  disabled: {
    opacity: 0.5,
  },
});

export default Button;
