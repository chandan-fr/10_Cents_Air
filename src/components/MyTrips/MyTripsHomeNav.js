import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpcomingBooking from './core/UpcomingBooking';
import CompletedBooking from './core/CompletedBooking';
import CancelledBooking from './core/CancelledBooking';
import MyTripsBooking from './core/MyTripsBooking';

const MyTripsHomeNavStack = createNativeStackNavigator();

const MyTripsHomeNav = () => {
    return (
        <MyTripsHomeNavStack.Navigator
            initialRouteName="mtbkn"
            screenOptions={{ headerShown: false }}
        >
            <MyTripsHomeNavStack.Screen name="mtbkn" component={MyTripsBooking} />
            <MyTripsHomeNavStack.Screen name="upcmnbkn" component={UpcomingBooking} />
            <MyTripsHomeNavStack.Screen name="cmpltdbkn" component={CompletedBooking} />
            <MyTripsHomeNavStack.Screen name="cncldbkn" component={CancelledBooking} />
        </MyTripsHomeNavStack.Navigator>
    )
};

export default MyTripsHomeNav;