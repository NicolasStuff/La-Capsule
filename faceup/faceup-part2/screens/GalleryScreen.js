import React from 'react';
import {ScrollView, View} from 'react-native';

import {Card, Badge, Text} from 'react-native-elements';
import {connect} from 'react-redux';

 function GalleryScreen(props) {
  console.log('RECEPTION DE GALLERY',props.NewPicture)
  return (
    <ScrollView style={{marginTop: 25}}>
        <Text h4 style={{textAlign: 'center'}}>Nicolas's Gallery</Text>
        {props.NewPicture.map((picture,i) => (
        <Card 
            image={{ uri: picture }}>
            <Badge status="success" value="homme"/>
            <Badge status="success" value="70 ans"/>
            <Badge status="success" value="barbe"/>
            <Badge status="success" value="joyeux !"/>
            <Badge status="success" value="cheveux gris"/>
        </Card>
        ))} 
    </ScrollView>
  );
}

function mapStateToProps(state) {
    console.log("reception",state);
    return { 
        NewPicture: state.pictureStore 
    }
  }
    
  export default connect(
    mapStateToProps,
    null
  )(GalleryScreen);