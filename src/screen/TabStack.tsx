import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import EmptyScreen from "./EmptyScreen";
import AuthScreen from "./AuthScreen";

import {
  WalletIcon,
  ReloadIcon,
  ProfileIcon,
  ChartIcon,
} from "../component/icon/";

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#03A9F4",
        tabBarInactiveTintColor: "#262b34",
        tabBarButton: (props) => <TouchableOpacity {...props} />,
        tabBarStyle: [
          {
            /*height: 63*/
          },
        ],
        tabBarShowLabel: false,
      }}
      backBehavior={"none"}
      initialRouteName="AuthScreen"
    >
      <Tab.Screen
        name="WalletScreen"
        component={EmptyScreen}
        options={{
          headerShown: false,
          title: "Кошелек",
          tabBarIcon: ({ color, size }) => (
            <WalletIcon iconColor={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ChartScreen"
        component={EmptyScreen}
        options={{
          headerShown: false,
          title: "Курсы",
          tabBarIcon: ({ color, size }) => (
            <ChartIcon iconColor={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ReloadScreen"
        component={EmptyScreen}
        options={{
          headerShown: false,
          title: "Обновить",
          tabBarIcon: ({ color, size }) => (
            <ReloadIcon iconColor={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          headerShown: false,
          title: "Профиль",
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon iconColor={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
