import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/search';
import biriyani from '../screens/biriyani';
import pizza from '../screens/pizza';
import Northindian from '../screens/northindian';
import Cake from '../screens/cakes&desserts';
import Veg from '../screens/veg';
import nonVeg from '../screens/nonVeg';


const Stack = createStackNavigator();



const SearchStack =({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="SearchScreen"  headerMode={false}>
      <Stack.Screen name="Search" component={SearchScreen}/>
      <Stack.Screen name="biriyani" component={biriyani}/>
      <Stack.Screen name="pizza" component={pizza}/>
      <Stack.Screen name="North" component={Northindian}/>
      <Stack.Screen name="Cake" component={Cake}/>
      <Stack.Screen name="Veg" component={Veg}/>
      <Stack.Screen name="nonVeg" component={nonVeg}/>




    </Stack.Navigator>
    
  );
}


export default SearchStack;