import { disableExpoCliLogging } from "expo/build/logs/Logs";
import React, {Component, useState} from "react";
import {StyleSheet, Button, View, Text, Alert, TextInput, TouchableOpacity} from 'react-native';
import Signup from "./Signup";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <View style={style.inputView}>
    
            <TextInput style={style.textInput}
                placeholder = "Email"
                placeholderTextColor = "#003f5c"
                onChangeText={(email) => setEmail(email)}

            />
        </View>

        <View style={style.inputView}>
            <TextInput style={style.textInput}
                placeholder = "Password"
                placeholderTextColor = "#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}

            />
            
        </View>  
        <View>

            <TouchableOpacity style={style.loginBtn}> 
                <Text style={style.loginText}>Login</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={style.loginBtn}> 
                <Text style={style.loginText}>Create an account</Text> 
                onPress={()=> Alert.signup('')}
            </TouchableOpacity>
            <TouchableOpacity> 
                <Text style={style.forgot_button}>Forgot Password?</Text> 
            </TouchableOpacity>
        </View>

        </div>
        
        
        );

    
   
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        marginLeft: 30,
        alignItems: "center",
    },
    textInput: {

        flex: 1,
        padding: 10,
        marginLeft: 40,
    },

    forgot_button: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 50,

    },
    loginBtn:
    {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 20,
        backgroundColor: "#FF1494",

    },
    loginText: {
        marginTop: 10,
        height: 80,
        textAlignVertical: "center",
        

    }


})
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