import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";

export default function Setting() {
  return (
    <View style={styles.parentcontainer}>
        <View style={styles.container}>
          <View style={{flexDirection:"column"}}>

            <Text  style={styles.text}>Phone Number </Text>
            <Text>03002304485</Text>
            </View>
            
          
            <Image source={require("../../assets/Images/arrow-main.png")} />
            
        </View>
       
        <View style={styles.container}>
            <Text style={styles.text}>Navigator</Text>
            <Image source={require("../../assets/Images/arrow-main.png")} />

        </View>
        <View style={styles.container}>
    <Text style={styles.text}>Rules and Terms</Text>
    <Image
        
        source={require("../../assets/Images/arrow-main.png")}
    />
</View>
<View style={styles.lastcontainer}>
<Text style={{fontWeight:"bold", lineHeight:40, paddingLeft:10, fontSize:16,}}>Logout</Text>
<Text style={{color:"#DE2525", lineHeight:60, paddingLeft:10 ,  fontSize:16,}}>Delete Account</Text>
</View>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{
        flex:1,
        fontWeight:"bold", 
        fontSize:16,
    },
    container:{
        flexDirection: 'row', alignItems: 'center',
        marginBottom:50,
        paddingLeft:10
    },
    parentcontainer:{
        marginTop:30
    }
   
})
