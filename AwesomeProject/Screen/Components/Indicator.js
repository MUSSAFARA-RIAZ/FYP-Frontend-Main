import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function Indicator({ index }) {
  const [isFocused, setIsFocused] = useState(false);

  // Hook to run when the screen gains focus
  useFocusEffect(
    React.useCallback(() => {
      setIsFocused(true);
      return () => setIsFocused(false); // Cleanup when the screen loses focus
    }, [])
  );

  return (
    <View style={[styles.indicator, isFocused && styles.activeIndicator]}>
      <Text>{index}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    width: 20,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: 'green', // Change to your desired active color
  },
});
