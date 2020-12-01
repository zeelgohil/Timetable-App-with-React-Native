import React, {Component} from 'react';
import {Button, Text, View, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BEIT from './BEIT';
import TEIT from './TEIT';
import SEIT from './SEIT';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

function Home({navigation}) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.imageBackground}>
    <View style={{flex: 1, alignItems: 'center' , justifyContent: 'space-evenly'}}>
      <TouchableOpacity onPress={() => navigation.navigate("BE-IT")} style={[styles.buttonContainer, {marginTop: -80}]}>
        <View>
          <Text style={styles.textStyle}>BE-IT Timetable</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("TE-IT")} style={styles.buttonContainer}>
        <View>
          <Text style={styles.textStyle}>TE-IT Timetable</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SE-IT")} style={styles.buttonContainer}>
        <View>
          <Text style={styles.textStyle}>SE-IT Timetable</Text>
        </View>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

function BEITScreen() {
  return (
    <View style={{flex: 1}}>
      <BEIT />
    </View>
  );
}
function TEITScreen() {
  return (
    <View style={{flex: 1}}>
      <TEIT />
    </View>
  );
}
function SEITScreen() {
  return (
    <View style={{flex: 1}}>
      <SEIT />
    </View>
  );
}

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#f0725c',
          },
          headerTintColor: '#fff',
          }}
        >
          <Stack.Screen name="Time Table" component={Home} />
          <Stack.Screen name ="BE-IT" component={BEITScreen} />
          <Stack.Screen name ="TE-IT" component={TEITScreen} />
          <Stack.Screen name ="SE-IT" component={SEITScreen} />
        </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = {
  imageBackground: {
    height: windowHeight,
    width: windowWidth
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80, 
    width: 200, 
    backgroundColor: '#f0725c',
    borderRadius: 10,
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
}

export default App;