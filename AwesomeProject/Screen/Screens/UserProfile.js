import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import LeftMenuBar from "../Components/LeftMenuBar";
export default function UserProfile() {
  return (
    <View>
    <View>
        <LeftMenuBar/>
    </View>
    
    <View>
      <View style={styles.profile_changepictures}>
        <Image source={require("../../assets/Images/UserProfile.png")} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Picture</Text>
        </TouchableOpacity>
      </View>
     
      <View style={styles.container}>
      <View style={styles.userinfo}>
        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <TextInput style={styles.input} placeholder="Enter User name" />
        </View>
        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="Enter Email" />
        </View>
        <View style={styles.inputContainer}>
          <Text>Phone Number</Text>
          <TextInput style={styles.input} placeholder="Enter Phone Number" />
        </View>
      </View>
    </View>
    <TouchableOpacity style={styles.savebutton}>
        <Text style={styles.savebuttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
    
    </View>
  );
}
const styles = StyleSheet.create({
  profile_changepictures: {
    position: "relative",
    top: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#37C6F5",
 position:"relative",
 top:14,

    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 10,

    
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  container: {
   position:"relative",
   left:20,
   top:60
  },
  userinfo: {
    width: '80%', // Adjust the width as needed
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  savebutton: {
  width:"40%",
  position:"relative",
  left:190,
  top:50,
    
      // Adjust right position as needed
    backgroundColor: '#37C6F5', // Example background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  savebuttonText: {
    color: 'white',
    fontSize: 16,
  },

});
