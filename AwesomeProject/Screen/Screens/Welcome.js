import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.welcome}>
      <Image style={styles.welcomeimg} source={require("../../../AwesomeProject/assets/Images/sampleimg.png")} />
      <View style={styles.OnboardText}>
        <Text style={styles.txt}>Seamless Battery Swapping </Text>
        <Text style={styles.txt1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat elit ut quam</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Onboardingscreen2")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;

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
    marginTop:20,
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
