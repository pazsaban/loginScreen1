import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import {t} from 'react-native-tailwindcss';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Input(props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[styles.input, props.error && t.borderRed500, props.style]}
        {...props}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
}

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: height * 0.02,
    borderRadius: 2,
  },
  //wrapper: [t.selfStretch, t.m85],
  input: {
    //flex: 1,
    //justifyContent: 'flex-start',
    width: width * 0.85,
    //backgroundColor: '#ffffff',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'blue',

    //paddingTop: height * 0.04,
    //marginBottom: height * 0.05,
    //paddingVertical: width * 0.07,
    //paddingHorizontal: width * 0.07,
  },
  // input: [
  //   t.h11,
  //   t.border,
  //   t.selfStretch,
  //   t.p2,
  //   t.borderGray500,
  //   t.rounded,
  //   t.textBase,
  //   t.textGray700,
  // ],
  errorText: [t.mT1, t.textRed500],
};
