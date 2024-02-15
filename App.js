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
import CarDetails from './src/components/Search/Cars/CarDetails';
import CarFareDetails from './src/components/Search/Cars/CarFareDetails';
import CarPayment from './src/components/Search/Cars/CarPayment';
import GtDisclaimer from './src/components/Search/GroupTickets/GtDisclaimer';
import GtCreateReq from './src/components/Search/GroupTickets/GtCreateReq';
import FhSearch from './src/components/Search/FlightHotels/FhSearch';
import FhFilter from './src/components/Search/FlightHotels/FhFilter';
import FhDetails from './src/components/Search/FlightHotels/FhDetails';
import FhFlightDetails from './src/components/Search/FlightHotels/FhFlightDetails';
import FhBaseReview from './src/components/Search/FlightHotels/FhBaseReview';
import FhFinalReview from './src/components/Search/FlightHotels/FhFinalReview';
import FhTripFilter from './src/components/Search/FlightHotels/FhTripFilter';
import FhPayment from './src/components/Search/FlightHotels/FhPayment';
import ChPackegeDetails from './src/components/Search/CarHotel/ChPackegeDetails';
import ChReview from './src/components/Search/CarHotel/ChReview';
import Chpayment from './src/components/Search/CarHotel/Chpayment';

const RootStack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <RootStack.Navigator initialRouteName='wlscrn' screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='wlscrn' component={WelcomeScreen} />
        <RootStack.Screen name='tab' component={TabNavigation} />
        <RootStack.Screen name='traveldate' component={TravelDate} />
        {/* flights */}
        <RootStack.Screen name='flightsearch' component={FlightSearch} />
        <RootStack.Screen name='filters' component={Filters} />
        <RootStack.Screen name='selectfair' component={SelectFair} />
        <RootStack.Screen name='flightreview' component={FlightReview} />
        <RootStack.Screen name='addons' component={AddOns} />
        <RootStack.Screen name='payments' component={Payments} />
        <RootStack.Screen name='success' component={Success} />
        {/* flight and hotel */}
        <RootStack.Screen name='fhsearch' component={FhSearch} />
        <RootStack.Screen name='fhfilter' component={FhFilter} />
        <RootStack.Screen name='fhtripfilter' component={FhTripFilter} />
        <RootStack.Screen name='fhdetails' component={FhDetails} />
        <RootStack.Screen name='fhfdetails' component={FhFlightDetails} />
        <RootStack.Screen name='fhbr' component={FhBaseReview} />
        <RootStack.Screen name='fhfr' component={FhFinalReview} />
        <RootStack.Screen name='fhpayment' component={FhPayment} />
        {/* car and hotel */}
        <RootStack.Screen name='chpd' component={ChPackegeDetails} />
        <RootStack.Screen name='chreview' component={ChReview} />
        <RootStack.Screen name='chpayment' component={Chpayment} />
        {/* hotels */}
        <RootStack.Screen name='hotelsearches' component={HotelSearches} />
        <RootStack.Screen name='hotelfilter' component={HotelFilter} />
        <RootStack.Screen name='hoteldetails' component={HotelDetails} />
        <RootStack.Screen name='hotelreview' component={HotelReview} />
        <RootStack.Screen name='hotelgallery' component={HotelGallery} />
        <RootStack.Screen name='hotelud' component={HotelUserDetails} />
        <RootStack.Screen name='hotelps' component={HotelPriceSum} />
        <RootStack.Screen name='hotelsum' component={HotelSummary} />
        <RootStack.Screen name='hotelpay' component={HotelPayment} />
        {/* cars */}
        <RootStack.Screen name='carsearch' component={CarSearch} />
        <RootStack.Screen name='carfilter' component={CarFilter} />
        <RootStack.Screen name='cardetails' component={CarDetails} />
        <RootStack.Screen name='carfaredetails' component={CarFareDetails} />
        <RootStack.Screen name='carpayment' component={CarPayment} />
        {/* holiday tickets */}
        {/* <RootStack.Screen name='holidaytkts' component={HolidayTickets} /> */}
        {/* group tickets */}
        <RootStack.Screen name='gtdisclaimer' component={GtDisclaimer} />
        <RootStack.Screen name='gtcreatereq' component={GtCreateReq} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
