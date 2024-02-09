import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, b3, black, blue, green, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';

const { width, height } = Dimensions.get("window");

const FhDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.1} />
            <Header />

            <View style={styles.body}>
                <ScrollView
                    style={{ marginHorizontal: 15, marginTop: 5 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ paddingVertical: 5, rowGap: 10 }}>

                    </View>
                </ScrollView>

                {/* Reserve */}
                <View style={{ backgroundColor: b1, alignItems: "center", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 10, flexDirection: "row" }}>
                    <View style={{ rowGap: 3 }}>
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
                            Price
                        </Text>
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
                            $1320 + Taxes
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 150, alignItems: "center", justifyContent: "center", paddingVertical: 8 }}
                        onPress={() => navigation.navigate("fhbr")}
                    >
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
                            Reserve
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        </SafeAreaView >
    )
};

export default FhDetails;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 18,
        flex: 1,
        backgroundColor: white,
    },
    galImg: {
        width: 122,
        height: 82,
    },
    galImgBig: {
        width: 253,
        height: 258,
    },
    showMorePics: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    perks: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#D8D8D8',
        backgroundColor: white,
        columnGap: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    perksWrap: {
        flexWrap: "wrap",
        paddingHorizontal: 10,
        flexDirection: "row",
        columnGap: 5,
        rowGap: 5,
        marginTop: 5,
    },
    ramada: {
        borderWidth: 1,
        borderColor: "#EBF3FF",
        backgroundColor: white,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: 'center',
    },
    pHigh: {
        backgroundColor: "#E4F4FF",
        borderRadius: 2,
        marginHorizontal: 6,
        paddingVertical: 10,
        paddingHorizontal: 15,
        rowGap: 10,
    },
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    roomDetails: {
        backgroundColor: white,
        elevation: 3,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        rowGap: 10,
    },
    roomPerks: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    breakfast: {
        flexDirection: "row",
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "#D8D8D8",
        marginTop: 10,
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderRadius: 4,
        columnGap: 10,
    },
    LED: {
        backgroundColor: "#24AD53",
        borderColor: "#24AD53",
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: "flex-start",
        paddingVertical: 3,
    },
    incDec: {
        borderWidth: 1,
        borderColor: b3,
        borderRadius: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        width: 150,
        paddingVertical: 8,
        paddingHorizontal: 6,
    },
    incDecBtn: {
        paddingHorizontal: 6,
        paddingVertical: 6,
    },
    faq: {
        rowGap: 10,
        marginTop: 6,
        paddingHorizontal: 10,
        backgroundColor: white,
        paddingBottom: 10,
    },
    leafStand: {
        borderRadius: 2,
        borderColor: "#FAFCFF",
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: white,
    },
    booking: {
        backgroundColor: white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    bookingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#E7E7E7',
        height: 1,
        marginVertical: 2,
    },
    blueBtn: {
        borderWidth: 1,
        borderColor: blue,
        borderRadius: 2,
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    houseRules: {
        backgroundColor: white,
        paddingTop: 10,
        rowGap: 20,
    },
    rules: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#D8D8D8",
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    hr: {
        backgroundColor: '#D8D8D8',
        height: 1,
        marginVertical: 10,
    },
    box: {
        borderWidth: 1,
        borderColor: "#D8D8D8",
        borderRadius: 3,
        marginHorizontal: 20,
        paddingVertical: 8,
    },
    tfp: {
        marginBottom: 10,
    },
    tfpRule: {
        marginTop: 20,
        backgroundColor: "#EBF3FF",
        borderWidth: 1,
        borderColor: "#D8D8D8",
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 10,
        rowGap: 10,
    },
});