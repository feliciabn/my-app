import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import firebase from 'firebase'
import "firebase/firestore";

export class Register_User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Email: '',
            Password: '',
            Name: '',
            Address: '',
            WasteType: ' '
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { Email, Password, Name, Address, WasteType } = this.state;
        firebase.auth().createUserWithEmailAndPassword(Email, Password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        Name,
                        Email,
                        Address
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Name"
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                    placeholder="Address"
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                    placeholder="Type of Waste Accepted"
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button
                    onPress={() => this.onSignUp()}
                    title="Sign Up"
  
                />
            </View>
        )
    }
}

export default Register_User