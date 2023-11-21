import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { images } from './images';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './src/screens/Account';
import Home from './src/screens/Home';
import Movie from './src/screens/Movie';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login"component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="Movie" component={Movie}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}