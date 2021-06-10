//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity ,Alert,Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// create a component
const App = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
     

      <View style={{height:110,width:175,borderWidth:1,right:"28%",borderRadius:10,borderColor:"grey"}}>
      <TouchableOpacity
       onPress={() => Alert.alert('Simple Button pressed')}>
        <Text style={{fontWeight:"bold",left:"5%",fontSize:20,top:10}}>
        Restaurants
        </Text>
        <Text style={{left:"5%",top:10}}>Enjoy your</Text>
          <Text style={{left:"5%",top:10}}>favourite treats</Text> 
          <Image
             style={{height:50,width:70,left:"61%",top:-7}}
             source={require('../assets/food.png')}/>
              <AntDesign name="arrowright" size={20} color="#4a4f51" style={{top:-35,left:10 }} />
          </TouchableOpacity>
      </View> 
    
      <View style={{height:110,width:175,borderWidth:1,left:"28%",borderRadius:10,borderColor:"grey",top:-110,marginBottom:-120}}>
      <TouchableOpacity
       onPress={() => Alert.alert('Simple Button pressed')}>
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
      <View style={{height:70,width:10,backgroundColor:"#f30421",top:40,marginBottom:60,borderRadius:10,right:"51%"}}></View>
    <View style={{left:"-23%"}}>
    <TouchableOpacity
       onPress={() => Alert.alert('Simple Button pressed')}>
        <Text style={{left:"20%",top:-90,fontWeight:"bold"}}>We're here to help. Our resturant and {"\n"} essential delevery services are open from:</Text>
       
        <Text style={{top:-80,color:"grey",left:"20%"}}>8:00 AM to 7:30 pm </Text>
        </TouchableOpacity>
        </View>
        

        <Image
             style={{height:150,width:"110%",marginTop:-40,borderRadius:10}}
             source={require('../assets/offer.png')}/>

              <FontAwesome name="thumbs-o-up" size={25} color="#280d60" style={{right:"49%",top:25}} />
             <Text style={{fontSize:20,fontWeight:"bold",right:"22%",marginBottom:20}}> Top Picks For You</Text>

            <ScrollView  horizontal={true} style={{top:10,width:"110%"}}>  

            <View style={{height:110,width:175,borderWidth:1,right:"28%",borderRadius:10,borderColor:"grey",marginLeft:30,}}>
        <TouchableOpacity
       onPress={() => Alert.alert('Simple Button pressed')}>
        <Text style={{fontWeight:"bold",left:"5%",fontSize:20,top:10}}>
        Restaurants
        </Text>
        <Text style={{left:"5%",top:10}}>Enjoy your</Text>
          <Text style={{left:"5%",top:10}}>favourite treats</Text> 
          <Image
             style={{height:50,width:70,left:"61%",top:-7}}
             source={require('../assets/food.png')}/>
          </TouchableOpacity>
      </View> 

      <View style={{height:110,width:175,borderWidth:1,right:"28%",borderRadius:10,borderColor:"grey",marginLeft:10}}>
      <TouchableOpacity
       onPress={() => Alert.alert('Simple Button pressed')}>
        <Text style={{fontWeight:"bold",left:"5%",fontSize:20,top:10}}>
        Restaurants
        </Text>
        <Text style={{left:"5%",top:10}}>Enjoy your</Text>
          <Text style={{left:"5%",top:10}}>favourite treats</Text> 
          <Image
             style={{height:50,width:70,left:"61%",top:-7}}
             source={require('../assets/food.png')}/>
          </TouchableOpacity>
      </View> 
      <View style={{height:110,width:175,borderWidth:1,right:"28%",borderRadius:10,borderColor:"grey",marginLeft:10}}>
      <TouchableOpacity
       onPress={() => Alert.alert('Simple Button pressed')}>
        <Text style={{fontWeight:"bold",left:"5%",fontSize:20,top:10}}>
        Restaurants
        </Text>
        <Text style={{left:"5%",top:10}}>Enjoy your</Text>
          <Text style={{left:"5%",top:10}}>favourite treats</Text> 
          <Image
             style={{height:50,width:70,left:"61%",top:-7}}
             source={require('../assets/food.png')}/>
          </TouchableOpacity>
      </View> 
      <View style={{height:110,width:175,borderWidth:1,right:"28%",borderRadius:10,borderColor:"grey",marginLeft:10}}>
      <TouchableOpacity
       onPress={() => Alert.alert('Simple Button pressed')}>
        <Text style={{fontWeight:"bold",left:"5%",fontSize:20,top:10}}>
        Restaurants
        </Text>
        <Text style={{left:"5%",top:10}}>Enjoy your</Text>
          <Text style={{left:"5%",top:10}}>favourite treats</Text> 
          <Image
             style={{height:50,width:70,left:"61%",top:-7}}
             source={require('../assets/food.png')}/>
          </TouchableOpacity>
      </View> 
        </ScrollView>
        <Text style={{marginTop:30,fontSize:20,fontWeight:"bold",right:"30%"}} >Popular Brands</Text>
        <ScrollView  horizontal={true} style={{top:10,width:"110%",height:300,marginTop:20,marginBottom:30}} >
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginLeft:10,marginRight:30,}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginRight:30,top:150,left:"-43%"}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginLeft:10,marginRight:30,left:"-40%"}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginRight:30,top:150,left:"-83%"}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginLeft:10,marginRight:30,left:"-80%"}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginRight:30,top:150,left:"-123%"}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginLeft:10,marginRight:30,left:"-120%"}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
       </View>
       <View style={{borderWidth:2,height:100,width:100,borderColor:"grey",borderRadius:100,marginRight:30,top:150,left:"-163%"}}>
       <Image
             style={{height:100,width:100,top:-10}}
             source={require('../assets/dominos.png')}/>
       </View>
       
        </ScrollView>
        
      </View>

    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height:"100%",
    width:"100%",
  },
});

//make this component available to the app
export default App;
