import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
  

    <View>

      <View style={styles.container}>
      <TextTitle />
    <View style = {styles.listContainer}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /></View>
      
      </View>



      <CreateNewTaskButton />
    </View>
  );
}
const CreateNewTaskButton = () => {
  return (
<View style={styles.buttonContainer}>
      <TouchableOpacity
        title="Press me"
        onPress={() => print('Simple Button pressed')}
        style = {styles.button}
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
    flexDirection: 'column',
    alignContent: 'center',
    height:'100%'
    
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
    minHeight: 80,
  

   
  }
  
});