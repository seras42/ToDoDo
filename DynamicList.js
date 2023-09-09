import React, {useState,useRef, useEffect,useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, VirtualizedList, Modal, TextInput,KeyboardAvoidingView, Pressable, Keyboard,TouchableWithoutFeedback } from 'react-native';
//import ListItem from './ListItem';

import TextNoteButton from './TextNoteButton';





const getItem = (item, index) => ({
  id: Math.random().toString(12).substring(0),
  text: `Item ${index + 1}`,
});





const DynamicList = ({showAddWindow, closeAddWindow}) => {
  //items gets intialized as empty array, and setItems is a setter for it

 const getItem = (index) => ({
  text: items.map.getItem(index)
 });

 useEffect(() => {
  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    console.log('Keyboard showed');
  });

  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    console.log('Keyboard hidden');
  });

  return () => {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
  };
}, []);



    const [items, setItems] = useState([]);

    const [newItem, setNewItem] = useState('');
  
    const addItem = () => {
      if (newItem) {
        setItems([...items, newItem]);
        setNewItem('');
      }
    };
    const resetInput= () => {
      setNewItem('');
    };
  
    const removeItem = (index) => {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
    };
  
    return (
      <View>
        <AddItemWindow showAddWindow={showAddWindow} closeAddWindow={closeAddWindow} addItem={addItem} newItem={newItem} setNewItem={setNewItem} resetInput={resetInput}/>


        <View >
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onDelete={() => removeItem(index)}
            
           
          />
        ))}
        </View>
      

      </View>
    );
  };

  const ListItem = ({ item, onDelete }) => {
    const [isLongPressing, setIsLongPressing] = useState(false);



    const itemStyles = StyleSheet.create({
      itemStyle: {
        backgroundColor:'#ffffe6',
        padding: 5,
        borderWidth: 2,
        borderRadius: 20,
        width: '100%',
        marginVertical: 2,
      },
    });

    return (
      <View style={itemStyles.itemStyle}>

  
        <TextNoteButton onDelete={onDelete} item={item}></TextNoteButton>
    
      </View>
    );
  };
  
  const AddItemWindow = ({showAddWindow, closeAddWindow, setNewItem,addItem,newItem, resetInput}) => {
    const addNoteInput = useRef(null);

    const handleButtonClick = () => {

      addNoteInput.current.focus();
      
    };
  
    return(
      
      
        <Modal animationType="slide" transparent={true} visible={showAddWindow} onShow={handleButtonClick}>
          <KeyboardAvoidingView behavior='padding'>
            
          
        
          <View style={styles.addItemContainer}>
         
  
            <TextInput 
            multiline style={styles.textInputContainer } placeholder="Input your note" ref={addNoteInput}
            numberOfLines={3}  value={newItem} onChangeText={(text) => setNewItem(text)}></TextInput>
  
            <View style={styles.addItemButtonContainer}>
            <TouchableOpacity onPress={addItem} style={styles.newTaskAddButton}><Text style = {{color: 'black', textAlign: 'center', fontSize: 15}}>Add</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {closeAddWindow(); resetInput()}} style={styles.newTaskExitButton}><Text style = {{color: 'black', textAlign: 'center', fontSize: 15}}>Exit</Text></TouchableOpacity>
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
      margin:2,
      padding: 3,
      borderRadius: 20,
      borderColor: '#bfbfbf',
      backgroundColor:'#f2f2f2'
    },
    addItemButtonContainer: {
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
  
  export default DynamicList;