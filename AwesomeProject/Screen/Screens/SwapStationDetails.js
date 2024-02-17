import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export default function SwapStationDetails() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require("../../assets/Images/ProfileIcon.png")}
            style={styles.image}
          />
          <View style={styles.column}>
            <Text style={styles.ownerName}>Battery Owner Name</Text>
            <Text style={styles.batteryRemaining}>Remaining Batteries: 9</Text>
          </View>
          <Text style={styles.price}>Rs. 45000</Text>
        </View>
        <View style={styles.centeredView}>
          <Text style={styles.txt}>Address</Text>
          <Text style={styles.desc}>
            456 Renewable Street, Eco Valley District, ville 67 Land, Country
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../../assets/Images/clockicon.png")} />
            <Text style={styles.txt}>5 mins away</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text>kks</Text>
        <View
  style={{
    borderWidth: 2,
    flex: 1,
    borderColor: "blue",
    flexDirection: "row",
  }}
>
  <TouchableOpacity style={[styles.button, { flex: 2 }]}>
    <Text style={{ color: "white" }}>Make swap request</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.button, { flex: 1 }]}>
    <Image
      source={require("../../assets/Images/msgicon.png")} // replace with your actual image
      //style={{ width: "100%", height: "100%", resizeMode: "contain" }}
    />
  </TouchableOpacity>
  <TouchableOpacity style={[styles.button, { flex: 1 }]}>
    <Image
      source={require("../../assets/Images/callicon.png")} // replace with your actual image
      // style={{ width: "100%", height: "100%", resizeMode: "contain" }}
    />
  </TouchableOpacity>
</View>

      </View>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: "blue",
    margin: 5,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
