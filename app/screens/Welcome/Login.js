import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  ImageBackground,
  Alert,
  TouchableOpacity,
  Image,
  TextInput,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import axios from 'axios';
import {connect} from 'react-redux';
import {URL} from '../../../config';
import {saveSession} from '../../../ducks/reducers/userReducer';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    if (!email) {
      Alert.alert('Please Fill In Your Email');
    } else if (!password) {
      Alert.alert('Please Fill In Your Password');
    } else {
      setLoading(true);
      axios
        // .post("http://64.227.51.108:4068/api/login", {
        // 	email: email,
        // 	password: password,
        // })
        .post(`${URL}/api/user/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          setLoading(false);
          props.saveSession(res.data);
        })
        .catch((err) => {
          Alert.alert('Email or Password are incorrect');
          setLoading(false);
        });
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/background-picture.png')}
      style={styles.background}>
      <Image
        style={{width: 100, height: 100, marginBottom: 30}}
        source={require('../../../assets/Icon_White.png')}
      />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        placeholderTextColor="black"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        placeholderTextColor="black"
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <Button
        title={'Login'}
        raised={true}
        buttonStyle={{backgroundColor: '#7392B7', width: 200}}
        titleStyle={{color: 'white', fontFamily: 'helvetica'}}
        onPress={() => handleLogin()}
        disabled={loading ? true : false}
        loading={loading ? true : false}

        // loadingStyle
        // disabledStyle={{backgroundColor: 'grey'}}
      />

      {/* <TouchableOpacity
        style={styles.button}
        onPress={loading ? null : () => handleLogin()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {loading ? <ActivityIndicator size="large" color="" /> : null} */}
    </ImageBackground>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {saveSession})(Login);

const styles = StyleSheet.create({
  background: {
    // backgroundColor: "#5a4b49",
    // height: 400,

    // paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#16182f',
  },
  button: {
    width: '50%',
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: '#7392B7',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});
