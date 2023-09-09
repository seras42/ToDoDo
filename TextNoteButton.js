import React, { Component, useState } from 'react';
import { TouchableOpacity, View, Text, Animated, Pressable } from 'react-native';

const TextNoteButton = ({onDelete, item}) => {
    const [isPressed, setIsPressed] = useState(false);
  
    
    const handlePressOut = () => {
      //setIsPressed(false);
      
  
      //colorAnimation.stopAnimation();
      //colorAnimation.setValue(0);
      onDelete();
    };
  
    
  
    return (


        <Pressable delayLongPress={1000} onLongPress={handlePressOut} style={'black'} onHoverIn={{backroundColour: 'black'}}>



        <Text style={{ color: 'black', padding: 16 }}>
          {item}
        </Text>

        </Pressable>
        
    );
  };
  
  export default TextNoteButton;