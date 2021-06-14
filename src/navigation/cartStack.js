import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/cart';

const Stack = createStackNavigator();



const CartStack =({navigation}) => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Cart" component={CartScreen}/>

    </Stack.Navigator>
    
  );
}


export default CartStack;