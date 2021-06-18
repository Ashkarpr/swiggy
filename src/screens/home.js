//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity ,Alert,Image,Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/color';

// create a component
const App = ({navigation}) => {
  return (
    <View>
     
      <View style={{flexDirection:"column",width:"100%",height:"8%",padding:10,backgroundColor:"#fff",}}>
        <View style={{flexDirection:"row",marginRight:"45%",top:"1%",marginBottom:"1%"}}>
          <TouchableOpacity
           onPress={() => navigation.navigate('Map')}>
          <View style={{flexDirection:"row"}} >
        <Entypo name="location" size={18} style={{top:"2%",marginRight:"5%"}}/>
        <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"Times New Roman",marginRight:"50%"}}>Olavakode</Text>
        </View></TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:"row",top:"3%"}}>

      <MaterialCommunityIcons name="brightness-percent" size={25} color="#4a4f51" style={{marginLeft:"43%"}} />
      <Text style={{fontSize:16,fontFamily:"Times New Roman",fontWeight:"bold"}}> Offers</Text>
      </View></TouchableOpacity>

      </View>
      <Text style={{fontSize:12,color:colors.secondary}}>palakkad Junction, Kallekkulangra, Olavako...</Text>
      </View>
      
    <ScrollView>
    <View style={styles.container}>
     
    <View style={{flexDirection:"row",}}>    
        <View style={{borderWidth:1,borderRadius:10,borderColor:"grey",width:"48%",marginRight:"5%",height:"70%"}}>
      <TouchableOpacity
       onPress={() => navigation.navigate('Search')}>
       
        <Text style={{fontWeight:"bold",left:"5%",fontSize:20,top:10}}>
        Restaurants
        </Text>
        <Text style={{left:"5%",top:10}}>Enjoy your</Text>
          <Text style={{left:"5%",top:10}}>favourite treats</Text> 
          <Image
             style={{height:50,width:70,left:"60%",top:-7}}
             source={require('../assets/food.png')}/>
              <AntDesign name="arrowright" size={20} color="#4a4f51" style={{top:-35,left:10 }} />
          </TouchableOpacity>
      </View> 
    
      <View style={{borderWidth:1,borderRadius:10,borderColor:"grey",width:"48%",marginRight:"5%",height:"70%"}}>
      <TouchableOpacity
       onPress={() => {navigation.navigate('Search')}}>
        <Text style={{fontWeight:"bold",left:"5%",fontSize:20,top:10}}>
          Book Shop
        </Text>
        <Text style={{left:"5%",top:10}}>Book</Text>
          <Text style={{left:"5%",top:10}}>delevered!</Text>
          <Image
             style={{height:70,width:70,left:"61%",top:-20}}
             source={require('../assets/book.png')}/>
              <AntDesign name="arrowright" size={20} color="#4a4f51" style={{top:-55,left:10 }} />
          </TouchableOpacity>
      </View>
      </View>
      <View style={{flexDirection:"row",marginBottom:"5%"}}>
      <View style={{width:10,backgroundColor:"#f30421",borderRadius:10,left:"3%"}}></View>
    <View style={{}}>
   
        <Text style={{left:"5%",fontWeight:"bold"}}>We're here to help. Our resturant and{"\n"}essential delevery services are open from:</Text>
       
        <Text style={{color:"grey",left:"5%"}}>8:00 AM to 7:30 pm </Text>
     
        </View>
        </View>
        

        <Image
             style={{height:150,width:"100%",borderRadius:7,marginBottom:"10%"}}
             source={require('../assets/offer.png')}/>
            <View style={{flexDirection:"row",}}>
              <FontAwesome name="thumbs-o-up" size={25} color="#280d60" style={{}} />
             <Text style={{fontSize:20,fontWeight:"bold",marginBottom:20}}> Top Picks For You</Text>
             </View>
       

      {/* scroll  view horizontal for popular brand start */}
        <Text style={{marginTop:"15%",fontSize:20,fontWeight:"bold",}} >Popular Brands</Text>

        <ScrollView  horizontal={true} style={{top:10,width:"110%",height:400,right:"1%"}}>
          <View style={{marginTop:20,padding:20}}>
          <View style={{justifyContent:"space-between",flexDirection:"row",marginBottom:80}}>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginRight:40}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
            <View style={{borderWidth:1,width:70,borderColor:"grey",left:13,top:-20,backgroundColor:"white",borderRadius:5}}>
               <Text style={{fontWeight:"bold",left:5,color:"orange"}}>50% OFF</Text></View>
               <View style={{left:10,justifyContent:"space-around",flexDirection:"column",left:20,top:-10}}>
             <Text>Domino's</Text>
             <Text>  pizza</Text>
             </View>
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginRight:40}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
              <View style={{borderWidth:1,width:70,borderColor:"grey",left:13,top:-20,backgroundColor:"white",borderRadius:5}}>
               <Text style={{fontWeight:"bold",left:5,color:"orange"}}>50% OFF</Text></View>
               <View style={{left:10,justifyContent:"space-around",flexDirection:"column",left:20,top:-10}}>
             <Text>Domino's</Text>
             <Text>  pizza</Text>
             </View>
             
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
            <View style={{borderWidth:1,width:70,borderColor:"grey",left:13,top:-20,backgroundColor:"white",borderRadius:5}}>
               <Text style={{fontWeight:"bold",left:5,color:"orange"}}>50% OFF</Text></View>
               <View style={{left:10,justifyContent:"space-around",flexDirection:"column",left:20,top:-10}}>
             <Text>Domino's</Text>
             <Text>  pizza</Text>
             </View>
       </View>
       </View>


       <View style={{justifyContent:"space-between",flexDirection:"row",}}>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
             <View style={{borderWidth:1,width:70,borderColor:"grey",left:13,top:-20,backgroundColor:"white",borderRadius:5}}>
               <Text style={{fontWeight:"bold",left:5,color:"orange"}}>50% OFF</Text></View>
               <View style={{left:10,justifyContent:"space-around",flexDirection:"column",left:20,top:-10}}>
             <Text>Domino's</Text>
             <Text>  pizza</Text>
             </View>
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
            <View style={{borderWidth:1,width:70,borderColor:"grey",left:13,top:-20,backgroundColor:"white",borderRadius:5}}>
               <Text style={{fontWeight:"bold",left:5,color:"orange"}}>50% OFF</Text></View>
               <View style={{left:10,justifyContent:"space-around",flexDirection:"column",left:20,top:-10}}>
             <Text>Domino's</Text>
             <Text>  pizza</Text>
             </View>
             
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
           <View style={{borderWidth:1,width:70,borderColor:"grey",left:13,top:-20,backgroundColor:"white",borderRadius:5}}>
               <Text style={{fontWeight:"bold",left:5,color:"orange"}}>50% OFF</Text></View>
               <View style={{left:10,justifyContent:"space-around",flexDirection:"column",left:20,top:-10}}>
             <Text>Domino's</Text>
             <Text>  pizza</Text>
             </View>
       </View>
      
       </View>
       </View>
       
       </ScrollView>
       {/* scroll view horizontal   horizontal for popular brand  end */}


       {/* scroll view horizontal   horizontal for popular curations start */}

       <Text style={{fontWeight:"bold",fontSize:20, marginTop:30, marginBottom:30}}>Popular Curations</Text>
        <ScrollView  horizontal={true} style={{width:"110%",height:180,padding:10,right:"1%"}}>
          <View style={{}}>
            <TouchableOpacity
             onPress={() => {navigation.navigate('biriyani')}}>
            <Image
             style={{height:110,width:110,}}
             source={require('../assets/biryani12.png')}/>
             <Text style={{color:"grey",left:30,fontWeight:"bold"}}>Biryani</Text>
             </TouchableOpacity>
             </View>
             <View>
               <TouchableOpacity
               onPress={()=>{navigation.navigate('pizza')}}>
            <Image
             style={{height:100,width:100,marginLeft:30}}
             source={require('../assets/pizza23.png')}/>
             <Text style={{color:"grey",left:"45%",fontWeight:"bold",top:10}}>Pizza</Text>
             </TouchableOpacity>
             </View> 
             <View>
             <TouchableOpacity
               onPress={()=>{navigation.navigate('Cake')}}>
            <Image
             style={{height:100,width:100,marginLeft:30}}
             source={require('../assets/cake11.png')}/>
             <Text style={{color:"grey",left:"50%",fontWeight:"bold",top:10}}>Cake</Text>
             </TouchableOpacity>
             </View> 
             <View>
             <TouchableOpacity
               onPress={()=>{navigation.navigate('North')}}>
            <Image
             style={{height:100,width:150,marginLeft:30}}
             source={require('../assets/kerala.png')}/>
             <Text  style={{color:"grey",left:"50%",fontWeight:"bold",top:8}}>South India</Text>
             </TouchableOpacity>
             </View>
             <View>
            <Image
             style={{height:90,width:130,marginLeft:30,marginRight:30}}
             source={require('../assets/burger.png')}/>
             <Text  style={{color:"grey",left:"35%",fontWeight:"bold",top:16}}>Burggers</Text>
             </View>

             
             
        </ScrollView>
          {/* scroll view horizontal   horizontal for popular curations close */}
          
      </View>
      <View style={styles.container1}>
        <View style={{marginBottom:30,marginTop:10}}>

      <Button
        title="See all restaurants"
        color={colors.home}
        style={{width:"100%",}}
        onPress={() => {navigation.navigate('Search')}}
      />
        </View>
        <View style={{flexDirection:"row",height:50}}>
        <Feather name="check-square" size={40} color="grey" style={{}} />
        <View style={{flexDirection:"column"}}>
          <Text style={{color:"grey",fontWeight:"bold"}}>BEST</Text>
          <Text style={{color:"grey",fontWeight:"bold",marginRight:30}}>BRANDS</Text>
        </View>
        <Feather name="check-square" size={40} color="grey" style={{}} />
        <View style={{flexDirection:"column"}}>
          <Text style={{color:"grey",fontWeight:"bold"}}>ALL LOCAL</Text>
          <Text style={{color:"grey",fontWeight:"bold",marginRight:30}}>FAVOURITESS</Text>
        </View>
        <Feather name="check-square" size={40} color="grey" style={{}} />
        <View style={{flexDirection:"column"}}>
          <Text style={{color:"grey",fontWeight:"bold"}}>GREAT</Text>
          <Text style={{color:"grey",fontWeight:"bold",marginRight:30}}>OFFERS</Text>
        </View>
        </View>
        <View style={{height:500,backgroundColor:"#fbfcfc",width:"115%" ,left:-10}}>
          <View style={{padding:20}}>
            <Text style={{fontSize:100,fontWeight:"bold",color:"#d0d3d4",marginBottom:-50}}>LIVE</Text>
            <Text style={{fontSize:100,fontWeight:"bold",color:"#d0d3d4",marginBottom:-50}}>FOR</Text>
            <Text style={{fontSize:100,fontWeight:"bold",color:"#d0d3d4"}}>FOOD</Text> 
            <Text style={{color:"#d0d3d4",left:8}}>MADE BY FOOD LOVERS</Text>
            <Text style={{color:"#d0d3d4",left:8}}>SWIGGY HQ, BANGALORE</Text>
            <View style={{borderWidth:1,width:100,left:10,top:50,borderRadius:20,borderColor:"#d0d3d4"}}></View>
            <Image
             style={{height:120,width:110,marginLeft:"43%",top:-259}}
             source={require('../assets/soup.png')}/>

          </View>

        </View>
      </View>

    </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'space-between',

    backgroundColor: '#fff',
    height:"100%",
    width:"100%",
    marginBottom:10
  },
  container1: {
    flex: 1,
    padding:10,
    backgroundColor: '#fff',
    height:"100%",
    width:"100%",
    
  },
});

//make this component available to the app
export default App;
