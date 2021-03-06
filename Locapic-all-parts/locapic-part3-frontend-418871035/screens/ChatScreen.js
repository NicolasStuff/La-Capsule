import React, {useState, useEffect} from 'react';
import {View, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Button, ListItem, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import socketIOClient from "socket.io-client";
 
import {connect} from 'react-redux';

var socket = socketIOClient("http://192.168.1.15:3000");

function ChatScreen(props) {
  
  const [currentMessage, setCurrentMessage] = useState();
  const [listMessage, setListMessage] = useState([]);

  useEffect(() => { 
    socket.on('sendMessageToAll', (newMessageData)=> {
      setListMessage([...listMessage, newMessageData]);
    });
  }, [listMessage]) 

  var listMessageItem = listMessage.map((messageData, i)=>{
    
    var msg = messageData.message.replace(/:\)/g, '\u263A');
    msg = msg.replace(/:\(/g, '\u2639');
    msg = msg.replace(/:p/g, '\uD83D\uDE1B');

    var msg = msg.replace(/[a-z]*fuck[a-z]*/gi, '\u2022\u2022\u2022');

    return <ListItem 
      title={msg} 
      subtitle={messageData.pseudo}
    />
  });

  return (
    <View style={{flex:1}}>
       
        <ScrollView  style={{flex:1, marginTop: 15}}>
          
          {listMessageItem}

        </ScrollView >

        <KeyboardAvoidingView behavior="padding" enabled>
            <Input
                containerStyle = {{marginBottom: 5}}
                placeholder='Your message'
                onChangeText={(msg)=>setCurrentMessage(msg)}
                value={currentMessage}
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
                  socket.emit("sendMessage", {message: currentMessage, pseudo: props.pseudo} ); 
                  setCurrentMessage('');
                 }
                }
            />
        </KeyboardAvoidingView>
        
    </View>
  );
}


function mapStateToProps(state) {
  return { pseudo : state.pseudo }
}

export default connect(
  mapStateToProps, 
  null
)(ChatScreen);