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

  const routes = [
    {
      name: 'Login',
      component: Login
    },
    {
      name: "Home",
      component: Home
    },
    {
      name: "Movie",
      component: Movie
    },
    {
      name: "Account",
      component: Account
    }
  ]
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {routes.map( item => (
          <Stack.Screen name={item.name} component={item.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}