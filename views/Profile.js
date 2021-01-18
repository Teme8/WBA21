import React, { useContext } from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import { MainContext } from '../contexts/Maincontext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    if (!isLoggedIn) { // this is to make sure isLoggedIn has changed, will be removed later
      navigation.navigate('Login');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
