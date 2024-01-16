import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, b3, blue, white } from '../../config/colors';
import { genCurrentDate } from '../../config/CurrentDate';

const FlightSearch = ({ navigation }) => {
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <SafeAreaView style={styles.parent}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.wrap}>
                {/* nav head */}
                <View style={{ alignItems: "flex-start" }}>
                    <TouchableOpacity style={styles.nav} onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 25, height: 25, marginLeft: 10 }}
                            source={require("../../assets/icons/next.png")}
                        />
                        <View style={{ marginLeft: 30 }}>
                            <View style={styles.right}>
                                <Text style={styles.navHeadTxt}>Dhaka</Text>
                                <Image style={styles.rightImg} source={require("../../assets/icons/next.png")} />
                                <Text style={styles.navHeadTxt}>Dubai</Text>
                            </View>
                            <Text style={styles.navSubHeadTxt}>{genCurrentDate()} | 1 Adult</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* date & price */}
                <View style={styles.dpWrap}>
                    <View style={{ alignItems: "center", marginLeft: 25, marginRight: 10 }}>
                        <Image
                            style={{ width: 25, height: 25, }}
                            source={require("../../assets/icons/calendar.png")}
                        />
                        <Text style={styles.dpMonthTxt}>Jan</Text>
                    </View>

                    <View style={{ flex: 1, marginRight: 6, borderRadius: 4 }}>
                        <ScrollView
                            style={{ columnGap: 10, rowGap: 10 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {data.map((_, i) => (
                                <View key={i} style={[styles.dateCont, i === 0 ? { marginLeft: 5 } : null]}>
                                    <Text style={styles.dateContTxt}>$ 430</Text>
                                    <Text style={styles.dateContSubTxt}>16, Tue </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    <TouchableOpacity style={styles.arrowWrap}>
                        <Image style={styles.arrow} source={require("../../assets/icons/right-arrow.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default FlightSearch;

const styles = StyleSheet.create({
    parent: { flex: 1, backgroundColor: white },
    wrap: { flex: 1 },
    nav: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 30,
        paddingRight: 5,
    },
    navHeadTxt: {
        color: b1,
        fontSize: 15,
        fontFamily: "LondonBetween",
    },
    navSubHeadTxt: {
        color: b3,
        fontSize: 12,
        fontFamily: "LondonBetween",
    },
    right: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    rightImg: {
        width: 15,
        height: 15,
        marginHorizontal: 10,
        transform: [{ rotate: "180deg" }]
    },
    dpWrap: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: blue,
        marginHorizontal: 5,
        borderRadius: 4,
        paddingVertical: 5,
        marginTop: 15,
    },
    dpMonthTxt: {
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 18,
        color: white,
        marginTop: 6,
    },
    dateCont: {
        backgroundColor: "#E3F8FF",
        alignItems: "center",
        borderRadius: 4,
        padding: 4,
        marginRight: 5,
    },
    dateContTxt: {
        fontFamily: "Inter-Regular",
        color: "#166B86",
        fontSize: 15,
    },
    dateContSubTxt: {
        color: "#166B86",
        fontSize: 14,
        marginTop: 10
    },
    arrow: {
        width: 20,
        height: 20,
    },
    arrowWrap: {
        position: "absolute",
        right: 6,
    },
});