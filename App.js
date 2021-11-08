import { StatusBar } from 'expo-status-bar';
import React , { Component } from 'react';
import { view, text } from 'react-native';
import firebase from "firebase/app"
 const firebaseConfig = {
  apiKey: "AIzaSyDaaSogtBnA2hbehvdwp9VcZ5lLa-3cdcY",
  authDomain: "conexium-dcdf4.firebaseapp.com",
  projectId: "conexium-dcdf4",
  storageBucket: "conexium-dcdf4.appspot.com",
  messagingSenderId: "231828117282",
  appId: "1:231828117282:web:95308d683db8d4c993b77b",
  measurementId: "G-5ZRNYSRPN5"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './src/components/Landing';
import RegisterScreen from './src/components/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStakNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();

export class App extends Component  {
    constructor(props) {
        super(props);
     this.state= {
         loaded: false,
     }
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) =>{
            if(!user){
                this.setState({
                    loggedIn: false,
                    loaded: true,
                })
            }else{
                this.setState({
                    loggedIn: true,
                    loaded: true,
                })
            }
        })
    }
  render(){
        const{ loggedIn, Loaded } = this.state
      if(!loaded){
          return(
              <view style={{ flex:1, justifyContent:'center' }}>
                  <text>Loading...</text>
              </view>
          );
      }
      if(!loggedIn){
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
           );
  }
      return(
          <view style={{ flex:1, justifyContent:'center' }}>
              <text>User Is LoggedIn :)</text>
          </view>
      )
  }
}