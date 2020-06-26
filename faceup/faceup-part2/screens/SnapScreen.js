import React, { useState, useEffect, useRef} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { Camera } from 'expo-camera';
import { withNavigationFocus } from 'react-navigation';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';
import {Button, Overlay} from 'react-native-elements';

import {connect} from 'react-redux';

function SnapScreen(props) {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.torch);
  
  const [picture, setPicture] = useState([])

  var camera = useRef(null);
 
  const [visible, setVisible] = useState(false);

  async function pictureTaken (photo){

    var data = new FormData();
    console.log(photo)

    data.append('avatar', {
      uri: photo.uri,
      type: 'image/jpeg',
      name: 'avatar.jpg',
    });

    //requette vers le backend
    var saveBack = await fetch("http://192.168.43.43:3000/upload", {
      method: 'post',
      //envoie de data (ligne 30)
      body: data,
    })

      //reponse du fetch
    var savePicture = await saveBack.json() 
    console.log("result du front", savePicture.fileUploaded.secure_url)
    var mypicture = savePicture.fileUploaded.secure_url
    props.onSubmitPicture(mypicture)
    //setPicture([...picture, savePicture.fileUploaded.secure_url])
  }

  useEffect(() => {  
    (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
  }, []);
  
  var cameraDisplay;
  if(hasPermission && props.isFocused){
    cameraDisplay = <Camera 
      style={{ flex: 1 }}
      type={type}
      flashMode={flash}
      ref={ref => (camera = ref)}
    >
       <View    
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
        }}>
          <TouchableOpacity
            style={{
            
                alignSelf: 'flex-end',
                alignItems: 'center',
            }}
            onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
            }}
          >
           <IconIonic
            name="md-reverse-camera"
            size={20}
            color="#ffffff"
            /><Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>

           <TouchableOpacity
            style={{
            
                alignSelf: 'flex-end',
                alignItems: 'center',
            }}
            onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.torch
                    ? Camera.Constants.FlashMode.off
                    : Camera.Constants.FlashMode.torch
                );
              }}
            >
            <IconFontAwesome
            name="flash"
            size={20}
            color="#ffffff"
            /><Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flash </Text>
           </TouchableOpacity>

        </View>
    </Camera>
  } else {
    cameraDisplay = <View style={{ flex: 1 }}></View>
  }

  return (
    <View style={{flex: 1}}>
        <Overlay isVisible={visible}  width="auto" height="auto">
            <Text>Loading</Text>
        </Overlay>
        
        {cameraDisplay}
        <Button
            icon={
                <IconFontAwesome
                name="save"
                size={20}
                color="#ffffff"
                />
            } 
            title="Snap"
            buttonStyle={{backgroundColor: "#009788"}}
            type="solid"
            onPress={async () => {
                setVisible(true);
                if (camera) {
                    let photo = await camera.takePictureAsync({quality : 0.7});
                    pictureTaken(photo)
                    setVisible(false);
                }
            }}
        />
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitPicture: function(picture) { 
      dispatch( {type: 'savePicture', picture: picture }) 
    }
  }
}

var connection = connect(
    null, 
    mapDispatchToProps
)(SnapScreen);

export default withNavigationFocus(connection);