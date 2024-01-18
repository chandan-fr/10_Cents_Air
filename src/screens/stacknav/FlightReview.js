import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { b1, b3, blue, gs1, white } from '../../config/colors';

const FlightReview = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.Wrap}>
                {/* nav */}
                <TouchableOpacity style={styles.nav} onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 25, height: 25, tintColor: b1 }}
                        source={require("../../assets/icons/next.png")}
                    />
                    <Text style={[styles.lbB1, { fontSize: 20, marginLeft: 15 }]}>Review</Text>
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* ticket 1 */}
                        <View style={[styles.ticketWrap, { marginTop: 10, }]}>
                            {/* head */}
                            <View style={styles.ticketHead}>
                                <Text style={[styles.lbB1, { fontSize: 18, marginRight: 15, color: white }]}>
                                    Dhaka
                                </Text>
                                <Image
                                    style={{ width: 16, height: 16, tintColor: white, transform: [{ rotate: "180deg" }] }}
                                    source={require("../../assets/icons/next.png")}
                                />
                                <Text style={[styles.lbB1, { fontSize: 18, color: white, marginLeft: 15 }]}>
                                    Dubai
                                </Text>
                            </View>

                            <View style={{ marginHorizontal: 10, }}>
                                {/* flight name & number */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, }}>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require("../../assets/icons/indigo.png")}
                                    />
                                    <Text style={[styles.ns600, { marginLeft: 10 }]}>
                                        IndiGo
                                        <Text style={[styles.ns600, { color: b3 }]}>  6E-1118</Text>
                                    </Text>
                                </View>

                                {/* ticket details */}
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                    <View style={{ alignItems: "flex-start", flex: 1, rowGap: 6 }}>
                                        <Text style={[styles.ns600, { fontSize: 14 }]}>08 Nov, Sat</Text>
                                        <Text style={[styles.ns700, {}]}>14:15</Text>
                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Dhaka</Text>
                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3 }]}>
                                            Indira Gandhi
                                            International Airport
                                        </Text>
                                    </View>

                                    <View>
                                        <Text style={[styles.ns700, { marginBottom: 45 }]}>
                                            02h 30m
                                        </Text>
                                    </View>

                                    <View style={{ alignItems: "flex-end", flex: 1, rowGap: 6 }}>
                                        <Text style={[styles.ns600, { fontSize: 14 }]}>08 Nov, Sat</Text>
                                        <Text style={[styles.ns700, {}]}>16:15</Text>
                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Bombay</Text>
                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3, textAlign: "right" }]}>
                                            Chhatrapati Shivaji
                                            International Airport
                                        </Text>
                                    </View>
                                </View>

                                {/* baggage */}
                                <View
                                    style={{
                                        marginTop: 40,
                                        flexDirection: "row", alignItems: "center", justifyContent: "space-evenly",
                                        marginBottom: 70,
                                    }}
                                >
                                    <View style={{ alignItems: "center", rowGap: 7 }}>
                                        <Image
                                            style={{ width: 35, height: 35, tintColor: blue }}
                                            source={require("../../assets/icons/backpack.png")}
                                        />
                                        <Text style={[styles.ns700, { color: b3, fontSize: 16 }]}>7 Kgs</Text>
                                        <Text style={[styles.ns400, { color: b3 }]}>Cabin Baggage</Text>
                                    </View>

                                    <View style={{ alignItems: "center", rowGap: 7 }}>
                                        <Image
                                            style={{ width: 40, height: 40, tintColor: blue }}
                                            source={require("../../assets/icons/baggage.png")}
                                        />
                                        <Text style={[styles.ns700, { color: b3, fontSize: 16 }]}>15 Kgs</Text>
                                        <Text style={[styles.ns400, { color: b3 }]}>Check-In Baggage</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <Text style={[styles.ns600, { textAlign: "center", fontSize: 16, marginVertical: 15 }]}>
                            Layover - 03h 45m
                        </Text>

                        {/* ticket 2 */}
                        <View style={styles.ticketWrap}>
                            <View style={{ marginHorizontal: 10, }}>
                                {/* flight name & number */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, }}>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require("../../assets/icons/indigo.png")}
                                    />
                                    <Text style={[styles.ns600, { marginLeft: 10 }]}>
                                        IndiGo
                                        <Text style={[styles.ns600, { color: b3 }]}>  6E-1407</Text>
                                    </Text>
                                </View>

                                {/* ticket details */}
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                    <View style={{ alignItems: "flex-start", flex: 1, rowGap: 6 }}>
                                        <Text style={[styles.ns600, { fontSize: 14 }]}>08 Nov, Sat</Text>
                                        <Text style={[styles.ns700, {}]}>20:55</Text>
                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Bombay</Text>
                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3 }]}>
                                            Chhatrapati Shivaji
                                            International Airport
                                        </Text>
                                    </View>

                                    <View>
                                        <Text style={[styles.ns700, { marginBottom: 45 }]}>
                                            03h 55m
                                        </Text>
                                    </View>

                                    <View style={{ alignItems: "flex-end", flex: 1, rowGap: 6 }}>
                                        <Text style={[styles.ns600, { fontSize: 14 }]}>08 Nov, Sat</Text>
                                        <Text style={[styles.ns700, {}]}>22:30</Text>
                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Dubai</Text>
                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3, textAlign: "right" }]}>
                                            Dubai International
                                            Airport
                                        </Text>
                                    </View>
                                </View>

                                {/* baggage */}
                                <View
                                    style={{
                                        marginTop: 40,
                                        flexDirection: "row", alignItems: "center", justifyContent: "space-evenly",
                                        marginBottom: 70,
                                    }}
                                >
                                    <View style={{ alignItems: "center", rowGap: 7 }}>
                                        <Image
                                            style={{ width: 35, height: 35, tintColor: blue }}
                                            source={require("../../assets/icons/backpack.png")}
                                        />
                                        <Text style={[styles.ns700, { color: b3, fontSize: 16 }]}>7 Kgs</Text>
                                        <Text style={[styles.ns400, { color: b3 }]}>Cabin Baggage</Text>
                                    </View>

                                    <View style={{ alignItems: "center", rowGap: 7 }}>
                                        <Image
                                            style={{ width: 40, height: 40, tintColor: blue }}
                                            source={require("../../assets/icons/baggage.png")}
                                        />
                                        <Text style={[styles.ns700, { color: b3, fontSize: 16 }]}>15 Kgs</Text>
                                        <Text style={[styles.ns400, { color: b3 }]}>Check-In Baggage</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* class */}
                        <View
                            style={{
                                rowGap: 2, marginVertical: 10, backgroundColor: white,
                                padding: 7, marginHorizontal: 22
                            }}
                        >
                            <Text style={[styles.ns400, { color: b3 }]}>Class</Text>
                            <Text style={[styles.ns600, { fontSize: 16 }]}>Economy</Text>
                            <Text style={[styles.ns600, { fontSize: 14, textTransform: "uppercase", color: b3 }]}>
                                saver
                            </Text>
                        </View>
                    </ScrollView>
                </View>

                {/* bottom */}
                <View style={styles.bottom}>
                    <View style={{ flexDirection: "row", alignItems: 'center', backgroundColor: "#F9F7FD", marginVertical: 20 }}>
                        <TouchableOpacity style={styles.wallet}>
                            <Image
                                style={{ width: 30, height: 30, tintColor: b1 }}
                                source={require("../../assets/icons/wallet.png")}
                            />
                        </TouchableOpacity>

                        <Text style={[styles.ns600, { fontSize: 15, marginLeft: 15 }]}>
                            Book and earn 156 points instantly
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default FlightReview;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        // marginHorizontal: 12,
        marginTop: 30,
    },
    nav: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginLeft: 12
    },
    lbB1: {
        fontFamily: "LondonBetween",
        color: b1,
    },
    ticketWrap: {
        elevation: 4,
        borderRadius: 4,
        backgroundColor: white,
        marginHorizontal: 12,
    },
    ticketHead: {
        backgroundColor: "#333E5C",
        flexDirection: "row",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingVertical: 13,
        alignItems: "center",
        paddingLeft: 15,
    },
    ns700: {
        fontFamily: "NunitoSans_10pt-Bold",
        color: b1,
        fontSize: 18,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        color: b1,
        fontSize: 18,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 14,
    },
    bottom: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: white,
    },
    wallet: {
        backgroundColor: "#EAE3FF",
        paddingVertical: 8,
        paddingLeft: 18,
        paddingRight: 10,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
});