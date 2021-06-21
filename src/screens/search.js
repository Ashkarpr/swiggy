
import React from 'react';
import { View,Text, TextInput,StyleSheet,Image,TouchableOpacity, ScrollView} from 'react-native';

const swiggy = ({navigation})=>{
  return(
    <ScrollView style={{backgroundColor:"lightgray"}}>
    <View  style={{ flex:1}}>
    <View style={{ justifyContent:"center",alignContent:"center",alignItems:"center",marginTop:2, backgroundColor:"white"}}>
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
        
       <View style={{paddingBottom:"15%",alignItems:"center", backgroundColor:"white" ,flexDirection:"row"}}>
        <View style={{marginLeft:"4.5%"}}>
         <TouchableOpacity
        onPress={() => {navigation.navigate('biriyani')}}>
          <Image style={{
             
              borderRadius:100,
             
            }}
            source={require('../assets/biriyani1.jpg')} > 
          </Image><Text style={{
            left:"15%",
            top:"10%"
          }}>Biriyani</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginLeft:"4%"}}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('Cake')}}>
          <Image style={{
            borderRadius:100,
            top:"15%",
            height:"57%"
          
            }} source={require('../assets/cakesanddeserts1.jpg')}>
          </Image><Text style={{
            left:"15%",
            top:"15%"
          }}>Cakes & {'\n'}Desserts</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginLeft:"6%"}}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('pizza')}}>
          <Image style={{
            borderRadius:100,
         
          
            }} source={require('../assets/pizza1.jpg')}>
          </Image><Text style={{
             left:"25%",
            top:"3%"
          }}>Pizzas</Text>
        </TouchableOpacity>
        </View>

          <View style={{marginLeft:"5%"}}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('North')}}>
        <Image style={{
           
            borderRadius:100, 
            top:"10%"
          
            
            }} source={require('../assets/northindianfoods1.jpg')}>
        </Image><Text style={{
            left:"27%",
            top:"14%"
          }}>North{'\n'}Indian</Text>
      </TouchableOpacity>
      </View>

        </View>
    </View>
    <View style={{marginTop:80, backgroundColor:"white",flex:1,paddingBottom:"200%"}}>

    </View>
    </ScrollView>
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