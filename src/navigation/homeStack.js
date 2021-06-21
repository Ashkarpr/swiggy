import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import Map from '../screens/map';


const Stack = createStackNavigator();



const HomeStack =({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" headerMode={false}>
    
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Map" component={Map}/>
     

    </Stack.Navigator>
    
  );
}


export default HomeStack;