import React from 'react';
import { View, Text, Button } from 'react-native';

export default function MapScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e67e22'}}>
        <Text > MapScreen </Text>
        <Button title="Go page A"
            onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    );
}
