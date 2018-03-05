import React, { Component } from "react";
import Login from "./src/components/Login/Login.js";
import { StackNavigator } from "react-navigation";

const AppNavigator = StackNavigator(
  {
    Login: { screen: Login }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
