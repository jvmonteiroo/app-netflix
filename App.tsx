import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { images } from './images';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './src/screens/Account';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login"component={Login}/>
        <Stack.Screen name="Account" component={Account}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}