import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import TabNavigation from './src/screens/bottomnav/TabNavigation';
import { StatusBar } from 'react-native';
import TravelDate from './src/screens/stacknav/TravelDate';

const RootStack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <RootStack.Navigator initialRouteName='wlscrn' screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='wlscrn' component={WelcomeScreen} />
        <RootStack.Screen name='tab' component={TabNavigation} />
        <RootStack.Screen name='traveldate' component={TravelDate} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
