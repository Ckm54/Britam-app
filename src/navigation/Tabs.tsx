import React from "react";
import {
  BottomTabBar,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { HomeScreen, SupportScreen } from "../screens";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const screenOptions = (route: { name: string }, color: string) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = "home";
      break;
    case "Support":
      iconName = "support-agent";
      break;
    case "Investment":
      iconName = "security";
      break;
    case "Portfolio":
      iconName = "pie-chart";
      break;
    default:
      iconName = "home";
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        tabBarIcon: ({ color }): JSX.Element => screenOptions(route, color),
        tabBarStyle: {
          backgroundColor: "#0077BE",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingVertical: 16,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Investment" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={HomeScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
