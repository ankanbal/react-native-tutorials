import React, { Component } from 'react';
import { View, WebView, StyleSheet } from 'react-native';

export default class WebViewExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{
            uri:
              'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
});

/*import React, { Component } from 'react';
import { View, WebView, StyleSheet, TextInput } from 'react-native';

export default class WebViewExample extends Component {
  state = {
    val: 'avengers',
  };
  handleEmail = (text) => {
    this.setState({ val: text });
  };
  render() {
    const url = `https://www.google.com/search?q=${this.state.val}`;
    return (
      <View style={styles.container}>
        <WebView source={{ uri: url }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
  /*input: {
    borderRadius: 3,
    margin: 15,
    height: 40,
    borderColor: '#000080',
    borderWidth: 1,
  },
});*/
