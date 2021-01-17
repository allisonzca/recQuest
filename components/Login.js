import { disableExpoCliLogging } from "expo/build/logs/Logs";
import * as React from "react";

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


export default Login;