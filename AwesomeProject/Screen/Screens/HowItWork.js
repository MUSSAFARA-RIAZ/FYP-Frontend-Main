import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function HowItWork() {
    const navigation = useNavigation();
 
  return (
    <View>
    <View style={styles.Howitworks}>
        <Image source={require('../../assets/Images/HowItWorksImage.png')}/>
        <View style={styles.headview}>
            <Text style={styles.mainheading}>How Does Battery Swapping Works?</Text>
            <Text >Understand battery swapping under these 4 steps</Text>
        </View>
      
   


    </View>
      <View style={styles.pointContainer}>
      <View style={styles.point}>
          <Image source={require("../../assets/Images/Location.png")}/>
          <Text style={styles.description}>Turn on your location to have see nearby swap stations</Text>
      </View>
      <View  style={styles.point}>
          <Image source={require("../../assets/Images/batteryicon.png")}/>
          <Text style={styles.description}>Search for swap station as per your preferences </Text>
      </View>
      <View  style={styles.point}>
          <Image source={require("../../assets/Images/search.png")}/>
          <Text style={styles.description}>Send swap request to the station you want to</Text>
      </View>
      <View  style={styles.point}>
          <Image source={require("../../assets/Images/arrow.png")}/>
          <Text style={styles.description}>Reach the location and swap your battery</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UserProfile")}>
        <Text style={styles.buttonText}>Testing Button</Text>
      </TouchableOpacity>
  </View>
  </View>
  )
}
const styles=StyleSheet.create({
    headview:{
        position:"relative",
        top:10,

    },
    mainheading:{
        fontWeight: "bold",
        width: 300,
        fontSize:20,
    },

    Howitworks:{
       
        justifyContent: 'center', 
        alignItems: 'center',
        position:"relative",
        top:10,

    },
    pointContainer: {
        
     flexDirection:"column",
    justifyContent: 'center',
    position:"relative",
    top:20,
    paddingHorizontal: 20, 
        
    },
  
        point: {
            flexDirection: 'row',
            alignItems: 'center', 
       
            marginVertical: 10,
        
        },
        
       

    description:{
        marginLeft:8,
        flex: 1,
    flexWrap: 'wrap',
    },
    button:{
        backgroundColor:"black",
        

    },
    buttonText:{
        color:"white"
    }

})