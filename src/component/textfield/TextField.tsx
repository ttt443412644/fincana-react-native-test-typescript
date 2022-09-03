import * as React from "react";
import {
  View,
  ViewStyle,
  Text,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

import { color, space, radius, inputBorderSize, font } from "../branding";
import Button, { ButtonStatus } from "../button/Button";
import { EyeIcon, CrossIcon } from "../icon/";

//https://github.com/zulip/zulip-mobile/blob/10.1.70/src/common/SearchInput.js#L32

//https://github.com/facebook/react-native/issues/11071

export type textfield = TextInput;

export enum inputTypes {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  NUMBER = "number",
  SEARCH = "search",
  TEL = "tel",
}

export enum inputModes {
  TEXT = "default",
  NUMERIC = "number-pad",
  DECIMAL = "decimal-pad",
  EMAIL = "email-address",
  TEL = "phone-pad",

  //The following values work on iOS only:
  SEARCH = "web-search",
  URL = "url",

  //unused
  numeric = "numeric",
  asciiCapable = "ascii-capable",
  numbersAndPunctuation = "numbers-and-punctuation",
  namePhonePad = "name-phone-pad",
  twitter = "twitter",
}

export enum autoCompleteType {
  OFF = "off",
  USERNAME = "username",
  PASSWORD = "password",
  EMAIL = "email",
  NAME = "name",
  TEL = "tel",
  STREET_ADDRESS = "street-address",
  POSTAL_CODE = "postal-code",
  CC_NUMBER = "cc-number",
  CC_CSC = "cc-csc",
  CC_EXP = "cc-exp",
  CC_EXP_MONTH = "cc-exp-month",
  CC_EXP_YESR = "cc-exp-year",
}

interface OnChangeParameters {
  readonly name: string;
  readonly value: string | number | boolean;
}

export interface CommonFormFields {
  name: string;
  id?: string;
  type?: inputTypes;
  placeholder?: string;
  maxLength?: number;
  autoCorrect?: boolean;
  autoComplete?: autoCompleteType;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  title?: string;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

type errorField = string | JSX.Element;

export interface TextFieldProps extends CommonFormFields {
  defaultValue?: string;
  labelledBy?: string;
  onChange?: (obj: OnChangeParameters) => void;
  onClear?: () => void;
  className?: ViewStyle;
  errorClassName?: ViewStyle;
  error?: errorField;
  addon?: JSX.Element;
  label?: string;
  buttonTitle?: string;
  focus?: boolean;
  inputMode?: inputModes;
  pattern?: string;
  inputRef?: (input: textfield) => void;
  format: (value: string, previousValue: string) => string;
  focusBorder?: boolean;
  autoCapitalize?: "characters" | "words" | "sentences" | "none" | undefined;
  returnKeyType?: "done" | "go" | "next" | "search" | "send" | undefined;
  onSubmitEditing?: (value: string) => void;
}

export interface TextFieldState {
  readonly value: string;
  readonly previousValue: string;
  readonly defaultValue: string;
  readonly showPassword: boolean;
  readonly hasFocus: boolean;
}

export default class TextField extends React.PureComponent<
  TextFieldProps,
  TextFieldState
> {
  private input?: TextInput;

  static defaultProps: Partial<TextFieldProps> = {
    inputRef() {},
    onClear() {},
    onFocus() {},
    onBlur() {},
    type: inputTypes.TEXT,
    format: (value) => value,
    focusBorder: true,
  };

  static INPUT_TYPES = inputTypes;
  static INPUT_MODES = inputModes;

  state = {
    value: this.props.defaultValue || "",
    defaultValue: this.props.defaultValue || "",
    previousValue: "",
    showPassword: false,
    hasFocus: false,
  };

  clearButton: JSX.Element | null = null;

  componentDidMount() {
    if (this.input && this.props.focus) {
      this.input.focus();
    }
  }

  static getDerivedStateFromProps(
    props: TextFieldProps,
    state: TextFieldState
  ) {
    if (props.defaultValue !== state.defaultValue) {
      return {
        ...state,
        value: props.defaultValue,
        defaultValue: props.defaultValue,
        previousValue: state.value,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps: TextFieldProps) {
    if (this.props.focus && this.props.focus !== prevProps.focus) {
      this.input?.focus();
    }
  }

  onTextFieldChange = (text: string) => {
    const { value } = this.state;
    this.setState(
      {
        value: this.props.format(text, value),
        previousValue: value,
      },
      this.onChange
    );

    if (text === "") {
      this.props.onClear && this.props.onClear();
    }
  };

  onChange = () => {
    const { onChange } = this.props;
    onChange &&
      onChange({
        name: this.props.name,
        value: this.state.value,
      });
  };

  onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { onFocus } = this.props;
    this.setState({
      hasFocus: true,
    });
    onFocus && onFocus(event);
  };

  onBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    //console.log("onBlur", event);

    const { onBlur } = this.props;
    if (event.target /* || event.target !== this.clearButton*/) {
      this.setState({
        hasFocus: false,
      });
      onBlur && onBlur(event);
    }
  };

  clearValue = () => {
    //console.log("clear");

    const { value } = this.state;
    const { onClear } = this.props;
    this.setState(
      {
        value: "",
        previousValue: value,
      },
      () => {
        this.input?.focus();
        this.onChange();
        onClear && onClear();
      }
    );
  };

  toggleShowPassword = () => {
    this.setState(({ showPassword }) => {
      this.input?.focus();
      return { showPassword: !showPassword };
    });
  };

  ref = (input: textfield) => {
    this.input = input;
    this.props.inputRef && this.props.inputRef(input);
  };

  renderError = () => {
    const { error, errorClassName } = this.props;
    const className = [styles.kirkErrorKirkErrorMessage, errorClassName];

    return React.isValidElement(error) ? (
      React.cloneElement(error, { className } as Object)
    ) : (
      <Text style={className}>{error}</Text>
    );
  };

  render() {
    const {
      addon,
      type,
      placeholder,
      label,
      className,
      error,
      disabled,
      readOnly,

      autoFocus,
      //   required,
      maxLength,
      autoCorrect,
      autoComplete,
      format,
      inputMode,
      focusBorder,

      autoCapitalize = "none",
      returnKeyType,
      onSubmitEditing,
    } = this.props;

    const value = this.state.value
      ? format(this.state.value, this.state.previousValue)
      : "";

    const iconProps = {
      iconColor: color.blackText,
      size: 14,
    };

    const buttonOnClick =
      type !== inputTypes.PASSWORD ? this.clearValue : this.toggleShowPassword;

    const shouldDisplayButton = !disabled && !!value;

    let keyboardType: inputModes = inputModes.TEXT;
    switch (type) {
      case (inputTypes.TEXT, inputTypes.PASSWORD, inputTypes.SEARCH):
        keyboardType = inputModes.TEXT;
      case inputTypes.EMAIL:
        keyboardType = inputModes.EMAIL;
      case inputTypes.NUMBER:
        keyboardType = inputModes.NUMERIC;
      case inputTypes.TEL:
        keyboardType = inputModes.TEL;
      default:
        inputMode || inputModes.TEXT;
    }

    const inputStyles = [
      styles.input,
      !!error && styles.kirkErrorInput,
      type === inputTypes.SEARCH && styles.inputTypeSearch,
      this.state.hasFocus && styles.inputFocus,
    ];

    return (
      <View style={[className, disabled && styles.kirkDisabled]}>
        {label && <Text style={styles.label}>{label}</Text>}

        <View
          style={[
            styles.kirkTextFieldWrapper,
            focusBorder &&
              this.state.hasFocus &&
              styles.kirkTextFieldWrapperHasFocus,
            !!error && styles.kirkErrorKirkTextFieldWrapper,
          ]}
        >
          {addon}

          <TextInput
            style={inputStyles}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
            returnKeyType={returnKeyType}
            autoCompleteType={autoComplete || autoCompleteType.OFF}
            autoCorrect={autoCorrect}
            keyboardType={keyboardType}
            editable={!(readOnly || disabled)}
            placeholderTextColor={color.inputPlaceholder}
            autoFocus={autoFocus}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChangeText={this.onTextFieldChange}
            ref={this.ref}
            underlineColorAndroid="transparent"
            secureTextEntry={
              type === inputTypes.PASSWORD && !this.state.showPassword
            }
            onSubmitEditing={() => onSubmitEditing && onSubmitEditing(value)}
          />

          {shouldDisplayButton && (
            <Button
              className={styles.kirkTextFieldButton}
              status={ButtonStatus.UNSTYLED}
              isBubble
              onClick={buttonOnClick}
            >
              {type === "password" ? (
                <EyeIcon {...iconProps} off={this.state.showPassword} />
              ) : (
                <CrossIcon {...iconProps} />
              )}
            </Button>
          )}
        </View>

        {Boolean(error) && this.renderError()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  kirkErrorKirkErrorMessage: {
    color: color.danger,
    //    display: block,
    padding: space.m,
  },

  label: {
    color: color.primaryText,
    //    padding: 0 ${space.m} ${space.s} ${space.m};
    paddingTop: 0,
    paddingRight: space.m,
    paddingBottom: space.s,
    paddingLeft: space.m,
  },

  kirkTextFieldWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    //box-sizing: border-box;
    flex: 0,

    color: color.primaryText,
    backgroundColor: color.inputBackground,
    borderRadius: radius.l,
    //border: solid ${inputBorderSize.default} ${color.inputBorder};
    borderWidth: inputBorderSize.default,
    borderColor: color.inputBorder,
    //    box-shadow: none;
  },

  kirkTextFieldWrapperHasFocus: {
    //border: ${inputBorderSize.focus} solid ${color.inputBorderFocus};
    borderWidth: inputBorderSize.focus,
    borderColor: color.inputBorderFocus,
  },

  kirkDisabled: {
    opacity: 0.5,
  },

  kirkErrorKirkTextFieldWrapper: {
    backgroundColor: color.inputError,
    //border: solid 1px ${color.inputError};
    borderWidth: 1,
    borderColor: color.inputError,
    //    animation: textFieldError ${transition.duration.fast} ease-in-out;
  },

  input: {
    //    appearance: none;
    //    borderWidth: 0,
    borderRadius: radius.l,
    backgroundColor: color.inputBackground,
    color: color.blackText,
    flex: 1,
    //fontSize: font.base.size,
    //lineHeight: font.base.lineHeight,
    //width: "100%",
    //    caret-color: ${color.inputCaret};
    padding: space.l,
    paddingRight: 30,

    fontSize: font.m.size,
    lineHeight: font.m.lineHeight,
    //borderWidth: 2,
  },

  kirkErrorInput: {
    backgroundColor: color.inputError,
  },

  inputTypeSearch: {
    width: "100%",
    //    box-sizing: border-box;
    flex: 0,
  },

  inputFocus: {
    borderColor: color.inputBorder,
  },

  kirkTextFieldButton: {
    /*
    borderWidth: 1,
    borderColor: "red",
     */
    position: "absolute",
    top: -4,
    bottom: 0,
    right: -5,
  },
});
