import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,Text,Image} from 'react-native'
import HomeStack from '../screens/home'
import SearchStack from '../screens/search';
import CartStack from '../screens/cart';
import AccountStack from '../screens/account';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return <View><Text>HomeSCreen</Text></View>
}


const BottomTabNavigation = () => {
  return (
      <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="-" component={HomeStack} options={{
        tabBarIcon: ({focused,color,size})=>(
          <Image 
          source={
            focused
            ?require('../assets/swiggy.png')
            : require('../assets/swiggy.png')
          }
          style={{
            width:45,
            height:45,
            top:11
          }}
          />
            ),
        }}
        />
      <Tab.Screen name="Search" component={SearchStack} options={{
        tabBarLabel:"Search",
        tabBarIcon: ({focused,color,size})=>(
          <AntDesign name="search1" size={25} color="#4a4f51" style={{}} />
         )
      }} />
      <Tab.Screen name="cart" component={CartStack} options={{
        tabBarLabel:"cart",
        tabBarIcon: ({focused,color,size})=>(
          <Feather name="shopping-bag" size={25} color="#4a4f51" style={{}} />
          )
      }} /> 

      <Tab.Screen name="Account" component={AccountStack} options={{
        tabBarLabel:"Account",
        tabBarIcon: ({focused,color,size})=>(
          <MaterialCommunityIcons name="account" size={25} color="#4a4f51" style={{}} />
         )
      }} /> 
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigation;