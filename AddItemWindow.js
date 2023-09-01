import React, {useState,useRef, useEffect,useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, VirtualizedList, Modal, Alert, TextInput,KeyboardAvoidingView } from 'react-native';



const AddItemWindow = ({showAddWindow, closeAddWindow}) => {
    const addNoteInput = useRef(null);
  
    return(
      
        <Modal animationType="slide" transparent={true} visible={showAddWindow} onShow={() => {addNoteInput.current.focus();}}>
          <KeyboardAvoidingView behavior='padding'>
          
        
          <View style={styles.addItemContainer}>
  
            <TextInput 
            multiline style={styles.textInputContainer } placeholder="Input your note" ref={addNoteInput}
            numberOfLines={3}  ></TextInput>
  
            <View style={styles.addItemButtonContaier}>
            <TouchableOpacity onPress={() => closeAddWindow()} style={styles.newTaskAddButton}><Text style = {{color: 'black', textAlign: 'center', fontSize: 15}}>Add</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => closeAddWindow()} style={styles.newTaskExitButton}><Text style = {{color: 'black', textAlign: 'center', fontSize: 15}}>Exit</Text></TouchableOpacity>
            </View>
            
          </View>
          </KeyboardAvoidingView>
        
          
        </Modal>
    );
  };

  const styles = StyleSheet.create({
    addItemContainer: {
    
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#d9d9d9',
      borderColor: 'green',
      borderWidth: 4,
      padding:5,
      borderRadius: 20,
      height:200,
      margin: 10,
      top: '75%', 
    },
    textInputContainer: {
      textAlign: 'center',
      width: '100%',
      height:'75%',
      fontSize: 16,
      borderWidth: 3,
      padding: 18,
      borderRadius: 20,
      borderColor: '#bfbfbf',
      backgroundColor:'#f2f2f2'
    },
    addItemButtonContaier: {
      flex:3,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      padding: 4,
   
    },
    newTaskExitButton: {
      backgroundColor: '#e60000',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 8,
      width: '30%',
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
      width: '70%',
      //width: 80,
      height: 40,
      padding: 40,
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
  
    },




  });

  export default AddItemWindow;