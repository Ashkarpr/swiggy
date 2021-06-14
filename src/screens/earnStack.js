import React, {useState} from 'react';
import { View, Text,Modal,StyleSheet,Pressable, TextInput,Button,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../config/color';
const Stack = createStackNavigator();


const modalView = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          
              <Text style={{fontSize:20,fontWeight:"bold",right:"40%",marginBottom:10,color:"#022f45"}}>Login</Text>
              <Text style={{fontSize:20,right:"28%",color:"gray",top:-37}}>or</Text>
              <Text style={{fontSize:20,fontWeight:"bold",right:"15%",top:-63,color:"#022f45",marginBottom:-20}}>Signup</Text>
              <TextInput
              style={{borderWidth:1,borderColor:"gray", width:"100%",height:40,borderRadius:10,marginBottom:10}}
             placeholder="  +91 |   Enter phone number*"
            
              keyboardType="numeric"
             maxLength={10}
                />
                <Text style={{right:"22%",color:"gray"}}>By continuing, I agree to the </Text>
                <Text style={{color:colors.home,left:"18%",top:-20,fontWeight:"bold"}}>Terms of use  </Text>
                <Text style={{color:colors.home,left:"32%",top:-39}}>& </Text>
                <Text style={{color:colors.home,left:"40%",top:-58,fontWeight:"bold"}}> Privacy</Text>
                <Text style={{color:colors.home,right:"43%",top:"-19%",fontWeight:"bold"}}> Policy</Text>
                <View style={{marginTop:-35,height:70,width:"100%"}}>
                <Button
                style={{width:"40%"}}
               title="CONTINUE"
                 color={colors.home}
                 onPress={() => navigation.navigate('Account')}
                />
                </View>
                <Text style={{right:"22%",color:"gray"}}>Having trouble logging in?</Text>
                <Text style={{color:colors.home,fontWeight:"bold",left:"11%",top:"-6%"}}> Get help </Text>
         
          </View>
        </View>
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 42,
    
  },
  modalView: {
    margin: 10,
    bottom:-200,
    width:"100%",
    height:"50%",
    backgroundColor: "white",
    padding: 30,
    alignItems: "center",
 
    },
 
  

});

export default modalView;