import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../Screens/Welcome';

import Onboardingscreen2 from '../Screens/OnboardingScreen2';
import OnboardingScreen3 from '../Screens/OnboardingScreen3';
import Home from '../Screens/Home';
import HomeMain from '../Screens/HomeMain';
import CurrentLocation from '../Screens/CurrentLocation';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return ( 
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboardingscreen1" component={Welcome} />
          <Stack.Screen name='Onboardingscreen2' component={Onboardingscreen2}/>
          <Stack.Screen name='OnboardingScreen3' component={OnboardingScreen3}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name="Home" component={HomeMain} />
        <Stack.Screen name="CurrentLocation" component={CurrentLocation}/>
          
      
        </Stack.Navigator>
    </NavigationContainer>
     );
}
 
export default AppNavigator;