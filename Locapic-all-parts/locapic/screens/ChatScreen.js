import React from 'react';
import { View, Text, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function ChatScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <KeyboardAvoidingView>
                <View >
                    <Input
                      placeholder='Username'
                      style={styles.textInput}
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
            </KeyboardAvoidingView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    }
  });