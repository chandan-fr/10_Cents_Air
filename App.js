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
import HotelReview from './src/components/Search/Hotels/HotelReview';
import HotelGallery from './src/components/Search/Hotels/HotelGallery';
import HotelUserDetails from './src/components/Search/Hotels/HotelUserDetails';
import HotelPriceSum from './src/components/Search/Hotels/HotelPriceSum';
import HotelSummary from './src/components/Search/Hotels/HotelSummary';
import HotelPayment from './src/components/Search/Hotels/HotelPayment';
import CarSearch from './src/components/Search/Cars/CarSearch';
import CarFilter from './src/components/Search/Cars/CarFilter';

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
        <RootStack.Screen name='hotelreview' component={HotelReview} />
        <RootStack.Screen name='hotelgallery' component={HotelGallery} />
        <RootStack.Screen name='hotelud' component={HotelUserDetails} />
        <RootStack.Screen name='hotelps' component={HotelPriceSum} />
        <RootStack.Screen name='hotelsum' component={HotelSummary} />
        <RootStack.Screen name='hotelpay' component={HotelPayment} />
        <RootStack.Screen name='carsearch' component={CarSearch} />
        <RootStack.Screen name='carfilter' component={CarFilter} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
