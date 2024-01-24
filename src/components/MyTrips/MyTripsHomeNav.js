import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpcomingBooking from './UpcomingBooking';
import CompletedBooking from './CompletedBooking';
import CancelledBooking from './CancelledBooking';
import MyTripsBooking from './MyTripsBooking';

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