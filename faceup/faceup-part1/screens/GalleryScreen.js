import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text, Badge } from 'react-native-elements';

export default function GalleryScreen() {
  return (
      <ScrollView>
        <View style={styles.container} >
          <Text h1>John's gallery</Text>
          <Image source={require("../assets/picture-1.jpg")} style={styles.image}></Image>
          <View style={styles.badge}>
            <Badge value={<Text >homme</Text>} />
            <Badge value={<Text >70 ans</Text>} />
            <Badge value={<Text >barbe</Text>} />
            <Badge value={<Text >joyeux !</Text>} />
            <Badge value={<Text >cheveux gris</Text>} />
          </View>
          <Image source={require("../assets/picture-2.jpg")} style={styles.image}></Image>
          <View style={styles.badge}>
            <Badge value={<Text >femme</Text>} />
            <Badge value={<Text >lenette</Text>} />
            <Badge value={<Text >31 ans</Text>} />
            <Badge value={<Text >joyeux !</Text>} />
            <Badge value={<Text >cheveux chatin</Text>} />
          </View>
          <Image source={require("../assets/picture-3.jpg")} style={styles.image}></Image>
          <View style={styles.badge}>
            <Badge value={<Text >femme</Text>} />
            <Badge value={<Text >lenette</Text>} />
            <Badge value={<Text >31 ans</Text>} />
            <Badge value={<Text >joyeux !</Text>} />
            <Badge value={<Text >cheveux chatin</Text>} />
          </View>

        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
      width: "100%",
      height: 200,
  },
  badge: {
      marginTop: 10,
  },
});