import React, { Component, useState } from 'react';
import { TouchableOpacity, View, Text, Animated } from 'react-native';


const ColorChangingButton = ({onDelete}) => {
    const [isPressed, setIsPressed] = useState(false);
    const colorAnimation = new Animated.Value(0);
  
    const handlePressIn = () => {
      setIsPressed(true);
  
      Animated.timing(colorAnimation, {
        toValue: 1, // Change this value to control the animation speed
        duration: 3000, // Adjust the duration as needed
        useNativeDriver: false, // This is necessary for color animation
    
      }).start(() => {
        console.log('Animation complete');
      });
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
      
  
      colorAnimation.stopAnimation();
      colorAnimation.setValue(0);
      //onDelete();
    };
  
    const backgroundColor = colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['black', 'red'], // Change these colors to your desired values
      
    });
  
    return (
      <TouchableOpacity
      activeOpacity={0.9}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{ backgroundColor}}
        
      >
        <Text style={{ color: 'white', padding: 16 }}>
          {isPressed ? 'Pressed' : 'Not Pressed'}
        </Text>
      </TouchableOpacity>
    );
  };
  
  export default ColorChangingButton;