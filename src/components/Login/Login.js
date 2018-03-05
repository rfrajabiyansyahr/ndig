import React from "react";
import {
  StyleSheet,
  Image,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import { Container, Text, Item, Input, Form, Button } from "native-base";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this.clearItAll();
  }

  clearItAll() {
    this.refs["username"].setNativeProps({ text: "" });
    this.state.username = "";
    this.refs["password"].setNativeProps({ text: "" });
    this.state.password = "";
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.loginContainer} behavior="padding">
        <Container style={styles.logoContainer}>
          <Text style={styles.logoTextBold}>
            NDIG<Text style={styles.logoText}>-DIAS</Text>
          </Text>
        </Container>
        <Form style={styles.loginForm}>
          <Item regular style={styles.loginInput}>
            <Input
              ref={"username"}
              placeholder="Username"
              placeholderTextColor="rgb(150,150,150)"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item regular style={styles.loginInput}>
            <Input
              ref={"password"}
              placeholder="Password"
              placeholderTextColor="rgb(150,150,150)"
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </Item>
          <Button block style={styles.loginButton}>
            <Text style={{ fontWeight: "bold" }}>Login</Text>
          </Button>
        </Form>
        <Container style={styles.footerContainer}>
          <Text style={styles.footerText}>PT. Sembada Karya Mandiri</Text>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#2c3e50",
    paddingHorizontal: 30
  },
  loginForm: {
    flex: 5,
    paddingTop: 10
  },
  loginInput: {
    height: 45,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 2
  },
  loginButton: {
    backgroundColor: "#4682b4"
  },
  logoText: {
    fontWeight: "normal",
    fontSize: 45,
    color: "white"
  },
  logoTextBold: {
    fontWeight: "bold",
    fontSize: 45,
    color: "white"
  },
  logoContainer: {
    flex: 3,
    alignSelf: "center",
    justifyContent: "flex-end"
  },
  footerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10
  },
  footerText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 11
  }
});
