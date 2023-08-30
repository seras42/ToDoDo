import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, VirtualizedList, Modal, Alert, TextInput } from 'react-native';

export default function App() {
  const [showAddWindow, setShowAddWindow] = useState(false);

  const openAddWindow = () => {
    setShowAddWindow(true);
    console.log('Open add window clicked')
    console.log(showAddWindow);
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
    <View>
      
      
      
  
      <View style={styles.container}>
      <TextTitle />

       <View style = {styles.listContainer}>
       <Text>Open up App.js to start working on your app!</Text>
       <StatusBar style="auto" />
       </View>

       <AddItemWindow showAddWindow={showAddWindow} closeAddWindow={closeAddWindow}  />
       <NewTaskButton openAddWindow={openAddWindow}/>
      
       
       </View>
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
  return(
    <View >
      <Modal animationType="slide" transparent={true} visible={showAddWindow}>
        <View style={styles.addItemContainer}>
          <TextInput>This is the new container or window!</TextInput>
          <View style={styles.addItemButtonContaier}>
          <TouchableOpacity style={styles.newTaskAddButton}><Text>Add</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => closeAddWindow()} style={styles.newTaskExitButton}><Text>Exit</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>

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
    lex:1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    height:'100%'
    
  },
  listContainer: {
    height: '80%'

  },
  addItemContainer: {
    //position: 'absolute',
    //display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'center',
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 20,
    //left: '10%',
    //top: '30%', 
    //bottom: 0,
    width: '80%',
    height: 200,
  

  },
  addItemButtonContaier: {
    flexDirection: 'row',

  },
  newTaskExitButton: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    width: 100,
    height: 60,
    padding: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,


  },
  newTaskAddButton: {
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    width: 100,
    height: 60,
    padding: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,

  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
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
    borderRadius: 8,
    padding: 20,
    minHeight: 80,
    width: '100%',
    height: '10%'
  }
  
});