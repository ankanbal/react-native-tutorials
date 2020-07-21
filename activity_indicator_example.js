import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class ActivityIndicatorExample extends Component {
  state = {
    animating: true,
    colors: ['#0000cd', '#00ff00', '#dc143c', '#ffff00'],
    val: 0,
  };

  closeActivityIndicator = () => {
    this.setState({
      val: (this.state.val + 1) % this.state.colors.length,
    });
  };
  componentDidMount() {
    this.timer = setInterval(() => this.closeActivityIndicator(), 1000);
  }
  render() {
    const animating = this.state.animating;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color={this.state.colors[this.state.val]}
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    );
  }
}
export default ActivityIndicatorExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});
