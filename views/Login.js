import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Platform } from "react-native";
import PropTypes from "prop-types";
import { MainContext } from "../contexts/MainContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLogin, useUser } from "../hooks/ApiHooks";
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {Card, Text} from 'react-native-elements';

const Login = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const [formToggle, setFormToggle] = useState(true);
  const {checkToken} = useUser();

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('token', userToken);
    if (userToken) {
      try {
        const userData = await checkToken(userToken);
        setIsLoggedIn(true);
        setUser(userData);
        navigation.navigate('Home');
      } catch (error) {
        console.log('token check failed', error.message);
      }
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.appTitle}>
            <Text h1>MyApp</Text>
          </View>
          <View style={styles.form}>
            <Card>
              {formToggle ? (
                <>
                  <Card.Title h4>Login</Card.Title>
                  <Card.Divider />
                  <LoginForm navigation={navigation} />
                </>
              ) : (
                <>
                  <Card.Title h4>Register</Card.Title>
                  <Card.Divider />
                  <RegisterForm navigation={navigation} />
                </>
              )}
              <ListItem
                onPress={() => {
                  setFormToggle(!formToggle);
                }}
              >
                <ListItem.Content>
                  <Text style={styles.text}>
                    {formToggle
                      ? 'No account? Register here.'
                      : 'Already registered? Login here.'}
                  </Text>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </Card>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
