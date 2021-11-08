import React , {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default  function Landing({ navigation }){
    return(
      <view style={{ flex:1 , justifyContent:'center' }}>
          <Button
              title="Register"
              onPress={() => navigation.navigate('Register')} />
          <Button
              title="Login"
              onPress={() => navigation.navigate('Login')} />
      </view>
    );
}

