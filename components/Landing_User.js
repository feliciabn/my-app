import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'


export default function Landing_User({navigation}) {
    return (
        <View color="#FFFFFF" style={styles.text1}>
           
        <p> In Canada, up to 15 billion plastic bags are used every year and close to 57 million straws are used daily</p>
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style = {styles.login}>
        <Button title = "Login" onPress ={()=> navigation.navigate("Login_User")}>Login</Button>
        </View>
        <View style = {styles.register}>
        <Button title = "Register"  onPress ={()=> navigation.navigate("Register_User")}>Register</Button></View>
    </View>
    </View>
)
}

const styles = StyleSheet.create({
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

