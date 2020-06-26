import React, {useState, useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Button, ListItem, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import socketIOClient from "socket.io-client";

var socket = socketIOClient("http://192.168.0.13:3000");


export default function ChatScreen() {

  const [currentMessage, setcurrentMessage] = useState("")
  const [listMessage , setlistMessage ] = useState([])

  useEffect(() => { 
    
    socket.on('sendMessageAll', (newMessage)=> {
      //console.log(newMessage)
      setlistMessage([...listMessage, newMessage]);
    });
    
  }, [listMessage]);

  //console.log(listMessage)
  //console.log(typeof(listMessage))

  var listAllMessage = listMessage.map((article,i) => {
    return(
      <ListItem 
      key={i}
      title={article} 
      subtitle="Alex"/>
    )})

  return (
    <View style={{flex:1}}>
      
        <ScrollView style={{flex:1, marginTop: 15}}>
        {listAllMessage}
        </ScrollView>

        <KeyboardAvoidingView behavior="padding" enabled>
            <Input
                containerStyle = {{marginBottom: 5}}
                placeholder='Your message'
                onChangeText={(val) => {setcurrentMessage(val)}}
            />
            <Button
                icon={
                    <Icon
                    name="envelope-o"
                    size={20}
                    color="#ffffff"
                    />
                } 
                title="Send"
                buttonStyle={{backgroundColor: "#eb4d4b"}}
                type="solid"
                onPress={()=> {
                  socket.emit("sendMessage", currentMessage);
                  setcurrentMessage("")
                }
              }
            />
        </KeyboardAvoidingView>
        
    </View>
  );
}
