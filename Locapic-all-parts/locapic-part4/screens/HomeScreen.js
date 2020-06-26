import React, {useState} from 'react';
import { StyleSheet, ImageBackground, AsyncStorage, Text} from 'react-native';

import {Button, Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';

function HomeScreen({ navigation, onSubmitPseudo }) {

    const [pseudo, setPseudo] = useState('');
    const [pseudoBool, setpseudoBool] = useState(false)

    var pseudoLook = AsyncStorage.getItem("Name", 
    function(error, data){
      console.log(data);
      if(data !== ''){
        setPseudo(data)
        setpseudoBool(true)
      }
    })
  
    return (
    <ImageBackground source={require('../assets/home.jpg')} style={styles.container}>
        {pseudoBool == false
        ? <Input
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
    
        : <Text>Welcome back {pseudo}</Text>
        }
        <Button
            icon={
                <Icon
                name="arrow-right"
                size={20}
                color="#eb4d4b"
                />
            }
            title="Go to Map"
            type="solid"
            onPress={() => {onSubmitPseudo(pseudo); AsyncStorage.setItem("Name", pseudo); navigation.navigate('Map')}}
        />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function mapDispatchToProps(dispatch) {
    return {
      onSubmitPseudo: function(pseudo) { 
        dispatch( {type: 'savePseudo', pseudo: pseudo }) 
      }
    }
  }
  
  export default connect(
      null, 
      mapDispatchToProps
  )(HomeScreen);