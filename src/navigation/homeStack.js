import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import EarnStack from '../screens/earnStack';

const Stack = createStackNavigator();



const HomeStack =({navigation}) => {
  return (
    <Stack.Navigator headerMode={false}>
    
      <Stack.Screen name="Home" component={HomeScreen}/>
      
     

    </Stack.Navigator>
    
  );
}


export default HomeStack;