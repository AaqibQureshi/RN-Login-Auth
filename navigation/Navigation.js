import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import Home from "../tabs/Home";
import Posts from "../tabs/Posts";
import Users from "../tabs/Users";
import { AuthContext } from "../App";

const Tab = createBottomTabNavigator();

const AuthScreens = [
  {
    name: "Signin",
    component: SignInScreen,
    options: {
      headerShown: false,
    },
  },
];

const TabScreens = [
  {
    name: "Tabs",
    component: Tabs,
    options: { headerShown: false },
  },
];

const UserTabs = [
  {
    name: "Home",
    component: Home,

    tabBarIconProps: {
      icon: "ios-people-outline",
      color: "",
      size: 23,
    },
  },
];

const ManagerTabs = [
  {
    name: "Posts",
    component: Posts,
    tabBarIconProps: {
      icon: "ios-create-outline",
      color: "",
      size: 23,
    },
  },
];

const AdminTabs = [
  {
    name: "Users",
    component: Users,
    tabBarIconProps: {
      icon: "ios-home-outline",
      color: "",
      size: 23,
    },
  },
  // {
  //   name: "Posts",
  //   component: Posts,
  //   tabBarIconProps: {
  //     icon: "",
  //     color: "",
  //     size: "",
  //   },
  // },
];

export const USER_TYPES = {
  ADMIN: "ADMIN",
  USER: "USER",
  MANAGER: "MANAGER",
};

const getUserTypeTabs = (userType) => {
  switch (userType) {
    case USER_TYPES.ADMIN:
      return AdminTabs;
      break;
    case USER_TYPES.USER:
      return UserTabs;
      break;
    case USER_TYPES.MANAGER:
      return ManagerTabs;
      break;

    default:
      break;
  }
};

function Tabs() {
  const { authState } = React.useContext(AuthContext);
  return (
    <Tab.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ color, size }) => {
      //     return <Ionicons name="" size={size} color={color} />;
      //   },
      // })}
      tabBarOptions={{
        activeTintColor: "tomato",
        showLabel: false,
      }}
    >
      {getUserTypeTabs(authState.userType).map(
        ({ tabBarIconProps: { icon, size }, ...rest }, index) => (
          <Tab.Screen
            key={String(index)}
            options={({ route }) => ({
              tabBarIcon: ({ color }) => {
                return <Ionicons name={icon} size={size} color={color} />;
              },
            })}
            {...rest}
          />
        )
      )}
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const Navigation = (props) => {
  const { authState } = React.useContext(AuthContext);

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {(authState.token ? TabScreens : AuthScreens)?.map((screen, index) => (
          <Stack.Screen
            key={String(index)}
            // options={{ headerShown: false }}
            {...screen}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
