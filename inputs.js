import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Inputs extends Component {
  state = {
    email: '',
    password: '',
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };
  login = (email, password) => {
    var string = `Email:  ${email} \nPassword: ${password}`;
    alert(string);
  };
  FunctionToOpenSecondActivity = () => {
    this.props.navigation.navigate('List');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('assets/124010.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#000080"
          onChangeText={this.handleEmail}></TextInput>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#000080"
          onChangeText={this.handlePassword}></TextInput>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            this.login(this.state.email, this.state.password);
          }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    marginLeft: 150,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 23,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 3,
    margin: 15,
    height: 40,
    borderColor: '#000080',
    borderWidth: 1,
  },
  submitButton: {
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#000080',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
