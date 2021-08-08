import React, { PropTypes, useState } from 'react'
import { Button, View , StyleSheet} from 'react-native'
import {Grid} from '@material-ui/core'
import { HashRouter as Router, Redirect, Switch, Route, Link, BrowserRouter, useHistory, withRouter} from 'react-router-dom'
import App from '../App';
import Landing_User from './Landing_User';
import Landing_Business from './Landing_Business';


export default function Home( {navigation}) {
    return (
  
    <View backgroundColor = "#000000">

      <div md='4'>
      <h1 style ={{
        width:'center',
        flex:1, 
        justifyContent:'center', 
          fontFamily:'Comfortaa', 
        alignContent:'center', 
        display:'flex', 
        alignItems:'center',
        width: '312px', 
        height: '300px',  
        fontWeight: 'bold', 
        fontSize: 36, 
        lineHeight: 20}}>Welcome</h1>

      <p  style ={{ justifyContent:'center', fontFamily:'Roboto', alignContent:'center', display:'flex', alignItems:'center',
     width: '240px', height: '400px', fontWeight: 'bold', fontSize: 18, width: 'center', flex:1, lineHeight: 90}}>Continue as a ...</p>
      </div>

      <View style ={styles.button_1}>
       <Button  style ={styles.button_1}
           title = "User"
           onPress = {() => navigation.navigate(Landing_User)}/>
      </View>
      <Grid container spacing={3} >
        <Grid style ={{textAlign: 'center',width: 'center', display: 'flex', justifyContent:'center'}}/></Grid>

      <View style = {styles.button_2}>
          <Button
          title = "Business"
          onPress = {() => navigation.navigate(Landing_Business)}/>
    
      </View>

      </View>
      
  
    );
    
}

const styles = StyleSheet.create({
    button_1: {
        position: 'absolute',
            
        width: 150,
        height: 52,
        top: 680,
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
    
        color: '#FFFFFF'
    },
    button_2: {
        position: 'absolute',
        
        left: 30.54,
        right: 30.53,
        top: 680,
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
})