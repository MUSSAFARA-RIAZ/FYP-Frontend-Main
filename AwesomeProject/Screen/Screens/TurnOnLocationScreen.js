import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../Components/Button";

import { Dimensions } from "react-native";
export default function TurnOnLocationScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.blackareaview}>
      <View style={styles.container}>
        <View style={styles.indicator}>
          <View style={styles.indicatorhighlight1}></View>
          <View style={styles.indicatorhighlight2}></View>
          <View style={styles.indicatorhighlight3}></View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 150,
          }}
        >
          <Image
            style={styles.imgTurnOn}
            source={require("../../assets/Images/TurnOnLocation.png")}
          />
        </View>
      </View>

      <View style={styles.textview}>
        <Text style={styles.txt}>Turn On Your Location</Text>
        <Text style={styles.txt1}>
          Lorem ipsum dolor sit amet, ckkkkkonsectetur adipiscing elit. Fusce
          volutpat elit ut quam
        </Text>
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate("TurnOnLocationScreen")}
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate("TurnOnLocationScreen")}
      />
    
    </View>
  );
}
const styles = StyleSheet.create({
  imgTurnOn: {
    width: Dimensions.get("screen").width - 40,
    height: 350,
  },
  container: {
    height: 200,
    backgroundColor: "white",
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 100,
  },
  indicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  indicatorhighlight1: {
    backgroundColor: "lightgray",
    width: 50,
    height: 8,
    borderRadius: 7,
    margin: 10,
  },
  indicatorhighlight2: {
    width: 50,
    height: 8,
    borderRadius: 4,

    backgroundColor: "lightgray",
    margin: 10,
    border: 7,
    borderColor: "#9B9B9B",
  },
  indicatorhighlight3: {
    backgroundColor: "#37C6F5",

    width: 50,
    height: 8,
    borderRadius: 4,
    margin: 10,
  },

  textview: {
    marginVertical: 130,
    borderColor: "red",
    borderWidth: 3,
    padding: 20,
  },
  txt: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  txt1: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    lineHeight: 20,
  },
  blackareaview: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
});
