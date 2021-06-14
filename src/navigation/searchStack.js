import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/search';

const Stack = createStackNavigator();



const SearchStack =({navigation}) => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Search" component={SearchScreen}/>

    </Stack.Navigator>
    
  );
}


export default SearchStack;