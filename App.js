import React from "react";
import { StyleSheet } from "react-native";
import Nav from "./navigation/Navigation";

export const AuthContext = React.createContext({
  authState: {
    token: "",
    userType: "",
  },
  onSetState: () => {},
});

export default function App() {
  const [authState, setAuthState] = React.useState({});

  const onSetState = ({ token, userType }) => {
    setAuthState({
      token,
      userType,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, onSetState }}>
      <Nav />
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
