import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTripsHome from "../../components/MyTrips/MyTripsHome";

const MyTripStack = createNativeStackNavigator();

const MyTrips = ({ navigation }) => {
  return (
    <MyTripStack.Navigator
      initialRouteName="mthomenav"
      screenOptions={{ headerShown: false }}
    >
      <MyTripStack.Screen name="mthome" component={MyTripsHome} />
    </MyTripStack.Navigator>
  )
};

export default MyTrips;