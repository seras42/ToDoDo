import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
  

    <View style={[styles.container, {
      flexDirection: 'column',
    },
    ]}>

      <View style={styles.titleContainer}>

      <Text style={styles.title}>To Do</Text>
    </View>

    <View style = {styles.listContainer}>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </View>

      <TouchableOpacity
        title="Press me"
        onPress={() => print('Simple Button pressed')}
        style = {styles.button}>


         <Text style = {{color: 'white', textAlign: 'center', fontSize: 30}}>+</Text>

      </TouchableOpacity>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
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
    textAlign: 'center',
    fontSize: 100,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  titleContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'grey',
    flexDirection: 'column',
    borderRadius: 8,
    padding: 20,
    minHeight: 80
  

   
  },
  listContainer: {

  }
});