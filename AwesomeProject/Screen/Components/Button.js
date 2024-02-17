import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function Button({title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#37C6F5',
        paddingVertical: 10,
        paddingHorizontal: 120, // Adjusted padding to make the button smaller
        borderRadius: 10,
        marginBottom: 20, // Adjusted margin to reduce space at the bottom
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign:"center",
      },


})