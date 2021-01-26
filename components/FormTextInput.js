import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';

const FormTextInput = ({style, ...otherProps}) => {
  return <Input style={[styles.textInput, style]} {...otherProps} />;
};

FormTextInput.propTypes = {
  style: PropTypes.object,
};

export default FormTextInput;
