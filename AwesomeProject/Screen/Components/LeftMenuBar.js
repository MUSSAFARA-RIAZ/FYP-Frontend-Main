import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions , Image } from 'react-native';

const LeftMenuBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
        <View style={styles.menuicon}>
      <TouchableOpacity onPress={toggleMenu}>
        <Image source={require("../../assets/Images/Hamburger.png")}/>
      </TouchableOpacity>
      </View>
      {menuVisible && (
        <View style={[styles.menu, { width: screenWidth * 0.7, height: screenHeight }]}>
          <View style={styles.userprofileicon_username}>
  <Image source={require("../../assets/Images/Menubaricon.png")} />
  <View style={styles.textContainer}>
    <Text style={styles.username}>Username</Text>
    <Text style={styles.username}>View</Text>
  </View>
</View>
      
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Menu Item 1 clicked')}>
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Menu Item 2 clicked')}>
            <Text style={styles.menuItemText}>Find Swap Station</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Menu Item 3 clicked')}>
            <Text style={styles.menuItemText}>Battery Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Menu Item 3 clicked')}>
            <Text style={styles.menuItemText}>Monitor Health</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Menu Item 3 clicked')}>
            <Text style={styles.menuItemText}>How It Works</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Menu Item 3 clicked')}>
            <Text style={styles.menuItemText}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.savebutton}>
        <Text style={styles.savebuttonText}>Save Changes</Text>
      </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    menuicon:{
        flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end', // Aligns items to the end of the container (i.e., the right side)
    paddingRight: 20,

    },
    userprofileicon_username: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      textContainer: {
        marginLeft: 10, // Adjust this value as needed for spacing between image and text
      },
    username:{
        color:"white"

    },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  menuItem: {
    paddingVertical: 23,
    paddingLeft:15,
  },
  menuItemText:{
    color:"white",

  },
  savebutton: {   
    marginLeft: 'auto',
    marginRight: 'auto',
    width:"100%",
    position:"relative",
    top:60,

      
     
      backgroundColor: '#37C6F5', 
     
      borderRadius:5,
      paddingVertical:10,

    },
    savebuttonText: {
      color: 'white',
      fontSize: 16,
      textAlign:"center"
    },
});

export default LeftMenuBar;
