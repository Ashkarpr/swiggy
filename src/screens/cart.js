//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button,TouchableOpacity } from 'react-native';
import colors from '../config/color';


// create a component
const cart = ({navigation}) => {
    return (
        <View style={styles.container}>
            
             <Image
             style={{height:300,width:"100%",top:-50,marginBottom:-50}}
             source={require('../assets/chef.png')}/>
            <Text style={{fontWeight:"bold",fontSize:17,color:colors.primary,marginBottom:10}}>GOOD FOOD IS ALWAYS COOKING</Text>
            <Text style={{color:colors.secondary}}>Your cart is empty.</Text>
            <Text style={{color:colors.secondary,marginBottom:20}}>add somthing from the menu</Text>
            <TouchableOpacity
             onPress={() => navigation.navigate('Home')}>
                 <View style={{fontWeight:"bold", borderWidth:2,height:35,width:240,borderRadius:5,justifyContent:"center",alignItems:"center",
                borderColor:colors.home,marginTop:10}}>
                     <Text style={{fontWeight:"bold",color:colors.home}}> BROWSE RESTAURANTS</Text>
                 </View>
            </TouchableOpacity>
         
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:50
       
    },
});

//make this component available to the app
export default cart;
