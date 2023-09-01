import { StatusBar } from 'expo-status-bar';
import React, {useState,useRef, useEffect,useCallback} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, VirtualizedList, Modal, Alert, TextInput,KeyboardAvoidingView } from 'react-native';
//import { useEffect } from 'react/cjs/react.production.min';
import DynamicList from './DynamicList';


export default function App() {
  const [showAddWindow, setShowAddWindow] = useState(false);

  const openAddWindow = () => {
    setShowAddWindow(true);
  };

  const closeAddWindow = () => {
    setShowAddWindow(false);
  };

  const addNote = () => {


  };

  const showAlert = () => {
    console.log('Open Add Window');
    Alert.alert(
      'Alert Title',
      'This is the alert message.',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: false }
    );
  };



  return (
      <View style={styles.container}>

      <TextTitle />


       
       <StatusBar style="auto" />
       <View style = {styles.listContainer}>
       <DynamicList showAddWindow={showAddWindow} closeAddWindow={closeAddWindow}></DynamicList>
       </View>

       
       <NewTaskButton openAddWindow={openAddWindow}/>
    
       </View>

      
    
  );
}
const NewTaskButton = ({openAddWindow}) => {
  return (
<View style={styles.buttonContainer}>
      <TouchableOpacity
        title="Press me" onPress={() => openAddWindow()} style = {styles.button}
        >
         <Text style = {{color: 'white', textAlign: 'center', fontSize: 30}}>+</Text>

      </TouchableOpacity></View>
  );
};


const TextTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>To Do</Text></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    alignContent: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
    top:0,
    height:'100%'
    
  },
  listContainer: {
    flex:2,
    //flexDirection: 'row',
    width: '100%',
    padding: 1,
    //height: '80%'

  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 35
  },
  button: {
    
    backgroundColor: 'green',
    color: 'white',
    padding: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 60,
    height: 60
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right:10,
  },
  titleContainer: {
    //borderBottomLeftRadius: 20,
    //borderBottomRightRadius: 20,
    backgroundColor: 'grey',
    justifyContent: 'flex-start',
    
    //borderRadius: 8,
    padding: 20,
    minHeight: 80,
    maxHeight: '10%',
    top:0,
    width: '100%',
    height: '10%'
  }
  
});