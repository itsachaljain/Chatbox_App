import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as firebase from "firebase";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      Confirmpassword: "",
      errorMess: null,
      returnSecureToken: true,
    };
  }

  signUpNewUser = () => {
    if (this.state.password === this.state.Confirmpassword) {
      firebase.default
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => Alert.alert("Thanks for joining us! You can Login Now!"))
        .catch((error) =>
          Alert.alert("Please enter valid credentials and Try again!")
        );
    } else {
      Alert.alert("The passwords don't match!");
    }
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "aquamarine" }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/logo.png")}
            style={{ marginLeft: 20 }}
          />
          <KeyboardAvoidingView style={styles.card}>
            <View style={styles.formInput}>
              <TextInput
                placeholder="E-mail"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View style={styles.formInput}>
              <TextInput
                placeholder="Password (atleast 6 characters)"
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.formInput}>
              <TextInput
                placeholder="Confirm password"
                value={this.state.Confirmpassword}
                onChangeText={(Confirmpassword) =>
                  this.setState({ Confirmpassword })
                }
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity onPress={this.signUpNewUser}>
              <View style={styles.formButton}>
                <Text>Register</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 5,
  },
  formButton: {
    margin: 40,
    borderRadius: 25,
    width: "70%",
    backgroundColor: "#128c7e",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    fontWeight: "bold",
    alignSelf: "center",
  },
  formInput: {
    width: "90%",
    backgroundColor: "pink",
    borderRadius: 25,
    height: 55,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    alignSelf: "center",
  },
  card: {
    borderRadius: 15,
    backgroundColor: "aquamarine",
    padding: 20,
    marginTop: 20,
  },
});

export default Register;
