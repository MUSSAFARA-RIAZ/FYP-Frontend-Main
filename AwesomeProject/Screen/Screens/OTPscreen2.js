import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../Components/Button";

export default function OTPscreen2() {
  const navigation = useNavigation();
  return (
    <View style={styles.blackareaview}>
      <View style={styles.container}>
        <View style={styles.indicator}>
          <View style={styles.indicatorhighlight1}></View>
          <View style={styles.indicatorhighlight2}></View>
          <View style={styles.indicatorhighlight3}></View>
        </View>

        <View style={styles.textview}>
          <Text style={styles.txt}>OTP Verification</Text>
          <Text style={styles.txt1}>
            Enter the Verification code that is sent to you through SMS.
          </Text>
        </View>
      </View>
      {/* OTP INPUT NUMBER ****************8 */}
      <View style={styles.otp_input}>
        <View style={styles.indicator}>
          <View style={styles.otpinpstyling}>
            <TextInput
              style={styles.indicatorinp}
              onChangeText={(text) => console.log("Input 1:", text)}
              placeholder="1"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View style={styles.otpinpstyling}>
            <TextInput
              style={styles.indicatorinp}
              onChangeText={(text) => console.log("Input 2:", text)}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View style={styles.otpinpstyling}>
            <TextInput
              style={styles.indicatorinp}
              onChangeText={(text) => console.log("Input 3:", text)}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View style={styles.otpinpstyling}>
            <TextInput
              style={styles.indicatorinp}
              onChangeText={(text) => console.log("Input 4:", text)}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        </View>

        <View style={styles.otptextview}>
          <Text style={styles.otptext}>Did not receive OTP</Text>
          <Text style={styles.otptext}>Resend OTP?</Text>
        </View>
     
  
      </View>
      <Button
          title="Next"
          onPress={() => navigation.navigate("TurnOnLocationScreen")}
        />
    </View>

  );
}
const styles = StyleSheet.create({
  otp_input: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  otptextview: {
    marginTop: 20,
  },
  otptext: {
    color: "white",
    textAlign: "center",
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

    backgroundColor: "#37C6F5",
    margin: 10,
    border: 7,
    borderColor: "#9B9B9B",
  },
  indicatorhighlight3: {
    backgroundColor: "lightgray",
    width: 50,
    height: 8,
    borderRadius: 4,
    margin: 10,
  },

  otpinpstyling: {
    marginHorizontal: 5,
  },
  indicatorinp: {
    borderBottomColor: "#37C6F5",
    borderBottomWidth: 20,
    borderRadius: 4,
    color: "white",
    width: 40, // Adjust width according to your preference
    textAlign: "center", // Center align the text inside TextInput
  },

  textview: {
    marginTop: 20,
  },
  txt: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  txt1: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
  blackareaview: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
});
