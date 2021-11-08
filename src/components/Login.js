import React , {Component} from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from 'firebase';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
        this.onSignIn= this.onSignIn.bind(this);
    }
    onSignIn(){
        const { email, password } = this.state;
        firebase.auth()SignInWithEmailAndPassword(email, password)
            .then((result) =>{
                console.log(result)
            })
            .catch((error)=>{
                console.log(error)
            })

    }
    render(){
        return(
            <view>
                <textInput placeholder="email"
                           onChangeText={(email) => this.setState({ email })}
                />
                <textInput placeholder="password"
                           secureTextEntry={true} onChangeText={(password) => this.setState({ password })}
                />
                <button onPress={()=> this.onSignIn()}
                        title='Sign In'
                />

            </view>
        );
    }
}
export default Login