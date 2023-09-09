import React, { useState, useEffect, useRef } from 'react';
import { Text, Animated, StyleSheet, Pressable } from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const TextNoteButton = ({onDelete, item}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [isPressed, setIsPressed] = useState(false);

    function animateColor(toValue) {
      Animated.timing(fadeAnim, {
        toValue,
        duration: 1800,
        useNativeDriver: false,
      }).start();
    }

    function doDelete() {
      fadeAnim.setValue(0);
      onDelete();

    }

    useEffect(() => {
      if (isPressed) {
        animateColor(1); // Start the color change animation
        const timer = setTimeout(doDelete, 1100); // Call onDelete after 3 seconds
  
        // Cleanup function to cancel the onDelete call and color animation
        return () => {
          clearTimeout(timer);
          animateColor(0);
        };
      } else {
        animateColor(0); // Reset the color
      }
    }, [isPressed]);

    const backgroundColor = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 255, 255)', 'rgb(255, 0, 0)']
    });

    return (
      <AnimatedPressable
        delayLongPress={1100}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={[styles.button, { backgroundColor }]}
      >
        <Text>{item.content}</Text>
      </AnimatedPressable>
    );
};

const styles = StyleSheet.create({
    button: {
      padding: 5,
      borderRadius: 20,
    }
});

export default TextNoteButton;