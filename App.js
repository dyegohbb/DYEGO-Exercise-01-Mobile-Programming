import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import UserListScreen from "./screens/UserList"
import ContactRegister from "./screens/ContactRegister";

const Stack = createStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactRegister"
          component={ContactRegister}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
