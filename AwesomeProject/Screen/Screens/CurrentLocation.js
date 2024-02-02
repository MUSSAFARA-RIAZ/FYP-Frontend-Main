import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CurrentLocation = ({ route }) => {
    const { latitude,longitude } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title="Location Title"
          description="Location Description"
        />
      </MapView>



      <View style={styles.findNearbyBatteries}>
      <View style={styles.rectangle149}>
        <Text style={styles.findBatteryNearby}>Find Battery Nearby</Text>
        <View style={styles.locationInput}>
          <TouchableOpacity style={styles.rectangle150}>
            <View style={styles.group1}>
              <View style={styles.ellipse3}></View>
              <View style={styles.ellipse4}></View>
            </View>
            <Text style={styles.usersCurrentLocation}>User’s current location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

      
    <View style={styles.buttoncontainer}>
    <TouchableOpacity style={styles.rectangle132} >
        <Text style={styles.findSwapStation}>Find Swap Station</Text>
      </TouchableOpacity>
    </View>
       
       
       


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  findNearbyBatteries: {
    position: 'absolute',
    width: '90%', 
    height: 111,
    left: '5%', 
    right: '5%', 
    top: 530, 
  },
  rectangle149: {
    position: 'absolute',
    width: '100%', 
    height: 111,
    backgroundColor: '#242424',
    borderRadius: 10,
  },
  
  findBatteryNearby: {
    width: 153,
    height: 19,
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 15, 
    marginLeft: 20, 
  },

  rectangle150: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '90%', 
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: '5%', 
    marginRight: '5%', 
    
  },
  group1: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  ellipse3: {
    width: 20,
    height: 20,
    backgroundColor: '#37C6F5',
    borderRadius: 10,
    marginLeft: 10,
  },
  ellipse4: {
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginLeft: -15, 
  },
  usersCurrentLocation: {
    fontSize: 16,
    color: '#707070',
    marginLeft: 20, 
  },
  


  buttoncontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 650,
    marginLeft: '5%', 
    marginRight: '5%', 
    width: '90%'
  },
  rectangle132: {
    width: 330,
    height: 40,
    backgroundColor: '#37C6F5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5, 
    shadowRadius: 4, 
    elevation: 5, 
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  findSwapStation: {

    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#242424',
  },
  
});

export default CurrentLocation;
