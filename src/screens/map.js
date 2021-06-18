//import liraries
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const map = () => {
    return (
        <View style={styles.container}>
            <MapView
      
       style={styles.map}
       region={{
         latitude: 76.6548,
         longitude: 76.653145,
         latitudeDelta: 0.04,
         longitudeDelta: 0.05,
       }}>
         </MapView>        
         </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height:"100%",
        width:"100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
});

//make this component available to the app
export default map;

