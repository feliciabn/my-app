import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Landing_Business from './components/Landing_Business'
import Landing_User from './components/Landing_User'
import Home from './components/Home'
import firebase from "firebase/app"
import Main from './components/Main'
import 'firebase/auth'
import Login_User from './components/Login_User'
import Register_User from './components/Register_User';
import Register_Business from './components/Register_Business';
import Login_Business from './components/Login_Business';

import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './components/redux/reducers';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
    apiKey: "AIzaSyBiMXQxB5Dw_C35zmBd7sO9zvRbFQZQfOQ",
    authDomain: "earth-buddies.firebaseapp.com",
    projectId: "earth-buddies",
    storageBucket: "earth-buddies.appspot.com",
    messagingSenderId: "860041920648",
    appId: "1:860041920648:web:59050c9c4f5f87e8ecdf3d",
    measurementId: "G-NTNQ7E4D3V"
  };
  const Stack = createStackNavigator();

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}
export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  } 


  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

  if (!loggedIn) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {Home} options ={{headerShown:false}}/>
        <Stack.Screen name="Landing_Business" component={Landing_Business}/>
        <Stack.Screen name="Landing_User" component={Landing_User} />
        <Stack.Screen name="Login_User" component={Login_User} />
        <Stack.Screen name="Register_User" component={Register_User} />
        <Stack.Screen name="Register_Business" component={Register_Business} />
        <Stack.Screen name="Login_Business" component={Login_Business} />
      </Stack.Navigator>
      </NavigationContainer>)}

  return ( 
      <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
    }}
  
export default App;
