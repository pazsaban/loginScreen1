/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAt, faLock} from '@fortawesome/free-solid-svg-icons';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import CheckBox from '@react-native-community/checkbox';

import {useState} from 'react';
import images from '../assets/images/index';

const Login1 = () => {
  const [isSelected, setSelection] = useState(true);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.logo}>מי רמת גן</Text>

        <Text style={styles.connect}>התחברות למערכת</Text>
      </View>

      <View style={{flex: 1}}>
        <View style={styles.inputView}>
          <FontAwesomeIcon color="blue" icon={faAt} size={14} />
          <TextInput
            style={styles.inputText}
            placeholder={`כתובת דוא"ל`}
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setEmail({text: email})}
          />
        </View>

        <View style={styles.inputView}>
          <FontAwesomeIcon
            //vertical-align="baseline"
            color="blue"
            icon={faLock}
            size={14}
          />

          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="סיסמה"
            placeholderTextColor="#003f5c"
            onChangeText={(pass) => this.setPassword({pass: [password]})}
          />
        </View>
      </View>

      <View
        style={{flex: 1, flexDirection: 'row'}}
        // style={{
        //   flexDirection: 'row',
        //   // alignContent: 'flex-start',
        //   paddingVertical: wp('25%'),
        // }}>
      >
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            paddingHorizontal: hp('10%'),
          }}
          // style={{
          //   flex: 3,
          //   alignItems: 'flex-start',
          //   flexDirection: 'row',
          //   //marginTop: '-25%',
          //   paddingHorizontal: hp('2%'),
          // }}>
        >
          <CheckBox
            disabled={false}
            value={isSelected}
            onValueChange={setSelection}
            status="checked"
          />
          <Text>זכור אותי</Text>
        </View>

        <TouchableOpacity
          style={{alignItems: 'flex-end', paddingHorizontal: hp('12%')}}
          // style={{
          //   flex: 2,
          //   paddingHorizontal: hp('-15%'),
          //   alignItems: 'flex-start',
          // }}>
        >
          <Text style={styles.forgot}>שכחת סיסמה?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.textStyle}>התחברות</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    color: '#fff',
  },
  oneRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1,
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue',
    marginBottom: 20,
    marginTop: 30,
  },
  connect: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'blue',
    marginBottom: 40,
  },

  inputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 2,
    // Set border width.
    borderWidth: 1,
    // Set border Hex Color Code Here.
    borderColor: 'blue',
    height: 60,
    marginBottom: hp('5%'),
    padding: wp('5%'),
  },

  inputText: {
    height: hp('10%'),
    bottom: hp('4%'),
    paddingHorizontal: wp('4%'),
    position: 'relative',
    textAlign: 'right',
    width: wp('70%'),

    //color does not change to white
  },

  forgot: {
    color: 'black',
    textDecorationLine: 'underline',
  },

  loginBtn: {
    backgroundColor: 'blue',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
    color: '#fff',
    width: '90%',
    height: 60,
    //position: 'absolute', //Here is the trick
    //bottom: 0, //Here is the trick
  },
  ImageStyle: {
    padding: 20,
    margin: 5,
    height: 50,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default Login1;
