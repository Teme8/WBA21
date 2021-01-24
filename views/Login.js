import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Platform } from "react-native";
import PropTypes from "prop-types";
import { MainContext } from "../contexts/MainContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLogin } from "../hooks/ApiHooks";
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn, setUser] = useContext(MainContext);
  console.log("isLoggedIn?", isLoggedIn);
  const {checkToken } = useLogin();

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    console.log("token", userToken);
    if (userToken) {
      try {
        const userData = await checkToken(userToken);
        setIsLoggedIn(true);
        setUser(userData);
        navigation.navigate("Home");
      } catch (error) {
        console.log("token check failed", error.message);
      }
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    style={styles.container}>
    <View style={styles.container}>
      <Text>Login</Text>
      <LoginForm navigation={navigation}></LoginForm>
      <Text>Register</Text>
      <RegisterForm navigation={navigation}></RegisterForm>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
}});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
