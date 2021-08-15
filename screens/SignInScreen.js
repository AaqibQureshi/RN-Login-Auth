import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../App";
import { USER_TYPES } from "../navigation/Navigation";
import LoginScreen from "./Index";
import RadioGroup from "react-native-radio-buttons-group";

const radioButtonsData = [
  {
    id: "1",
    label: <Text style={{ color: "#fb5b5a" }}>{"Admin"}</Text>,
    value: "ADMIN",
    color: "#fb5b5a",
  },
  {
    id: "2",
    label: <Text style={{ color: "#fb5b5a" }}>{"Manager"}</Text>,
    value: "MANAGER",
    color: "#fb5b5a",
  },
  {
    id: "3",
    label: <Text style={{ color: "#fb5b5a" }}>{"User"}</Text>,
    value: "USER",
    color: "#fb5b5a",
  },
];

const SignInScreen = (props) => {
  const authState = React.useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ isValid: false, token: "" });
  const [type, setType] = useState("");

  useEffect(() => {
    if (data?.isValid) {
      // let userName = prompt("Your name is ").toLocaleUpperCase();
      // console.log(type);
      if (type === USER_TYPES.ADMIN) {
        authState.onSetState({
          token: data.token,
          userType: USER_TYPES.ADMIN,
        });
      } else if (type === USER_TYPES.MANAGER) {
        authState.onSetState({
          token: data.token,
          userType: USER_TYPES.MANAGER,
        });
      } else if (type === USER_TYPES.USER) {
        authState.onSetState({
          token: data.token,
          userType: USER_TYPES.USER,
        });
      }
    }
  }, [data?.isValid]);

  const onFetchAPI = async () => {
    try {
      setIsLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      };

      const response = await fetch(
        "https://reqres.in/api/login",
        requestOptions
      );

      const json = await response.json();
      console.log(json.token === undefined);
      if (json.token) {
        // console.log("wow!");
        // console.log(json.token);
        setData({ isValid: true, token: json.token });
      } else setData({ isValid: false, token: "no token" });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onLoginPress = () => {
    onFetchAPI();
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          animating
          size="large"
          style={{ opacity: 1 }}
          color="#00ff00"
        />
      )}
      <View style={styles.logo}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.desrciption}>Sign in to continue!</Text>
      </View>
      <LoginScreen
        keyboardType="email-address"
        placeholder="Email..."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
      <LoginScreen
        keyboardType="visible-password"
        placeholder="Password..."
        placeholderTextColor="#003f5c"
        onChangeText={(password) => setPassword(password)}
      />

      <RadioGroup
        layout="row"
        radioButtons={radioButtonsData}
        onPress={(op) => {
          op.forEach((el, index) => {
            if (el.selected === true) setType(el.value);
          });
        }}
      />
      <Pressable style={styles.loginBtn} onPress={onLoginPress}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
  },
  desrciption: {
    fontSize: 20,
    color: "#fb5b5a",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
