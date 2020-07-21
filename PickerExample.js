import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

class PickerExample extends Component {
  state = { user: '', names: ['Steve', 'Ellen', 'Maria'] };
  updateUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <View>
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
        {this.state.names.map((name) => (<Picker.Item label={name} value={name.toLowerCase()} />))}
        </Picker>
        <Text style={styles.text}>{this.state.user}</Text>
      </View>
    );
  }
}
export default PickerExample;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
});
