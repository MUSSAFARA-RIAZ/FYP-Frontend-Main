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
import OTPscreen1 from '../Screens/OTPscreen1';
import OTPscreen2 from '../Screens/OTPscreen2';
import TurnOnLocationScreen from '../Screens/TurnOnLocationScreen';
import SwapStationDetails from '../Screens/SwapStationDetails';
import Setting from '../Screens/Setting';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  // Aminah code merged
    return ( 

      <NavigationContainer>

        <Stack.Navigator initialRouteName="setting">
        {/* <Stack.Screen name="CurrentLocation" component={HomeMain} /> */}
        <Stack.Screen name='setting' component={Setting}/>
          <Stack.Screen name="OTPscreen1" component={OTPscreen1} />
          <Stack.Screen name="OTPscreen2" component={OTPscreen2}/> 
          <Stack.Screen name='TurnOnLocationScreen' component={TurnOnLocationScreen}/>
          <Stack.Screen name='SwapStationDetails' component={SwapStationDetails}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name="Onboardingscreen1" component={Welcome} />
          <Stack.Screen name='Onboardingscreen2' component={Onboardingscreen2}/>
          <Stack.Screen name='OnboardingScreen3' component={OnboardingScreen3}/>
           <Stack.Screen name="CurrentLocation" component={CurrentLocation}/>
     <Stack.Screen name='HowItworks' component={HowItWork}/>
     <Stack.Screen name='UserProfile' component={UserProfile}/>
          

        </Stack.Navigator>
      </NavigationContainer>
    // <NavigationContainer>
    //     <Stack.Navigator >
 
    

          
      
    //     </Stack.Navigator>
    // </NavigationContainer>
     );
}
 
export default AppNavigator;