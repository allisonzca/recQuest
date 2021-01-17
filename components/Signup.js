import React, {Component, useState} from "react";
import {StyleSheet, Button, View, Text, Alert, TextInput, TouchableOpacity} from 'react-native';

export default function Signup(){

    
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[phone_number, setPhone_number] = useState('');
    return(<div>
        <View style={style.container}>
            <TextInput style={style.input}
                placeholder= 'Username'
                autoCapitalize= "none"
                placeholderTextColor='white'
                onChangeText={(username) => setUsername(username)}
            />
            <TextInput style={style.input}
                placeholder= 'Password'
                secureTextEntry={true}
                autoCapitalize= "none"
                placeholderTextColor='white'
                onChangeText={(password) => setPassword(password)}
            />
            <TextInput style={style.input}
                placeholder= 'Email'
                autoCapitalize= "none"
                placeholderTextColor='white'
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput style={style.input}
                placeholder= 'Phone Number'
                autoCapitalize= "none"
                placeholderTextColor='white'
                onChangeText={(phone_number) => setPhone_number(phone_number)}
            />

            <TouchableOpacity style={style.signUpBtn}> 
                <Text style={style.signUpText}>Submit!</Text> 
            </TouchableOpacity>

        </View>
    </div>

    );


    
}

const style = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#42A5F5',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    signUpBtn:
    {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        backgroundColor: "#FF1494",

    },
    signUpText: {
        marginTop: 12,
        height: 80,
        textAlignVertical: "center",
        

    }
  })