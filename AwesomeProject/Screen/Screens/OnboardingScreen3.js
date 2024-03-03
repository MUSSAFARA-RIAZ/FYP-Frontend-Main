import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.welcome}>
      <Image style={styles.welcomeimg} source={require("../../../AwesomeProject/assets/Images/Onboardingimg3.png")} />
      <View style={styles.OnboardText}>
        <Text style={styles.txt}>Now find batteries on-the-go !</Text>
        <Text style={styles.txt1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat elit ut quam</Text>
      </View>
      <View style={styles.container}></View>
      <View style={styles.register_loginbtn}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntxt} onPress={() => navigation.navigate("OTPscreen1")}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.btntxt}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default OnboardingScreen3;

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    width: 'auto',
  },
  welcomeimg: {
    width: Dimensions.get("screen").width - 60,
    height: 290,
    marginTop:50
  // Adjusted margin to reduce space at the bottom
  },
  txt: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    width: 300,
    textAlign: "center",
  },
  OnboardText: {
    flex: 1,
justifyContent:"center",
    alignItems: 'center', // Center horizontally within OnboardText
  },
  txt1: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    marginTop:10,
    lineHeight:30
  },
  button: {
    backgroundColor: '#37C6F5',
    paddingVertical: 10,
    paddingHorizontal: 150, // Adjusted padding to make the button smaller
    borderRadius: 10,
    marginBottom: 20, // Adjusted margin to reduce space at the bottom
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
 

  register_loginbtn: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop:50,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#37C6F5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop:10
     // Adjust as needed for space between buttons
  },
  btntxt:{
    textAlign:"center",
    color:"white",
    fontSize:15
  }
});
