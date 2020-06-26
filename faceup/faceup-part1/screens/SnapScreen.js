import { StyleSheet, Text, View } from 'react-native';
import {Button, Input} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'; 
import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';


export default function SnapScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.torch);

    
    var camera = useRef(null);
    
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
    
    if (hasPermission) {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type} flashMode={flash}>
            <View style={styles.container}>
                <Button
                  icon={
                    <Ionicons name="md-reverse-camera" size={24} color="black" />
                  }
                  type="clear"
                  title="Flip"
                  onPress={() => {
                    setType(
                      type == Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                />

                <Button
                  icon={
                    <Ionicons name="md-flash" size={24} color="black" />
                  }
                  title="flash"
                  type="clear"
                  onPress={() => {
                    setFlash(
                        flash == Camera.Constants.FlashMode.torch
                        ? Camera.Constants.FlashMode.off
                        : Camera.Constants.FlashMode.torch
                    );
                  }}
                />
            </View>
            <Button
            icon={
                <Ionicons name="ios-save" size={24} color="black" />
              }
            title='Snap'
            onPress={async () => {
                if (camera) {
                  let photo = await camera.takePictureAsync();   
                }
               }}/>
        </Camera>
      </View>
    );
  }
  else {
      return <View style={{ flex: 1 }}/>;
    }
}

const styles = StyleSheet.create({
  containerPrincipale: {
    flex: 1,
  },
  container: {
    flex: 1,

    alignItems: "flex-end",
    flexDirection: "row",
  },
  logos: {
    alignItems: "center"
  }
});