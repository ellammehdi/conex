import React , {Component} from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class Register extends Component {
    constructor(props){
      super(props);
      this.state={
        email:'',
        password:'',
        name:''
      }
        this.onSignUp= this.onSignUp.bind(this);
    }
      onSignUp(){
        const{ email, password, name } = this.state;
        const auth = getAuth();
        createUserWithEmailAndPassword(email, password).then((result) =>{
            console.log(result)
                })
                .catch((error)=>{
                    console.log(error)
                })

    }
    render(){
     return(
        <view>
            <textInput placeholder="name"
                       onChangeText={(name) => this.setState({ name })}
            />
            <textInput placeholder="email"
                       onChangeText={(email) => this.setState({ email })}
            />
            <textInput placeholder="password"
                       secureTextEntry={true} onChangeText={(password) => this.setState({ password })}
            />
            <button onPress={()=> this.onSignUp()}
                    title='Sign Up'
            />

        </view>
      );
     }
}
export default Register