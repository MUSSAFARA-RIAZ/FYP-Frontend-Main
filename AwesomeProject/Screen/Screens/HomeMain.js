import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const HomeMain = () => {
  const imagePath = require('../../assets/Images/logo.jpeg');
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000, 
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.navigate('CurrentLocation', {
          latitude : 24.860966,
          longitude :  66.990501,
        });
       
      }, 2000); 
    });
  }, [navigation, scaleValue]);


  return (
    <View style={styles.container}>
      <Animated.Image
        source={imagePath}
        style={[styles.image, { transform: [{ scale: scaleValue }] }]}
      />
      <View style={styles.triangleContainer}>
        <View style={styles.triangleLeft} />
        <View style={styles.triangleRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:0,
    backgroundColor:"white"
  },
image: {
  width: 200, 
  height: 200,
  marginTop:200,
  
},
triangleContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    marginLeft: 0,

  },
  triangleLeft: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderBottomWidth: 350,
    borderRightWidth: 200,
    borderTopColor: 'transparent',
    borderBottomColor: '#37C6F5',
    borderRightColor: 'transparent',
  },
  triangleRight: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderBottomWidth: 350,
    borderLeftWidth: 200,
    borderTopColor: 'transparent',
    borderBottomColor: '#37C6F5',
    borderLeftColor: 'transparent',
  },
});

export default HomeMain;
