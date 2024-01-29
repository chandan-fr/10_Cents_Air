import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTripsHome from "../../components/MyTrips/MyTripsHome";
import MyDetails from "../../components/MyTrips/MyDetails";
import MySettings from "../../components/MyTrips/MySettings";

const MyTripStack = createNativeStackNavigator();

const MyTrips = ({ navigation }) => {
  return (
    <MyTripStack.Navigator
      initialRouteName="mthomenav"
      screenOptions={{ headerShown: false }}
    >
      <MyTripStack.Screen name="mthome" component={MyTripsHome} />
      <MyTripStack.Screen name="mydetails" component={MyDetails} />
      <MyTripStack.Screen name="mysettings" component={MySettings} />
    </MyTripStack.Navigator>
  )
};

export default MyTrips;