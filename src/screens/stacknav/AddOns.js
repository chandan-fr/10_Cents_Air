import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView, TextInput, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { b1, b2, b3, blue, gs3, white } from '../../config/colors';
import DirectTab from '../../components/DirectTab';

const { width, height } = Dimensions.get("window");

const AddOns = ({ navigation }) => {
    const [addOns, setAddOns] = useState("d");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.Wrap}>
                {/* nav */}
                <View style={styles.navWrap}>
                    <TouchableOpacity style={styles.nav} onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 23, height: 23, tintColor: b1 }}
                            source={require("../../assets/icons/next.png")}
                        />
                        <Text style={[styles.lbB1, { fontSize: 19, marginLeft: 45 }]}>Add Ons</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                        <Text style={[styles.lbB1, { fontSize: 16, color: blue }]}>
                            Skip to Payments
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* add ons option */}
                <View style={styles.addOnsOptnWrap}>
                    <TouchableOpacity
                        style={addOns === "d" ? styles.addOnsOptnActive : styles.addOnsOptn}
                        onPress={() => setAddOns("d")}
                    >
                        <Image
                            style={addOns === "d" ? styles.addOnsIconActive : styles.addOnsIcon}
                            source={require("../../assets/icons/seat.png")}
                        />
                        <Text style={[styles.ns600, addOns === "d" ? styles.addOnsTxtActive : styles.addOnsTxt]}>Direct</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={addOns === "m" ? styles.addOnsOptnActive : styles.addOnsOptn}
                        onPress={() => setAddOns("m")}
                    >
                        <Image
                            style={addOns === "m" ? styles.addOnsIconActive : styles.addOnsIcon}
                            source={require("../../assets/icons/dinner.png")}
                        />
                        <Text style={[styles.ns600, addOns === "m" ? styles.addOnsTxtActive : styles.addOnsTxt]}>Meals</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={addOns === "e" ? styles.addOnsOptnActive : styles.addOnsOptn}
                        onPress={() => setAddOns("e")}
                    >
                        <Image
                            style={addOns === "e" ? styles.addOnsIconActive : styles.addOnsIcon}
                            source={require("../../assets/icons/diamond.png")}
                        />
                        <Text style={[styles.ns600, addOns === "e" ? styles.addOnsTxtActive : styles.addOnsTxt]}>Extras</Text>
                    </TouchableOpacity>
                </View>

                {/* flight and seat */}
                <View
                    style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}
                >
                    <TouchableOpacity
                        style={[styles.flightSeat, { borderRightWidth: 0.4 }]}
                        onPress={() => setAddOns("d")}
                    >
                        <Image
                            style={{ width: 20, height: 20, marginRight: 5 }}
                            source={require("../../assets/icons/indigo.png")}
                        />
                        <Text style={[styles.ns600, { fontSize: 14, color: blue }]}>DAC - BOM</Text>
                        <Text style={[styles.ns600, { fontSize: 14, marginLeft: 20 }]}>21A</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[styles.flightSeat, { borderLeftWidth: 0.4 }]}
                        onPress={() => setAddOns("d")}
                    >
                        <Image
                            style={{ width: 20, height: 20, marginRight: 5 }}
                            source={require("../../assets/icons/indigo.png")}
                        />
                        <Text style={[styles.ns600, { fontSize: 14, color: blue }]}>DAC - BOM</Text>
                        <Text style={[styles.ns600, { fontSize: 14, marginLeft: 20 }]}>21A</Text>
                    </TouchableOpacity>
                </View>

                {/* seat layout */}
                {addOns === "d" && <DirectTab />}

                {/* bottom */}
                <View style={styles.bottom}>
                    <View
                        style={{
                            flexDirection: 'row', alignItems: "center", justifyContent: "space-between",
                            marginTop: 6, paddingBottom: 6, paddingHorizontal: 4
                        }}
                    >
                        <TouchableOpacity
                            style={{ alignItems: "flex-start", marginLeft: 15 }}
                        // onPress={() => fareRef.current.open()}
                        >
                            <View style={{ flexDirection: 'row', alignItems: "center", marginBottom: 5 }}>
                                <Image
                                    style={{ width: 15, height: 15, }}
                                    source={require("../../assets/icons/seat.png")}
                                />
                                <Text style={[styles.ns400, { marginLeft: 2 }]}>$ 100</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text style={[styles.ns700, { fontSize: 19, marginRight: 10 }]}>$ 495</Text>
                                <Image
                                    style={{ width: 15, height: 15, transform: [{ rotate: "-90deg" }] }}
                                    source={require("../../assets/icons/right-arrow.png")}
                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.next}
                        // onPress={() => navigation.navigate("addons")}
                        >
                            <Text style={{ color: white, fontSize: 18, fontFamily: "LondonTwo" }}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default AddOns;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        marginTop: 30,
    },
    lbB1: {
        fontFamily: "LondonBetween",
        color: b1,
    },
    ns700: {
        fontFamily: "NunitoSans_10pt-Bold",
        color: b1,
        fontSize: 18,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        color: b1,
        fontSize: 16,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 14,
    },
    navWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        marginHorizontal: 12,
    },
    nav: {
        flexDirection: "row",
        alignItems: "center",
    },
    addOnsOptnWrap: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginTop: 10,
    },
    addOnsOptn: {
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 0.7,
        paddingVertical: 7,
        minWidth: (width / 3) - 20,
        justifyContent: 'center',
        borderColor: "#D8D8D8",
        borderRadius: 3,
    },
    addOnsOptnActive: {
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 0.7,
        paddingVertical: 7,
        minWidth: (width / 3) - 20,
        justifyContent: 'center',
        borderColor: blue,
        backgroundColor: "rgba(33, 180, 226, 0.1)",
        borderRadius: 3,
    },
    addOnsIcon: {
        width: 18,
        height: 18,
        tintColor: b3,
    },
    addOnsIconActive: {
        width: 18,
        height: 18,
        tintColor: blue,
    },
    addOnsTxt: {
        fontSize: 14,
        marginLeft: 15,
        color: b3,
    },
    addOnsTxtActive: {
        fontSize: 14,
        marginLeft: 15,
        color: blue,
    },
    flightSeat: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        borderTopWidth: 0.8,
        paddingVertical: 12,
        backgroundColor: white,
        elevation: 3,
    },
    bottom: {
        backgroundColor: white,
        borderTopColor: "#D8D8D8",
        borderTopWidth: 0.7,
        elevation: 3,
    },
    next: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 11,
        paddingHorizontal: 60,
    },
    square: {
        width: 25,
        height: 25,
        borderRadius: 4,
        borderWidth: 1,
    },
});