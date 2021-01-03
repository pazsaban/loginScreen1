/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Component} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Input from '../components/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAt, faLock} from '@fortawesome/free-solid-svg-icons';
import {strings, isRTL} from '../i18n';
import {t} from 'react-native-tailwindcss';
import {useForm, Controller} from 'react-hook-form';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {useState} from 'react';
import {setUser} from '../redux/actions/userActions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Login1 = () => {
  // let containerStyle = isRTL ? styles.RTLContainer : styles.LTRContainer;
  //const {userObj} = useSelector((state) => state.UserReducer);
  // console.tron.log('userObject', userObj);
  //console.tron.log('emaileror:', emailError);
  //const [showHeader, setShowHeader] = useState(true);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [isSelected, setSelection] = useState(true);
  const [emailError, setError] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const {handleSubmit, control, errors} = useForm();

  const onSubmit = (data) => {
    console.tron.log(data, 'data');
  };
  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      setEmail({text: email});
      return false;
    } else {
      setEmail({text: email});
      console.log('Email is Correct');
    }
  };
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.FlexGrowOne}>
      {/* //logo and connection */}
      <View style={styles.container}>
        {/* {showHeader ? ( */}
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={styles.logo}>WeTask</Text>

          <Text style={styles.connect}>{strings('login.title')}</Text>
        </View>

        <KeyboardAvoidingView />

        <View
          style={{
            fontFamily: 'OpenSans',
            flex: 1,
            flexDirection: 'column',
            paddingBottom: height * 0.04,
          }}>
          <View style={{...styles.inputView, flexDirection: 'row'}}>
            <FontAwesomeIcon color="blue" icon={faAt} size={14} />
            {/* email and pass from user */}
            <TextInput
              style={styles.inputText}
              placeholder={strings('login.email_address')}
              placeholderTextColor="#003f5c"
              onChangeText={(text) => {
                validate(text);
              }}
              // onFocus={() => setShowHeader(false)}
              // onBlur={() => setShowHeader(false)}
            />
            {/* <Text>{emailError}</Text> */}
          </View>

          <View style={{...styles.inputView, flexDirection: 'row'}}>
            <FontAwesomeIcon
              vertical-align="baseline"
              color="blue"
              icon={faLock}
              size={14}
            />

            <TextInput
              //onBlur={() => emailValidator()}
              secureTextEntry
              style={styles.inputText}
              vertical-align="baseline"
              placeholder={strings('login.password')}
              placeholderTextColor="#003f5c"
              onChangeText={(pass) => setPassword({pass: [password]})}
            />
          </View>
        </View>

        {/* remember me and forgot password */}

        {/* <Input placeholder="Name" />
        <Input placeholder="Email" /> */}
        {/* <FontAwesomeIcon
          vertical-align="baseline"
          color="blue"
          icon={faLock}
          size={14}
        />
        <Controller
          //style={{flex: 1}}
          defaultValue=""
          name="name"
          control={control}
          rules={{
            required: {value: true, message: 'Name is required'},
          }}
          render={({onChange, value}) => (
            <Input
              error={errors.name}
              errorText={errors?.name?.message}
              onChangeText={(text) => onChange(text)}
              value={value}
              placeholder="Name"
            />
          )}
        />
        <Controller
          // style={{flex: 1}}
          defaultValue=""
          name="email"
          control={control}
          rules={{
            required: {value: true, message: 'Email is required'},
            pattern: {
              value: EMAIL_REGEX,
              message: 'Not a valid email',
            },
          }}
          render={({onChange, value}) => (
            <Input
              error={errors.email}
              errorText={errors?.email?.message}
              onChangeText={(text) => onChange(text)}
              value={value}
              placeholder="email"
            />
          )}
        /> */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: height * 0.1,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              //flex: 1,
              alignItems: 'flex-start',
              flexDirection: 'row',
              paddingHorizontal: width * 0.18,
            }}>
            <CheckBox
              disabled={false}
              value={isSelected}
              onValueChange={setSelection}
              status="checked"
              tintColors={{true: 'blue', false: 'blue'}}
            />

            <Text>{strings('login.remember_me')}</Text>
          </View>

          <TouchableOpacity style={{paddingHorizontal: width * 0.13}}>
            <Text style={styles.forgot}>{strings('login.forgot_pass')}</Text>
          </TouchableOpacity>
        </View>
        {/* gif and button */}
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            alignItems: 'center',
            //justifyContent: 'space-between',
            //padding: height * 0.06,
            //paddingBottom: height * 0.2,
          }}>
          <Image
            source={require('../../Images/GIF.gif')}
            style={{
              //alignItems: 'flex-start',

              width: width * 0.1,
              height: height * 0.1,
              //arginBottom: height * 0.1,
            }}
          />
          <Text style={{marginBottom: height * 0.5}}>
            {strings('login.run_by')}
          </Text>
        </View>

        <View style={styles.loginBtn}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            {/* // onPress={() => */}
            {/* //   dispatch(setUser({userName: 'ben', userEmail: 'gg@!gmail.copm'})) */}

            <Text style={styles.textStyle}>
              {strings('login.login_button')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // RTLContainer: {
  //   flexDirection: 'row-reverse',
  // },

  // LTRContainer: {
  //   flexDirection: 'row',
  // },
  FlexGrowOne: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    justifyContent: 'flex-end',
  },

  textStyle: {
    color: '#fff',
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue',
    marginBottom: height * 0.05,
    marginTop: height * 0.05,
  },
  connect: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'blue',
  },

  inputView: {
    flex: 1,
    justifyContent: 'flex-start',
    width: width * 0.85,
    //backgroundColor: '#ffffff',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: height * 0.05,
    padding: width * 0.07,
  },

  inputText: {
    flex: 1,
    height: height * 0.09,
    bottom: width * 0.08,
    paddingHorizontal: width * 0.04,
    //position: 'relative',
    //textAlign: 'right',
    marginTop: height * 0.01,

    //color does not change to white
  },

  forgot: {
    color: 'black',
    textDecorationLine: 'underline',
  },

  loginBtn: {
    flex: 1,
    backgroundColor: 'blue',
    //borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.05,
    //marginTop: height * 0.5,

    // color: '#fff',
    width: width * 0.85,
    height: 60,
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
});

export default Login1;
