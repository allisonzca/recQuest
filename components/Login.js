import { disableExpoCliLogging } from "expo/build/logs/Logs";
import React, {Component, useState} from "react";
import {StyleSheet, Button, View, Text, Alert, TextInput} from 'react-native';
import props from 'prop-types';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     


    return(
        <View>
            <Text> Welcome </Text>
            <TextInput
                placeholder = "Email"
                placeholderTextColor = "#003f5c"
                onChangeText={(email) => setEmail(email)}

            />
            <TextInput
                placeholder = "Password"
                placeholderTextColor = "#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}

            />
            <Button>
                title = "Sign In"
                onPress={() => this.onLogin.bind(t)}
            </Button>
        </View>  
        
        );

    
   
}
/* 
A Quest is a list of Tasks
- given by a Use
- completed by a User

A Task 

async function getData(endpoint) {
    const data = React.useCallback(() => {
        try {
            var response = await fetch('http://asdasdasdasd' + endpoint);
            response = response.json();
            return response;
        } catch (e) {
            console.log(e);
        }
    });
}
*/
/*
  const getNotes = React.useCallback(() => {
    fetch('http://localIPaddress:3001/notes')
      .then((response) => response.json())
      .then((json) => {
        setNotes(json.notes)
      })
      .catch(error => {
        console.log(error)
      });
  }, [])
  React.useEffect(() => {
    getNotes()
  }, [getNotes]);

*/