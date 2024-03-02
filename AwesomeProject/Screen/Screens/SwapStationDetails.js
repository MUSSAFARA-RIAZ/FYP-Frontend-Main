import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import Button from "../Components/Button";
export default function SwapStationDetails() {
  const handleSwapRequest = () => {
    Alert.alert(
      "Swap Request",
      "Are you sure you want to make a swap request?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {},
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View>
      <View style={styles.parentdiv}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 20 }}>
            Swap Station Name
          </Text>
          <Text style={{ lineHeight: 25 }}>
            456 Renewable Street, Eco Valley District, ville 67 Land, Country
          </Text>
        </View>
        <View
          style={{
           // borderWidth: 2,
            flexDirection: "row",
           
            backgroundColor: "rgba(55, 198, 245, 1)",
            alignItems: "center",
            height:40,
            borderRadius:10,
            padding:10
          }}
        >
          <Image style={{color:"black"}} source={require("../../assets/Images/clock.png")} />
          <Text>5 mins away</Text>
        </View>
      </View>
     
      <View style={styles.wrapper}>
        <View style={styles.wrapper1}>
          <Image
            source={require("../../assets/Images/SwapStation_Battery.png")}
          />
        </View>
        <View style={styles.wrapper2}>
          <View style={styles.wrapper2view}>
            <Image source={require("../../assets/Images/batteryvector.png")} />

            <Text > Batteries Available </Text>
          </View>
          <View>
            <Text>5</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.wrapper2view}>
            <Image source={require("../../assets/Images/batteryvector.png")} />

            <Text > Power Level </Text>
          </View>
          <View>
            <Text>100 KW</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.wrapper2view}>
            <Image source={require("../../assets/Images/bill.png")} />
           
            <Text> Price per Battery </Text>
          </View>
          <View>
            <Text>RS 35000</Text>
            <View style={styles.line} />
          </View>
        </View>
      </View>

  
      <View
        style={styles.aboutswapstationview}
      >
        <Text style={{ color: "white" }}>About Swap Station</Text>
        <View style={styles.rowContainer}>
          <View>
            <Image
              source={require("../../assets/Images/batteryimg1.png")}
              style={styles.batteryimage}
              resizeMode="cover"
            />
          </View>
          <View>
            <Image
              source={require("../../assets/Images/batteryimg2.png")}
              style={styles.batteryimage}
              resizeMode="cover"
            />
          </View>
          <View>
            <Image
              source={require("../../assets/Images/batteryimg3.png")}
              style={styles.batteryimage}
              resizeMode="cover"
            />
          </View>
        </View>
        <Text style={{ color: "white" }}>
          Celebrate sustainability with us at EcoSwap Station! 🌱 We're
          dedicated to revolutionizing your e-bike experience by offering
          convenient battery swapping services. Our state-of-the-art facility is
          equipped with cutting-edge technology, ensuring seamless battery
          exchanges for your electric rides
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleSwapRequest}>
          <Text style={styles.text}>
            Call Us <Image source={require("../../assets/Images/call.png")} />
          </Text>
        </TouchableOpacity>

       
      </View>
      <Button  title="Swap Request" onPress={handleSwapRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
  parentdiv: {
    display: "flex",
    flexDirection: "row",
  //  justifyContent: "space-between", // Aligns items at the opposite ends horizontally
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  
  line: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 0,
  },
  wrapper: {
    flexDirection: "row",
    

    padding:10
  },
  wrapper2:{
    padding:10,
  
  },
  wrapper2view:{
    flexDirection: "row", alignItems: "center", marginBottom:10
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20, 
  },
  column: {
    marginLeft: 20, // Add margin between columns
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  ownerName: {
    fontWeight: "bold",
    color: "white",
  },
  price: {
    color: "white",
  },
  batteryRemaining: {
    color: "white",
  },
  centeredView: {
    position: "absolute",
    top: 90, // Adjust top position
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  
  txt: {
    lineHeight: 30,
    fontWeight: "bold",
  },
  desc: {
    lineHeight: 30,
    // fontWeight:'bold',
  },
  button: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#37C6F5",

    margin: 5,
    borderRadius: 5,
    height: 35,

    width: 120,
  },
  iconstyling: {
    borderWidth: 2,
    borderColor: "#37C6F5",
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  batteryimage: {
    margin: 5,
  },
  aboutswapstationview:{
    borderWidth: 2,
  
    backgroundColor: "black",
    color: "white",
    marginLeft: 10,
    marginRight: 10,
    marginBottom:14,
    padding: 10,
    borderRadius: 10,
  }
});
