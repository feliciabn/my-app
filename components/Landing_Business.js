import React, {Component} from 'react'
import {Text, View, Button, StyleSheet, ImageBackground} from 'react-native'
import New1 from './New1'


export default function Landing_Business({navigation}) {
    return (
       <View color="#FFFFFF" style={styles.text1}>
           
            <p >Almost 10,000 tonnes of plastic goes into the Great Lakes annually</p>
    
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style = {styles.login}>
            <Button onPress ={()=> navigation.navigate("Login_Business")} title = "Login">Login</Button>
            </View>
            <View style = {styles.register}>
            <Button title = "Register" onPress ={()=> navigation.navigate("Register_Business")}>Register</Button></View>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    text1:{
        flex:3,
        textAlign:'center',
        fontFamily:'Roboto',
        fontSize:18

    },
    register:{
    position: 'absolute',
        
    left: 30.54,
    right: 30.53,
    top: 500,
    bottom: 34.59,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: 13,
    lineHeight: 15,
    display: 'flex',
    width: '167px',
    height: '52px', 
   
    textAlign: 'center',
    letterSpacing: 0.04,
    textTransform: 'uppercase',

    color: '#FFFFFF'},
    login:{
        position: 'absolute',
            
        width: 150,
        height: 52,
        top: 500,
        left: 193.01,
    
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 900,
        fontSize: 13,
        lineHeight: 15,
        display: 'flex',
        
        textAlign: 'center',
        letterSpacing: 0.04,
        textTransform: 'uppercase',
    
        color: '#FFFFFF'}

})

