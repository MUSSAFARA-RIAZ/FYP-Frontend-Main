
import { StyleSheet, Text, View } from 'react-native';


// import AppNavigator from '../Navigation/AppNavigator';
import Welcome from './Screen/Screens/Welcome';
import AppNavigator from './Screen/Navigation/AppNavigator';

export default function App() {
  return (
 
    
    <AppNavigator/>
   
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
