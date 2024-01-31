import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import TabNavigation from './src/screens/bottomnav/TabNavigation';
import { StatusBar } from 'react-native';
import TravelDate from './src/screens/stacknav/TravelDate';
import FlightSearch from './src/screens/stacknav/FlightSearch';
import Filters from './src/screens/stacknav/Filters';
import SelectFair from './src/screens/stacknav/SelectFair';
import FlightReview from './src/screens/stacknav/FlightReview';
import AddOns from './src/screens/stacknav/AddOns';
import Payments from './src/screens/stacknav/Payments';
import Success from './src/screens/stacknav/Success';
import HotelSearches from './src/components/Search/Hotels/HotelSearches';
import HotelFilter from './src/components/Search/Hotels/HotelFilter';
import HotelDetails from './src/components/Search/Hotels/HotelDetails';

const RootStack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <RootStack.Navigator initialRouteName='wlscrn' screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='wlscrn' component={WelcomeScreen} />
        <RootStack.Screen name='tab' component={TabNavigation} />
        <RootStack.Screen name='traveldate' component={TravelDate} />
        <RootStack.Screen name='flightsearch' component={FlightSearch} />
        <RootStack.Screen name='filters' component={Filters} />
        <RootStack.Screen name='selectfair' component={SelectFair} />
        <RootStack.Screen name='flightreview' component={FlightReview} />
        <RootStack.Screen name='addons' component={AddOns} />
        <RootStack.Screen name='payments' component={Payments} />
        <RootStack.Screen name='success' component={Success} />
        <RootStack.Screen name='hotelsearches' component={HotelSearches} />
        <RootStack.Screen name='hotelfilter' component={HotelFilter} />
        <RootStack.Screen name='hoteldetails' component={HotelDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
