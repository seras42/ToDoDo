import { StatusBar } from 'expo-status-bar';
import React, {useState,useRef, useEffect,useCallback} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, VirtualizedList, Modal, Alert, TextInput,KeyboardAvoidingView } from 'react-native';
//import { useEffect } from 'react/cjs/react.production.min';

export default function App() {
  const [showAddWindow, setShowAddWindow] = useState(false);

  const openAddWindow = () => {
    setShowAddWindow(true);
    //console.log('Open add window clicked')
    //console.log(showAddWindow);
  };

  const closeAddWindow = () => {
    setShowAddWindow(false);
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


        <AddItemWindow showAddWindow={showAddWindow} closeAddWindow={closeAddWindow}  />
        



    
      <TextTitle />
       <View style = {styles.listContainer}>
       <Text>Open up App.js to start working on your app!</Text>
       <StatusBar style="auto" />
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
const AddItemWindow = ({showAddWindow, closeAddWindow}) => {
  const addNoteInput = useRef(null);

  
  
  return(
    
      <Modal animationType="slide" transparent={true} visible={showAddWindow} onShow={() => {addNoteInput.current.focus();}}>
        <KeyboardAvoidingView behavior="padding">
        
      
        <View style={styles.addItemContainer}>

          <TextInput 
          multiline style={styles.textInputContainer} placeholder="Input your note" ref={addNoteInput} keyboardShouldPersistTaps='always'
          numberOfLines={3} ></TextInput>

          <View style={styles.addItemButtonContaier}>
          <TouchableOpacity onPress={() => closeAddWindow()} style={styles.newTaskAddButton}><Text style = {{color: 'black', textAlign: 'center', fontSize: 15}}>Add</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => closeAddWindow()} style={styles.newTaskExitButton}><Text style = {{color: 'black', textAlign: 'center', fontSize: 15}}>Exit</Text></TouchableOpacity>
          </View>
          
        </View>
        </KeyboardAvoidingView>
      
        
      </Modal>
    

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
    //height: '80%'

  },
  textInputContainer: {
    textAlign: 'center',
    width: '90%',
    height:'80%',
    
    
   
    borderWidth: 3,
    padding: 18,
    borderRadius: 20,
    borderColor: '#bfbfbf',
    backgroundColor:'#f2f2f2'
  },
  addItemContainer: {
    
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#d9d9d9',
    borderColor: 'green',
    borderWidth: 4,
    padding:10,
    borderRadius: 20,
    height:200,
    margin: 30,

    top: '30%', 

  },
  addItemButtonContaier: {
    flex:3,
    flexDirection: 'row',
    //alignContent: 'flex-start',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    //bottom:0,
    //alignItems: 'center',
    //alignContent: 'center',
    //justifyContent: 'center',
    padding: 1,
    //borderColor:'blue',
    //borderWidth: 1,
 

   
    

  },
  newTaskExitButton: {
    backgroundColor: '#e60000',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    //width: 80,
    width: '50%',

    height: 40,
    padding: 40,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,


  },
  newTaskAddButton: {
    backgroundColor: '#1f7a1f',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    width: '50%',
    //width: 80,
    height: 40,
    padding: 40,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,

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
    bottom: 0,
    right:10,
  },
  titleContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'grey',
    justifyContent: 'flex-start',
    
    borderRadius: 8,
    padding: 20,
    minHeight: 80,
    maxHeight: '10%',
    top:0,
    width: '100%',
    height: '10%'
  }
  
});