import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { b1, b3, blue, green, white } from '../../config/colors';
import ToggleSwitch from 'toggle-switch-react-native';

const Filters = ({ navigation }) => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [tripOptn, setTripOptn] = useState("o");

    return (
        <SafeAreaView style={styles.parent}>
            <View style={styles.Wrap}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* nav */}
                    <View style={styles.nav}>
                        <Text style={[styles.lbB1, { fontSize: 22, }]}>Filters</Text>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                style={{ width: 22, height: 22, tintColor: b1 }}
                                source={require("../../assets/icons/cross.png")}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* stops */}
                    <View style={styles.stopsWrap}>
                        <Text style={styles.stops}>Stops</Text>

                        <View style={styles.stopOptn}>
                            <TouchableOpacity style={styles.optnBtn}>
                                <Text style={styles.ns600}>Direct</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optnBtn}>
                                <Text style={styles.ns600}>1 Stop</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optnBtn}>
                                <Text style={styles.ns600}>2+ Stops</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* toggles */}
                    <View style={styles.toggleWrap}>
                        <View style={styles.toggleCont}>
                            <Text style={[styles.lbB1, { fontSize: 18 }]}>Show refundable only</Text>

                            <ToggleSwitch
                                isOn={toggle1}
                                onColor={green}
                                offColor={b3}
                                size="small"
                                onToggle={isOn => setToggle1(isOn)}
                            />
                        </View>

                        <View style={[styles.toggleCont, { marginTop: 10 }]}>
                            <Text style={[styles.lbB1, { fontSize: 18 }]}>Hide multi airline</Text>

                            <ToggleSwitch
                                isOn={toggle2}
                                onColor={green}
                                offColor={b3}
                                size="small"
                                onToggle={isOn => setToggle2(isOn)}
                            />
                        </View>
                    </View>

                    {/* trip type & time */}
                    <View style={styles.tripTimeWrap}>
                        {/* trip */}
                        <View style={styles.tripCont}>
                            <TouchableOpacity
                                style={tripOptn === "o" ? styles.tripBtnActive : styles.tripBtn}
                                onPress={() => setTripOptn("o")}
                            >
                                <Text style={tripOptn === "o" ? styles.tripTxtActive : styles.tripTxt}>
                                    One-Way
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={tripOptn === "r" ? styles.tripBtnActive : styles.tripBtn}
                                onPress={() => setTripOptn("r")}
                            >
                                <Text style={tripOptn === "r" ? styles.tripTxtActive : styles.tripTxt}>
                                    Round-trip
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* time */}
                        <View>
                            
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

export default Filters;

const styles = StyleSheet.create({
    parent: { flex: 1 },
    Wrap: {
        flex: 1,
        marginHorizontal: 12,
        marginTop: 30,
    },
    nav: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 15,
    },
    lbB1: {
        fontFamily: "LondonBetween",
        color: b1,
    },
    stopsWrap: {
        marginTop: 20,
        paddingBottom: 10,
    },
    stops: {
        fontFamily: "LondonBetween",
        fontSize: 19,
        color: b1,
    },
    stopOptn: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 15,
        justifyContent: "space-evenly"
    },
    optnBtn: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 2,
        elevation: 4,
        backgroundColor: white
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-Bold",
        color: blue,
        fontSize: 15,
    },
    toggleCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    toggleWrap: {
        marginTop: 20,
    },
    tripTimeWrap: {
        marginTop: 20,
        borderColor: "#D8D8D8",
        borderWidth: 1,
        borderRadius: 4,
        elevation: 4,
        paddingHorizontal: 20,
        backgroundColor: white,
    },
    tripCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    tripBtnActive: {
        backgroundColor: "rgba(33, 180, 226, 0.1)",
        borderColor: blue,
        borderRadius: 4,
        borderWidth: 0.9,
        paddingVertical: 6,
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    tripTxtActive: {
        fontFamily: "Assistant-SemiBold",
        fontSize: 18,
        color: blue,
    },
    tripBtn: {
        backgroundColor: white,
        borderColor: "#DEDEDE",
        borderRadius: 4,
        borderWidth: 0.9,
        paddingVertical: 6,
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    tripTxt: {
        fontFamily: "Assistant-SemiBold",
        fontSize: 18,
        color: b3,
    },
});