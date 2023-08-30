import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, VirtualizedList, Modal, Alert } from 'react-native';

export default function App() {
  const [showAddWindow, setShowAddWindow] = useState(false);

  const openAddWindow = () => {
    setShowAddWindow(true);
    showAlert();
  };

  const closeAddWindow = () => {
    setShowAddWindow(false);
    showAlert();
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
      <StatusBar style="auto" /></View>
      </View>
      <AddItemWindow showAddWindow={showAddWindow} closeAddWindow={closeAddWindow} />

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
const AddItemWindow = (showAddWindow, {closeAddWindow}) => {
  return(
    <View>
      <Modal animationType="slide" transparent={true} visible={showAddWindow}>
        <View >
          <Text style = {styles.container }>This is the new container or window!</Text>

          <TouchableOpacity onPress={() => closeAddWindow()}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
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
    flexDirection: 'column',
    alignContent: 'center',
    height:'100%'
    
  },
  addItemContainer: {
    alignContent: 'center',
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
    bottom: 10,
    alignItems: 'flex-end',
    right:10

  },
  titleContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: 20,
    minHeight: 80
  }
  
});