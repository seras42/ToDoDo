import React, {useState,useRef, useEffect,useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, VirtualizedList, Modal, TextInput,KeyboardAvoidingView } from 'react-native';
//import ListItem from './ListItem';




const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});



const DynamicList = ({showAddWindow, closeAddWindow}) => {
  //items gets intialized as empty array, and setItems is a setter for it
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


{/*

        <View style={{padding: 10}}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onDelete={() => removeItem(index)}
            //style={{padding: 10,flex:4}}
          />
        ))}
        </View>
        */}



        <VirtualizedList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        getItemCount={() => items.length}

        renderItem={({ item, index }) => (
          <ListItem
            key={index}
            item={item}
            onDelete={() => removeItem(index)}
          />
        )}
      />

        



      </View>
    );
  };

  const ListItem = ({ item, onDelete }) => {
    const [isLongPressing, setIsLongPressing] = useState(false);



    const itemStyles = StyleSheet.create({
      itemStyle: {
        backgroundColor: isLongPressing ? 'green' : '#ffffe6',
        padding: 12,
        borderWidth: 2,
        borderRadius: 20,
        width: '100%'
      },
    });

    return (
      <View style={itemStyles.itemStyle}>

        <TouchableOpacity 
      onPress={() => {
        setIsLongPressing(false);
      }}
      onLongPress={() => {
        onDelete();
    }}
    delayLongPress={500}
    >
      <View>
        <Text style={{ color: 'black' }}>{item}</Text>
      </View>
    </TouchableOpacity>
    
      </View>
    );
  };
  
  const AddItemWindow = ({showAddWindow, closeAddWindow, setNewItem,addItem,newItem, resetInput}) => {
    const addNoteInput = useRef(null);
  
    return(
      
        <Modal animationType="slide" transparent={true} visible={showAddWindow} onShow={() => {addNoteInput.current.focus();}}>
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
      padding: 18,
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