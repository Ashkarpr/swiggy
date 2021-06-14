
import React from 'react';
import { View,Text, TextInput,StyleSheet,Image,TouchableOpacity, ScrollView} from 'react-native';

const swiggy = ({navigation})=>{
  return(
    <ScrollView>
    <View  style={{ flex:1, backgroundColor:"lightgray"}}>
    <View style={{ marginTop:2, backgroundColor:"white"}}>
      <TextInput style={styles.search}
        placeholder="   Search for restaurents and food">
      </TextInput>
      </View>
      <Text style={{
        fontWeight:"bold",
        paddingTop:20,
        fontSize:20,
        paddingBottom:20,
        backgroundColor:"white"
        }}>
       {'     '} Popular Cuisines
      </Text>
        
       <View style={{paddingBottom:70,alignItems:"center", backgroundColor:"white" ,flexDirection:"row"}}>
         <TouchableOpacity
        onPress={() => {navigation.navigate('biriyani')}}>
          <Image style={{
              resizeMode:"contain",
              borderRadius:100,
              marginLeft:30,
              width:60,
              height:60
            }}
            source={require('../assets/biriyani1.jpg')} > 
          </Image><Text style={{
            marginLeft:38
          }}>Biriyani</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {navigation.navigate('Cake')}}>
          <Image style={{marginLeft:30,
            borderRadius:100,width:60,
            height:60,marginTop:20
            }} source={require('../assets/cakesanddeserts1.jpg')}>
          </Image><Text style={{
            marginLeft:36,marginTop:1
          }}>Cakes & {'\n'}Desserts</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {navigation.navigate('pizza')}}>
          <Image style={{marginLeft:20, resizeMode:"contain",
            borderRadius:100,width:60,
            height:60
            }} source={require('../assets/pizza1.jpg')}>
          </Image><Text style={{
            marginLeft:32
          }}>Pizzas</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
        onPress={() => {navigation.navigate('North')}}>
        <Image style={{marginLeft:20,
            borderRadius:100, width:60,
            height:60,marginTop:20
            }} source={require('../assets/northindianfoods1.jpg')}>
        </Image><Text style={{
            marginLeft:35
          }}>North{'\n'}Indian</Text>
      </TouchableOpacity>
        </View>
       <View style={{
            flex:1,marginTop:10,backgroundColor:"white"}}>            
       </View>
 
    </View></ScrollView>
  )
}

const styles =  StyleSheet.create
(
{
  search:
  {
    marginTop:15,
    paddingTop:13,
    alignSelf:"center",
   borderWidth:1,
   width:"95%",
   borderRadius:3,
  textAlign:"left",
   fontWeight:"600",
   borderColor:"gray",
   fontSize:20,
  }
}
);
export default swiggy;