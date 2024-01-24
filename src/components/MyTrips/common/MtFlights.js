import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { b3, rs1, rs2, white } from '../../../config/colors';
import commonStyles from '../../../assets/css/CommonFonts';
import icon from '../../../config/IconAssets';


const MtFlights = ({ navigation, route }) => {
    const { srcName } = route?.params;

    return (
        <View style={styles.container}>
            {/* heading */}
            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Text style={[commonStyles.lbB1, { fontSize: 16, color: b3 }]}>
                    {srcName}
                </Text>
            </View>

            {/* subheading */}
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <Text style={[commonStyles.lbB1, { fontSize: 14, color: b3 }]}>
                    Flights
                </Text>
            </View>

            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.ticket}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={[commonStyles.ns400, { fontSize: 12, color: b3, marginBottom: 4 }]}>
                                One Way Flight
                            </Text>

                            <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                                Booking ID - GOFLDSTILRJY3G7E3910
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{}}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image
                                        style={{ width: 20, height: 20, marginRight: 10 }}
                                        source={icon.vistara}
                                    />
                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>VISTARA UK-738</Text>
                                </View>

                                <Text style={[commonStyles.ns400, { color: b3, marginLeft: 30 }]}>
                                    Kevin
                                </Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image
                                    style={{ width: 20, height: 20, marginRight: 10, tintColor: b3, transform:[{rotate:"-15deg"}] }}
                                    source={icon.airplane}
                                />
                                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Kolkata - Dhaka</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

export default MtFlights;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4F4",
    },
    body: {
        flex: 1,
        marginHorizontal: 15,
        borderWidth: 1,
        marginTop: 20
    },
    ticket: {
        backgroundColor: white,
        elevation: 3,
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderRadius: 10,
        position: 'relative',
    },
    halfCircle: {
        backgroundColor: "#F4F4F4",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: 10,
        height: 10,
    }
});