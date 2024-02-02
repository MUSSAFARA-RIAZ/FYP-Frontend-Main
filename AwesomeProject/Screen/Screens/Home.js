import { View, Text, TouchableOpacity, StyleSheet , Image, ScrollView} from 'react-native'
import React from 'react'
import Svg, { Image as SvgImage } from 'react-native-svg';
import Slider from '../Components/Slider'
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      
      <TouchableOpacity style={styles.SwapStationbtn}>
        <Text style={styles.txt} onPress={() => navigation.navigate("CurrentLocation" , {
          latitude : 24.860966,
          longitude :  66.990501,
         })} >Find Swap Station</Text>
      </TouchableOpacity>
      <Slider/>
      <View style={styles.batterylevel}>
        <Text style={{fontWeight:"bold",fontSize:20,marginBottom:20, position:"relative",
        left:5}}>Battery Level</Text>
        <View>
          <View style={styles.batterylevelcontainer}>
     <View>
      <Image source={require("../../../AwesomeProject/assets/Images/battery1.png")}/>
     </View>
   
          <View>
            <Text style={{fontWeight:"bold",fontSize:50,color:"white"}}>45%</Text>
            <Text style={{fontWeight:"bold",fontSize:20,color:"white"}} >Battery Remaining</Text>
            <Text  style={{fontWeight:"bold",fontSize:20,color:"white"}}>Today, 10:08 AM</Text>
          </View>
        </View>
        </View>
      </View>
      <View>
        <Text style={{fontWeight:"bold",fontSize:20,marginBottom:20, position:"relative",
        left:5, top:30}}>Monitor Bike Health</Text>
        <View style={styles.healthmonitor}>
          <Text>Monitor Your Bike Health in Real Time</Text>
          <Image source={require("../../../AwesomeProject/assets/Images/fluent_arrow-trending-lines-20-regular.png")}/>
        </View>

      </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    
    SwapStationbtn:{
        borderRadius:10,
        backgroundColor: '#37C6F5',
        width: 328,
height: 50,
display:"flex",
alignItems:"center",
justifyContent:"center",
margin:10,
paddingHorizontal: 20,


    },
    txt:{
        color: '#000',
      //  fontFamily: 'Raleway',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 24,
    },
    batterylevelcontainer:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#242424",
        color:"white",
        borderRadius:10,
        width:'95%',
        position:"relative",
        left:5
       
        
    },
    batterylevel:{
      position:"relative",
      top:20

    },
    healthmonitor:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      width:"95%",
      position:"relative",
      left:5,
      top:10,
      backgroundColor:"lightgray",
      borderRadius:10
      
      
    }

})