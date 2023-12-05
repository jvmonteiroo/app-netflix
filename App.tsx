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
      component: Login,
      headerShown: false,
      title: "",
    },
    {
      name: "Home",
      component: Home,
      headerShown: true,
      title: "Tela incial",
    },
    {
      name: "Movie",
      component: Movie,
      headerShown: true,
      title: "Filmes",
    },
    {
      name: "Account",
      component: Account,
      headerShown: true,
      title: "Conta"
    }
  ]
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {routes.map( item => (
          <Stack.Screen name={item.name} options={{
            headerShown: item.headerShown,
            headerStyle: {
              backgroundColor: "#000"
            },
            title: item.title,
            headerTitleStyle: {
              color:"white",
            },
            headerTintColor: 'white',
          }} component={item.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}