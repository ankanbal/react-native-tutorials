import React, { Component } from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'

export default class Animations extends Component {
  state={
    toggled: false,
  };
   UNSAFE_componentWillMount = () => {
      this.animatedWidth = new Animated.Value(50)
      this.animatedHeight = new Animated.Value(100)
   }
   animatedBox = () => {
     if (this.state.toggled === false){
       Animated.timing(this.animatedWidth, {
         toValue: 100,
         duration: 1000
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 200,
         duration: 500
      }).start()
      this.setState({toggled: true})
     }
     else{
       Animated.timing(this.animatedWidth, {
         toValue: 50,
         duration: 1000
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 100,
         duration: 500
      }).start()
      this.setState({toggled: false})
     }
   }
   render() {
      const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
      return (
         <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
            <Animated.View style = {[styles.box, animatedStyle]}/>
         </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   box: {
      backgroundColor: 'blue',
      width: 50,
      height: 100
   }
})