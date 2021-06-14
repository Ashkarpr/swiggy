//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput,Button,TouchableOpacity,Alert} from 'react-native';
import colors from '../config/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const Separator = () => (
    <View style={styles.separator} />
  );
 
  
const account = ({navigation }) => {
    return (
        <View style={styles.container}>
             <View style={{backgroundColor:"#dde2ec",width:"100%",top:-150,height:"75%",}}>
          <View style={{padding:10,top:"55%"}}>
            
            <Text style={{fontSize:80,fontWeight:"bold",color:"#d0d3d4",marginBottom:-40}}>LIVE</Text>
            <Text style={{fontSize:80,fontWeight:"bold",color:"#d0d3d4",marginBottom:-40}}>FOR</Text>
            <Text style={{fontSize:80,fontWeight:"bold",color:"#d0d3d4"}}>FOOD</Text> 
            <Image
             style={{height:120,width:110,marginLeft:"35%",top:-200,marginBottom:-50}}
             source={require('../assets/soup.png')}/>
            </View>
          </View>
          <View style={{marginTop:-130,padding:10}}>
          <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10}}>ACCOUNT</Text>
             <Text style={{color:colors.secondary,fontSize:12,marginBottom:10}}>Login/Create Account quickly to manage orders</Text>
             <Button
                title="LOGIN"
                color={colors.home}
                onPress={() => navigation.navigate('Modal')}/>
                 
                 <Separator/>
                 <TouchableOpacity
                 onPress={() => {navigation.navigate('Search')}}>
                     <View style={{flexDirection:"row",width:"100%"}}>
                     <MaterialCommunityIcons name="ticket-percent-outline" size={20}
                      color="#4a4f51" style={{ }} /> 
                      <Text style={{left:20}}>Offers</Text>
                      <MaterialCommunityIcons name="chevron-right"size={20}
                      color="#4a4f51" style={{left:300 }} /> 
                     </View>    
                 </TouchableOpacity>
                 <Separator/>
                 <TouchableOpacity
                 onPress={() => {navigation.navigate('Modal')}}>
                     <View style={{flexDirection:"row",marginBottom:-10}}>
                     <AntDesign name="mail" size={20}
                      color="#4a4f51" style={{ }} /> 
                      <View style={{flexDirection:"column"}}>
                      <Text style={{left:20,top:-10}}>Send Feedback</Text>
                      <Text style={{left:20,fontSize:10,top:-10,color:colors.secondary}}>App version 3.68.2(972)</Text>
                      </View>
                      <MaterialCommunityIcons name="chevron-right"size={20}
                      color="#4a4f51" style={{left:230 }} /> 
                     </View>    
                 </TouchableOpacity>

          </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    separator: {
        marginVertical: 20,

        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
});

//make this component available to the app
export default account;
