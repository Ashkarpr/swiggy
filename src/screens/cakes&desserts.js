import React from "react";
import { View,Text, TextInput,StyleSheet,Image,TouchableOpacity, ScrollView,Button} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const cakesNDdesserts = () =>
{
    return (
        
      <View style={{backgroundColor:"#f7f2f2",}}>
       <View style={{backgroundColor:"white",}}>
        <TextInput style={styles.search}
          placeholder="   Search for restaurents and food">
       </TextInput>

        {/* starting resand dishes...................................... */}

      <View style={{flexDirection: "row",}}>
        <TouchableOpacity>
          <Text style={styles.hotels}>
            Restaurents
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={styles.dishes}>
             Dishes
          </Text>
        </TouchableOpacity>
     </View>   
    </View>

    {/* taping names like veg, nin-veg etc................. */}
      <ScrollView horizontal = {true} style={{backgroundColor:"white",height:"12%", marginTop: 1,flexDirection:"row"}}>
        <TouchableOpacity >
          <Text style={styles.veg} >
            Veg
          </Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.nonveg} >
            Non-Veg
          </Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.btwn} >
            Rs 100-Rs 250
          </Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style= {styles.rs} >
            Rs 250+
          </Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.lesthan} >
            Less than 30mins
          </Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style= {styles.rated} >
            Rated 4+
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* pictures started............................ ..........................................................*/}

      <ScrollView >
      <ScrollView style={{marginBottom:"100%",marginTop:11}}><TouchableOpacity style={{justifyContent:"center"}}>
        <View style={{backgroundColor:"white", marginTop:11, marginTop:"-29%"}}>
           <Text style={{top:"55%",left:"40.5%",color:"gray",fontSize:12}} >Bakery,Desserts,Fast Food, Sweets{'\n'}
          Vytila | 5.4 kms</Text>
          <Entypo name="star" size={17} color="gray" style={{left:"40.5%",top:"60%"}}></Entypo>
           <Text style={{top:"55%",left:"45%",color:"gray",fontSize:12}}>{' '}4.4   23 mins     {'    '}180 for two</Text>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"49.5%",top:"50.2%"}}></Entypo>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"63%",top:"45%"}}></Entypo>
           <FontAwesome name="rupee" size={13} color="gray" style={{left:"68%",top:"40%"}}></FontAwesome>
       
       <View style={{flexDirection:"row",}}>
      
          <Image style={{borderRadius:10,height:160,width:130, marginTop:10,marginBottom:20, marginLeft:18}}source={require('../assets/1cake.jpg')}></Image>
         <View style={{borderBottomWidth:.5,bottom:50,left:10,borderBottomColor:"gray"}}>
          <Text style={{top:"40%",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Supreme Bakers {'                           '}{'\n'}
          </Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"85%"}}></MaterialCommunityIcons>
          <Text style={{top:"78%",fontSize:12, color:"gray", left:18}}>50% off upto     100</Text>
          <FontAwesome name="rupee" size={13} color="gray" style={{left:"42%",top:"71%"}}></FontAwesome>
          </View>
       </View>
       <TouchableOpacity style={{width:100,marginLeft:32,marginTop:"-10%"}}>
       <Text style={{backgroundColor:"white",borderWidth:1,borderColor:"lightgray",fontWeight:"bold",fontSize:20,paddingBottom:3,paddingTop:3,color:"darkorange", textAlign:"center",borderRadius:5}}>50% OFF</Text>
          </TouchableOpacity>
      </View></TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"white"}} >
        <View style={{top:"-40%", marginBottom:"-20%"}}>
           <Text style={{top:"55%",left:"40.5%",color:"gray",fontSize:12}} >Bakery,Desserts,Fast Food, Sweets{'\n'}
          Vytila | 5.4 kms</Text>
          <Entypo name="star" size={17} color="gray" style={{left:"40.5%",top:"60%"}}></Entypo>
           <Text style={{top:"55%",left:"45%",color:"gray",fontSize:12}}>{' '}4.4   23 mins     {'    '}180 for two</Text>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"49.5%",top:"50.2%"}}></Entypo>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"63%",top:"45%"}}></Entypo>
           <FontAwesome name="rupee" size={13} color="gray" style={{left:"68%",top:"40%"}}></FontAwesome>
       

       
       <View style={{flexDirection:"row",}}>
      
          <Image style={{borderRadius:10,height:160,width:130, marginTop:10,marginBottom:20, marginLeft:18}}source={require('../assets/02cake.jpg')}></Image>
         <View style={{borderBottomWidth:.5,bottom:50,left:10,borderBottomColor:"gray"}}>
          <Text style={{top:76,fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Lulu Hyper Market {'                           '}{'\n'}
          </Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"85%"}}></MaterialCommunityIcons>
          <Text style={{top:"78%",fontSize:12, color:"gray", left:18}}>50% off upto     100</Text>
          <FontAwesome name="rupee" size={13} color="gray" style={{left:"40%",top:"70.6%"}}></FontAwesome>
          </View>
       </View>
       <TouchableOpacity style={{width:100,marginLeft:32,marginTop:"-10%"}}>
       <Text style={{backgroundColor:"white",borderWidth:1,borderColor:"lightgray",fontWeight:"bold",fontSize:20,paddingBottom:3,paddingTop:3,color:"darkorange", textAlign:"center",borderRadius:5}}>50% OFF</Text>
          </TouchableOpacity>
      </View></TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"white"}} >
        <View style={{top:"-40%", marginBottom:"-20%"}}>
           <Text style={{top:"55%",left:"40.5%",color:"gray",fontSize:12}} >Bakery,Desserts,Fast Food, Sweets{'\n'}
          Vytila | 5.4 kms</Text>
          <Entypo name="star" size={17} color="gray" style={{left:"40.5%",top:"60%"}}></Entypo>
           <Text style={{top:"55%",left:"45%",color:"gray",fontSize:12}}>{' '}4.4   23 mins     {'    '}180 for two</Text>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"49.5%",top:"50.2%"}}></Entypo>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"63%",top:"45%"}}></Entypo>
           <FontAwesome name="rupee" size={13} color="gray" style={{left:"68%",top:"40%"}}></FontAwesome>
       
       <View style={{flexDirection:"row",}}>
      
          <Image style={{borderRadius:10,height:160,width:130, marginTop:10,marginBottom:20, marginLeft:18}}source={require('../assets/3cake.jpg')}></Image>
         <View style={{borderBottomWidth:.5,bottom:50,left:10,borderBottomColor:"gray"}}>
          <Text style={{top:76,fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Zeuger Sugar Free {'                           '}{'\n'}
          </Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"85%"}}></MaterialCommunityIcons>
          <Text style={{top:"78%",fontSize:12, color:"gray", left:18}}>50% off upto     100</Text>
          <FontAwesome name="rupee" size={13} color="gray" style={{left:"40%",top:"70.6%"}}></FontAwesome>
          </View>
       </View>
       <TouchableOpacity style={{width:100,marginLeft:32,marginTop:"-10%"}}>
       <Text style={{backgroundColor:"white",borderWidth:1,borderColor:"lightgray",fontWeight:"bold",fontSize:20,paddingBottom:3,paddingTop:3,color:"darkorange", textAlign:"center",borderRadius:5}}>50% OFF</Text>
          </TouchableOpacity>
      </View></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"white"}} >
        <View style={{top:"-40%", marginBottom:"-20%"}}>
           <Text style={{top:"55%",left:"40.5%",color:"gray",fontSize:12}} >Bakery,Desserts,Fast Food, Sweets{'\n'}
          Vytila | 5.4 kms</Text>
          <Entypo name="star" size={17} color="gray" style={{left:"40.5%",top:"60%"}}></Entypo>
           <Text style={{top:"55%",left:"45%",color:"gray",fontSize:12}}>{' '}4.4   23 mins     {'    '}180 for two</Text>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"49.5%",top:"50.2%"}}></Entypo>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"63%",top:"45%"}}></Entypo>
           <FontAwesome name="rupee" size={13} color="gray" style={{left:"68%",top:"40%"}}></FontAwesome>
       
       <View style={{flexDirection:"row",}}>
      
          <Image style={{borderRadius:10,height:160,width:130, marginTop:10,marginBottom:20, marginLeft:18}}source={require('../assets/4cake.jpg')}></Image>
         <View style={{borderBottomWidth:.5,bottom:50,left:10,borderBottomColor:"gray"}}>
          <Text style={{top:76,fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Supreme Bakers {'                           '}{'\n'}
          </Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"85%"}}></MaterialCommunityIcons>
          <Text style={{top:"78%",fontSize:12, color:"gray", left:18}}>50% off upto     100</Text>
          <FontAwesome name="rupee" size={13} color="gray" style={{left:"42%",top:"70.6%"}}></FontAwesome>
          </View>
       </View>
       <TouchableOpacity style={{width:100,marginLeft:32,marginTop:"-10%"}}>
       <Text style={{backgroundColor:"white",borderWidth:1,borderColor:"lightgray",fontWeight:"bold",fontSize:20,paddingBottom:3,paddingTop:3,color:"darkorange", textAlign:"center",borderRadius:5}}>50% OFF</Text>
          </TouchableOpacity>
      </View></TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"white"}} >
        <View style={{top:"-40%", marginBottom:"-20%"}}>
           <Text style={{top:"55%",left:"40.5%",color:"gray",fontSize:12}} >Bakery,Desserts,Fast Food, Sweets{'\n'}
          Vytila | 5.4 kms</Text>
          <Entypo name="star" size={17} color="gray" style={{left:"40.5%",top:"60%"}}></Entypo>
           <Text style={{top:"55%",left:"45%",color:"gray",fontSize:12}}>{' '}4.4   23 mins     {'    '}180 for two</Text>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"49.5%",top:"50.2%"}}></Entypo>
           <Entypo name="dot-single" size={15} color="gray" style={{left:"63%",top:"45%"}}></Entypo>
           <FontAwesome name="rupee" size={13} color="gray" style={{left:"68%",top:"40%"}}></FontAwesome>
       
       <View style={{flexDirection:"row",}}>
      
          <Image style={{borderRadius:10,height:160,width:130, marginTop:10,marginBottom:20, marginLeft:18}}source={require('../assets/5cake.jpg')}></Image>
         <View style={{borderBottomWidth:.5,bottom:50,left:10,borderBottomColor:"gray"}}>
          <Text style={{top:76,fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Supreme Bakers {'                           '}{'\n'}
          </Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"85%"}}></MaterialCommunityIcons>
          <Text style={{top:"78%",fontSize:12, color:"gray", left:18}}>50% off upto     100</Text>
          <FontAwesome name="rupee" size={13} color="gray" style={{left:"42%",top:"70.6%"}}></FontAwesome>
          </View>
       </View>
       <TouchableOpacity style={{width:100,marginLeft:32,marginTop:"-10%"}}>
       <Text style={{backgroundColor:"white",borderWidth:1,borderColor:"lightgray",fontWeight:"bold",fontSize:20,paddingBottom:3,paddingTop:3,color:"darkorange", textAlign:"center",borderRadius:5}}>50% OFF</Text>
          </TouchableOpacity>
      </View></TouchableOpacity>
      </ScrollView>
      </ScrollView>
     
    </View>
   
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
   borderColor:"lightgray",
   fontSize:20,
  },

  hotels:
  {
    padding:15, 
     paddingTop:8,
     paddingBottom:8,
      marginLeft:18,
      marginTop:30, 
     marginBottom:30,
     borderWidth:1, 
     borderRadius:20, 
     borderColor:"lightgray",
     fontWeight:"bold",
     fontSize:13,
     textAlign:"center",
      width:"90%",
      backgroundColor:"black",
      color:"white"
     
 },
 veg:
 {
  borderWidth:1,
  marginTop:20,
  width:40,
  height:30,
  borderRadius:5,
  padding:6,
  paddingLeft:8,
  marginLeft:20,
  borderColor:"lightgray",
  fontWeight:"300"
  },
 nonveg:
 {
  borderWidth:1,
  marginTop:20,
  width:70,
  height:30,
  borderRadius:5,
  padding:6,
  paddingLeft:8,
  marginLeft:10,
  fontWeight:"300",
  borderColor:"lightgray"
  },
  btwn:
  {
    borderWidth:1,
    marginTop:20,
    width:110,
    height:30,
    borderRadius:5,
    padding:6,
    paddingLeft:12,
    marginLeft:10,
    fontWeight:"300",
    borderColor:"lightgray"
    },
  dishes:
  {                    
      padding:15, 
      paddingTop:8,
      paddingBottom:8,
       marginLeft:18,
       marginTop:30, 
      marginBottom:30,
      borderWidth:1, 
      borderRadius:20, 
      borderColor:"gray",
      fontWeight:"bold",
      fontSize:13,
      textAlign:"center",
       width:"90%",
     
        
    },
    rs:
    {
      borderWidth:1,
      marginLeft:10,
      marginTop:20,
      height:30,
      width:63,
      borderRadius:5,
      fontWeight:"300",
      textAlign:"center",
      paddingTop:5,
      paddingLeft:3,
      borderColor:"lightgray"
      },
    lesthan:
    {
      borderWidth:1,
      marginTop:20,
      width:130,
      height:30,
      borderRadius:5,
      padding:6,
      paddingLeft:11,
      marginLeft:10,
      fontWeight:"300",
      borderColor:"lightgray",
      textAlign:"auto"
      },

    rated:
    {
      borderWidth:1,
      marginTop:20,
      width:80,
      height:30,
      marginRight:13,
      borderRadius:5,
      padding:6,
      paddingLeft:11,
      marginLeft:10,
      fontWeight:"300",
      borderColor:"lightgray",
      textAlign:"auto"
      }
}
)
export default cakesNDdesserts;

