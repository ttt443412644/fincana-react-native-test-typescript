import React from "react";
import {
  Alert,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

import BackButton from "../component/BackButton";
import { color } from "../component/branding";
import Text, { TextDisplayType } from "../component/text/Text";
import Button, { ButtonStatus } from "../component/button/Button";
import TextField from "../component/textfield/TextField";

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

export default function ({ navigation }: Props) {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  const errorLogin = !login.match(
    /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,20}$/
  );

  const submit = () => {
    setSubmitting(true);

    setTimeout(() => {
      Alert.alert("Login", "Login successful", []);

      setSubmitting(false);
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <BackButton
            onPress={() => navigation.goBack()}
            iconColor={color.black}
            backgroundColor={color.lightGray}
          />

          <View style={styles.header}>
            <Text
              display={TextDisplayType.SUBHEADERSTRONG}
              className={[{ color: color.black }]}
            >
              Login
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            name="username"
            defaultValue={login}
            className={{ marginVertical: 10 }}
            placeholder="Login"
            maxLength={20}
            autoFocus
            disabled={submitting}
            autoCapitalize="none"
            returnKeyType="next"
            error={login.length && errorLogin ? "Error login" : undefined}
            onChange={({ value }) => {
              setLogin(String(value));
            }}
          />

          <TextField
            name="password"
            defaultValue={password}
            className={{ marginVertical: 10 }}
            placeholder="Password"
            maxLength={20}
            disabled={submitting}
            autoCapitalize="none"
            returnKeyType="done"
            onChange={({ value }) => {
              setPassword(String(value));
            }}
          />
        </View>

        <Button
          status={ButtonStatus.PRIMARY}
          className={{ marginBottom: 10 }}
          disabled={
            login.length <= 3 ||
            errorLogin ||
            password.length <= 3 ||
            submitting
          }
          onClick={submit}
        >
          <Text display={TextDisplayType.SUBHEADER}>Login</Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    // alignItems: "center",
    paddingTop: 38,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },

  headerContainer: {
    height: 56,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flex: 1,
    alignItems: "center",
    marginRight: 44,
  },
});
