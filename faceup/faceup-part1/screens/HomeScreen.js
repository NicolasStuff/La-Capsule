import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import {Button, Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function HomeScreen({navigation}) {

  return (
    <ImageBackground source={require("../assets/home.jpg")} style={styles.container}>
        <Input
            containerStyle = {{marginBottom: 25, width: '70%'}}
            inputStyle={{marginLeft: 10}}
            placeholder='John'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color="#eb4d4b"
                />
            }
            onChangeText={(val) => setPseudo(val)}
        />
            <Button
                title='Go to Gallery'
                onPress={() => {navigation.navigate('SnapScreen')}}/>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});