import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

import {Button, Overlay, ListItem, Input} from 'react-native-elements';

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MapScreen() {

  const [currentLatitude, setcurrentLatitude] = useState(null)
  const [currentLongitude, setcurrentLongitude] = useState(null)
  var [addPOI , setaddPOI ] = useState(false)
  const [listPOI , setlistPOI ] = useState([])

  function PoiAdd() {
    setaddPOI(!addPOI)
  }
  var listMarker = listPOI.map((Maps,i) => (
    <Marker
        coordinate={{latitude: Maps.latitude, longitude: Maps.longitude}}
        title="Hello"
        description="I am here"
        pinColor="blue"
    />
    ))
  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        
        Location.watchPositionAsync({distanceInterval: 2},
          (location) => {
            console.log(location);
            
            setcurrentLatitude(location.coords.latitude)
            setcurrentLongitude(location.coords.longitude)

          }
        );
      }
    }
    askPermissions();
  }, []);
  if(currentLatitude === null && currentLongitude === null) {
    return(
      <View></View>
    )
  } else {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

        onPress={e => {setlistPOI([...listPOI, e.nativeEvent.coordinate]), console.log(listPOI)}}
        

        >
          <Marker
            coordinate={{latitude:currentLatitude, longitude: currentLongitude}}
            title="Hello"
            description="I am here"
          />
         
          {listMarker}
        
      </MapView>

      <Overlay isVisible={addPOI} onBackdropPress={PoiAdd}>

        <Input
            containerStyle = {{marginBottom: 5}}
            placeholder='Titre'
        />
        <Input
            containerStyle = {{marginBottom: 5}}
            placeholder='Description'
        />
        <Button
          icon={
              <Icon
              name="location-on"
              size={20}
              color="#ffffff"
              />
          } 
          title="Add POI"
          buttonStyle={{backgroundColor: "#eb4d4b"}}
          type="solid" 
          onPress={() => PoiAdd()}
        />

      </Overlay>
      
      <Button
          icon={
              <Icon
              name="location-on"
              size={20}
              color="#ffffff"
              />
          } 
          title="Add POI"
          buttonStyle={{backgroundColor: "#eb4d4b"}}
          type="solid" 
          onPress={() => PoiAdd()}
        />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  mapStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  ButtonStyle: {
    alignItems: "flex-end",
  }
});
