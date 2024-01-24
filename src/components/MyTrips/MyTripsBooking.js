import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import commonStyles from '../../assets/css/CommonFonts';
import { b2, white } from '../../config/colors';


const MyTripsBooking = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 40, marginHorizontal: 6, rowGap: 10 }}>
                <TouchableOpacity style={styles.booking} onPress={() => navigation.navigate("upcmnbkn")}>
                    <View style={{}}>
                        <Text style={[commonStyles.ns400, { fontSize: 16, color: b2 }]}>Upcoming Bookings</Text>
                    </View>

                    <View style={styles.bookingRight}>
                        <View style={styles.dot} />
                        <Text style={[commonStyles.ns400, { fontSize: 12, color: b2 }]}> 1 New</Text>
                        <Image
                            style={{ width: 16, height: 16, tintColor: b2, marginLeft: 10 }}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.booking} onPress={() => navigation.navigate("cmpltdbkn")}>
                    <View style={{}}>
                        <Text style={[commonStyles.ns400, { fontSize: 16, color: b2 }]}>
                            Complete Bookings
                        </Text>
                    </View>

                    <View style={styles.bookingRight}>
                        {/* <View style={styles.dot} />
                        <Text style={[commonStyles.ns400, {fontSize: 12, color: b2}]}> 1 New</Text> */}
                        <Image
                            style={{ width: 16, height: 16, tintColor: b2, marginLeft: 10 }}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.booking} onPress={() => navigation.navigate("cncldbkn")}>
                    <View style={{}}>
                        <Text style={[commonStyles.ns400, { fontSize: 16, color: b2 }]}>Cancelled Bookings</Text>
                    </View>

                    <View style={styles.bookingRight}>
                        {/* <View style={styles.dot} />
                        <Text style={[commonStyles.ns400, {fontSize: 12, color: b2}]}> 1 New</Text> */}
                        <Image
                            style={{ width: 16, height: 16, tintColor: b2, marginLeft: 10 }}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                    </View>
                </TouchableOpacity>
            </View >
        </View>
    )
};

export default MyTripsBooking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    booking: {
        backgroundColor: white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 3,
        paddingHorizontal: 25,
        paddingVertical: 8
    },
    dot: {
        width: 7,
        height: 7,
        backgroundColor: "#31C92E",
        borderRadius: 7,
    },
    bookingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});