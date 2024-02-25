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
          onPress: () => {
            // Logic to handle when the user clicks Yes
            // For example, you can hide the message box here
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View>
  <View
  style={{
    borderWidth: 4,
    borderColor: "blue",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 10,
  }}
>
  <View style={{ borderWidth: 2, borderColor: "black", flex: 1 }}>
    <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 20 }}>Swap Station Namesss</Text>
    <Text style={{ lineHeight: 25 }}>
      456 Renewable Street, Eco Valley District, ville 67 Land, Country
    </Text>
  </View>
  <View
    style={{
      borderWidth: 2,
      flexDirection: "row",
      borderColor: "black",
      backgroundColor: "rgba(55, 198, 245, 1)",
      alignItems: "flex-start",
    }}
  >
    <Image source={require("../../assets/Images/clockicon.png")} />
    <Text>5 mins away</Text>
  </View>
</View>


      <View style={styles.bottomView}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "auto",
            paddingHorizontal: "10%",
          }}
        ></View>
      </View>
      <View
        style={{
          borderWidth: 2,
          borderColor: "black",
          backgroundColor: "black",
          color: "white",
          marginLeft: 10,
          marginRight: 10,
          padding: 8,
          borderRadius: 10,
        }}
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

        <View></View>
      </View>
      <Button title="Swap Request" onPress={handleSwapRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20, // Add margin bottom to create space for the centered view
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
  bottomView: {
    marginTop: 130, // Adjust marginTop to position "kks" text below centered view
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
});
