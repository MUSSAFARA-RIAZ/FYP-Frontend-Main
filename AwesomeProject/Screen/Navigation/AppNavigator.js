import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../Screens/Welcome';

import Onboardingscreen2 from '../Screens/OnboardingScreen2';
import OnboardingScreen3 from '../Screens/OnboardingScreen3';
import Home from '../Screens/Home';
import HomeMain from '../Screens/HomeMain';
import CurrentLocation from '../Screens/CurrentLocation';
import HowItWork from '../Screens/HowItWork';
import UserProfile from '../Screens/UserProfile';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  // Aminah code merged
    return ( 
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeMain">
          <Stack.Screen name="Onboardingscreen1" component={Welcome} />
          <Stack.Screen name='Onboardingscreen2' component={Onboardingscreen2}/>
          <Stack.Screen name='OnboardingScreen3' component={OnboardingScreen3}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name="HomeMain" component={HomeMain} />
        <Stack.Screen name="CurrentLocation" component={CurrentLocation}/>
        <Stack.Screen name='HowItworks' component={HowItWork}/>
        <Stack.Screen name='UserProfile' component={UserProfile}/>
          
      
        </Stack.Navigator>
    </NavigationContainer>
     );
}
 
export default AppNavigator;