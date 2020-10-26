import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import Chatbox from "./ChatboxComponent";
import Login from "./LoginComponent";
import { View, StatusBar } from "react-native";

const LoginNavigator = createStackNavigator();

function LoginNavigatorScreen() {
  return (
    <LoginNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#128c7e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <LoginNavigator.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="arrow-left"
              type="font-awesome"
              size={20}
              color="white"
            />
          ),
        })}
      />
      <LoginNavigator.Screen
        name="Chatbox"
        component={Chatbox}
        options={{ headerTitle: "The Chatbox" }}
      />
    </LoginNavigator.Navigator>
  );
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
        }}
      >
        <NavigationContainer>
          <LoginNavigatorScreen />
        </NavigationContainer>
      </View>
    );
  }
}
export default Main;
