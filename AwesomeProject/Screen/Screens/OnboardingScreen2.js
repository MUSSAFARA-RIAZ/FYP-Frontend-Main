import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../Components/Button";

const Onboardingscreen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.welcome}>
      <Image style={styles.welcomeimg} source={require("../../../AwesomeProject/assets/Images/Onboardingimg2.png")} />
      <View style={styles.OnboardText}>
        <Text style={styles.txt}>Real Time E- Bike Health Monitoring !</Text>
        <Text style={styles.txt1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat elit ut quam</Text>
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("OnboardingScreen3")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity> */}
      <Button title="Next"  onPress={() => navigation.navigate("OnboardingScreen3")} />
    </View>
  );
}

export default Onboardingscreen2;

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
});
