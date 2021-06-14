import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/account';
import EarnStack from '../screens/earnStack';

const Stack = createStackNavigator();



const AccountStack =({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="AccountScreen"  headerMode={false}>
      <Stack.Screen name="Account" component={AccountScreen}  />
      <Stack.Screen name="Modal" component={EarnStack}  />


    </Stack.Navigator>
    
  );
}


export default AccountStack;