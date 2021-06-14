import React from "react";
import { View,Text, TextInput,StyleSheet,Image,TouchableOpacity, ScrollView,Button} from "react-native";

const pizza = () =>
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

      <ScrollView>
      <ScrollView style={{marginBottom:"100%"}}>
        <View style={{backgroundColor:"white", marginTop:11}}>
           <Image style={{height:20,width:20,top:"29%",left:16}} source={require('../assets/veg1.png')}></Image>
           <Text style={{top:"23%",left:33,fontSize:14,color:"orange"}} > MUST TRY</Text>
           <Text style={{top:"35%",left:22,}} >Rs 69</Text>
         
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:18,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Tomato Pizza{'\n'}
          </Text>
          <TouchableOpacity>
          <Image style={{borderRadius:20,height:135,width:150, marginTop:10,marginBottom:20, marginLeft:130}}source={require('../assets/tp.jpg')}></Image>
          </TouchableOpacity>
       </View>
       
       <Text style={{top:20,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> La Pinos'z Pizza</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300"}}>50% off | Use WELCOMEE60</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={{backgroundColor:"white", marginTop:11}}>
           <Image style={{height:20,width:20,top:"27%",left:16}} source={require('../assets/nonveg.png')}></Image>
           <Text style={{top:"22%",left:33,fontSize:14,color:"orange"}} > BEST SELLER</Text>
           <Text style={{top:"35%",left:20,}} >Rs 200</Text>
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:19,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            7" Barbecue Chicken Pizza{'\n'}
          </Text>
          <TouchableOpacity>
          <Image style={{borderRadius:20,height:130,width:150, marginTop:10,marginBottom:20, marginLeft:40}}source={require('../assets/bbqp.jpg')}></Image>
          </TouchableOpacity>
       </View>
       <Text style={{top:20,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> Canosa</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300"}}>50% off | Use WELCOMEE60</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={{backgroundColor:"white", marginTop:11}}>
           <Image style={{height:20,width:20,top:"30%",left:16}} source={require('../assets/nonveg.png')}></Image>
           <Text style={{top:"25%",left:33,fontSize:14,color:"orange"}} > BEST SELLER</Text>
           <Text style={{top:"37%",left:20,}} >Rs 150</Text>
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:19,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Southern Barbecue Pizza
          </Text>
          <TouchableOpacity>
          <Image style={{borderRadius:20,height:130,width:150, marginTop:10,marginBottom:20, marginLeft:53}}source={require('../assets/sbbqp.jpg')}></Image>
          </TouchableOpacity>
       </View>
       <Text style={{top:20,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> Adams Pizza</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300"}}>50% off | Use WELCOMEE60</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={{backgroundColor:"white", marginTop:11}}>
           <Image style={{height:20,width:20,top:"28%",left:16}} source={require('../assets/nonveg.png')}></Image>
           <Text style={{top:"23%",left:33,fontSize:14,color:"orange"}} > BEST SELLER</Text>
           <Text style={{top:"35%",left:20,}} >Rs 180</Text>
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:19,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Beef Mushroom Pizza{'\n'}
          </Text>
          <TouchableOpacity>
          <Image style={{borderRadius:20,height:130,width:150, marginTop:10,marginBottom:20, marginLeft:70}}source={require('../assets/bmp.jpg')}></Image>
          </TouchableOpacity>
       </View>
       <Text style={{top:20,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> Canosa</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300"}}>50% off | Use WELCOMEE60</Text>
          </View>
        </TouchableOpacity>
        </View>

         
        <View style={{backgroundColor:"white", marginTop:11}}>
           <Image style={{height:20,width:20,top:"28%",left:16}} source={require('../assets/nonveg.png')}></Image>
           <Text style={{top:"23%",left:33,fontSize:14,color:"orange"}} > BEST SELLER</Text>
           <Text style={{top:"35%",left:20,}} >Rs 199</Text>
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:19,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Beef Delicious Pizza{'\n'}
          </Text>
          <TouchableOpacity>
          <Image style={{borderRadius:20,height:130,width:150, marginTop:10,marginBottom:20, marginLeft:80}}source={require('../assets/beefp.jpg')}></Image>
          </TouchableOpacity>
       </View>
       <Text style={{top:20,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> Addams Pizza</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300"}}>50% off | Use WELCOMEE60</Text>
          </View>
        </TouchableOpacity>
        </View>
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
        backgroundColor:"black",
        color:"white"
        
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
export default pizza;

