import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/account';

const Stack = createStackNavigator();



const AccountStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen}/>

    </Stack.Navigator>
    
  );
}


export default AccountStack;