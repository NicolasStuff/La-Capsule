import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1}}>
            <ImageBackground source={require('../assets/home.jpg')} style={styles.image}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Input
              placeholder='Username'
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='red'
                />
              }
            />
            <Button title="Go page A"
                onPress={() => navigation.navigate('Map')}
            />
            </View>
        </ImageBackground>
      </View>
    );
}
const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
