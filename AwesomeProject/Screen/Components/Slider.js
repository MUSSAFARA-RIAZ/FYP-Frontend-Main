import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("window");

const data = [
  {
    id: "1",
    image: require("../../assets/Images/BatterySliderImg2.png"),
    text: "Battery Pricing",
    Price: "Rs 45000",
    Distance: "31km",
    Duration: "00:00:26",
    Speed: "40km",
  },
  {
    id: "2",
    image: require("../../assets/Images/BatterySliderImg2.png"),
    // text: "Second Image",
    text: "Battery Pricing",
    Price: "Rs 45000",
    Distance: "31km",
    Duration: "00:00:26",
    Speed: "40km",
  },
  {
    id: "3",
    image: require("../../assets/Images/BatterySliderImg2.png"),
    //text: "Third Image",
    text: "Battery Pricing",
    Price: "Rs 45000",
    Distance: "31km",
    Duration: "00:00:26",
    Speed: "40km",
  },
  {
    id: "4",
    image: require("../../assets/Images/BatterySliderImg2.png"),
    // text: "Fourth Image",
    text: "Battery Pricing",
    Price: "Rs 45000",
    Distance: "31km",
    Duration: "00:00:26",
    Speed: "40km",
  },
  // Add more images and text as needed
];

export default function Slider() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const slideWidth = width - 30;
    const inputRange = [
      (index - 1) * slideWidth,
      index * slideWidth,
      (index + 1) * slideWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });

    return (
      <Animated.View style={[styles.slide, { width: slideWidth, opacity }]}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.cardContent}>
          <View style={styles.row1}>
            <Text style={styles.text}>{item.text}</Text>
            <Text>{item.Price}</Text>
          </View>
          <View style={styles.row2}>
            <View style={styles.row2txt}>
              <Text style={styles.text}>Distance</Text>
              <Text>{item.Distance}</Text>
            </View>
            <View style={styles.row2txt}>
              <Text style={styles.text}>Duration</Text>
              <Text>{item.Duration}</Text>
            </View>
            <View style={styles.row2txt}>
              <Text style={styles.text}>Speed</Text>
              <Text>{item.Speed}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Request Battery Swap</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  return (
    <AnimatedFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {
          useNativeDriver: true,
        }
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#37C6F5",

    width: 170,
    height: 40,

    borderRadius: 15,
    justifyContent: "center",
   position:"relative",
   top:10,
   marginBottom:30,
   
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  row1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    // justifyContent:"center"
  },
});
