import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/search';
import biriyani from '../screens/biriyani';
import pizza from '../screens/pizza';
import Northindian from '../screens/northindian';
import Cake from '../screens/cakes&desserts';
import Map from '../screens/map';
const Stack = createStackNavigator();



const SearchStack =({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="SearchScreen"  headerMode={false}>
      <Stack.Screen name="Search" component={SearchScreen}/>
      <Stack.Screen name="biriyani" component={biriyani}/>
      <Stack.Screen name="pizza" component={pizza}/>
      <Stack.Screen name="North" component={Northindian}/>
      <Stack.Screen name="Cake" component={Cake}/>
      <Stack.Screen name="Map" component={Map}/>


    </Stack.Navigator>
    
  );
}


export default SearchStack;