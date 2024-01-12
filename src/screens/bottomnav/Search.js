import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';
import SearchButton from '../../components/SearchButton';
import { b1, b3, black, blue, white } from '../../config/colors';
import OneWay from '../../components/OneWay';

const { width, height } = Dimensions.get("window");

const Search = () => {
    const [selectedHMenu, setSelectedHMenu] = useState("f");
    const [selectedMidMenu, setSelectedMidMenu] = useState("o");

    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height} />
            <Header />

            <View style={styles.body}>
                <View style={styles.headMenuWrap}>
                    <TouchableOpacity
                        style={selectedHMenu == "f" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("f")}
                    >
                        <Text style={styles.hMenuTxt}>Flights</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedHMenu == "f&h" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("f&h")}
                    >
                        <Text style={styles.hMenuTxt}>Flight + Hotels</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedHMenu == "h" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("h")}
                    >
                        <Text style={styles.hMenuTxt}>Hotels</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedHMenu == "c" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("c")}
                    >
                        <Text style={styles.hMenuTxt}>Cars</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainMenuWrap}>
                    <View style={styles.mmContWrap}>
                        <TouchableOpacity
                            style={selectedMidMenu == "o" ? styles.mmBtnActive : styles.mmBtn}
                            onPress={() => setSelectedMidMenu("o")}
                        >
                            <Text style={selectedMidMenu == "o" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                                One-way
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={selectedMidMenu == "r" ? styles.mmBtnActive : styles.mmBtn}
                            onPress={() => setSelectedMidMenu("r")}
                        >
                            <Text style={selectedMidMenu == "r" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                                Round-trip
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={selectedMidMenu == "m" ? styles.mmBtnActive : styles.mmBtn}
                            onPress={() => setSelectedMidMenu("m")}
                        >
                            <Text style={selectedMidMenu == "m" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                                Multi-city
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginHorizontal: 10, marginTop: 10, }}>
                        <OneWay />
                    </View>
                </View>

                <SearchButton />

                <View style={{ marginHorizontal: 15, marginTop: 18 }}>
                    <View style={styles.pBarWrap}>
                        <View style={styles.proLogoWrap}>
                            <Image style={{ marginHorizontal: 10 }} source={require("../../assets/icons/prologo.png")} />
                            <Text style={styles.proLogoTxt}>Welcome Back, Kevin!</Text>
                        </View>

                        <Image style={styles.arwImg} source={require("../../assets/icons/right-arrow.png")} />
                    </View>
                </View>

                <View style={{ marginHorizontal: 15, marginTop: 18 }}>
                    <View style={styles.addBarWrap}>
                        <Image style={{ marginLeft: 7 }} source={require("../../assets/icons/proimg.png")} />

                        <View>
                            <Text style={styles.addTxtB}>Looking for last-minute deals?</Text>
                            <Text style={styles.addTxt}>Speak to a travel expert and a get assistance 24/7</Text>
                        </View>

                        <TouchableOpacity style={styles.callImgWrap}>
                            <Image style={styles.callImg} source={require("../../assets/icons/mobile.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Search;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 25,
        flex: 1,
    },
    headMenuWrap: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginBottom: 15,
    },
    hMenuItemActive: {
        borderBottomWidth: 2.5,
        borderColor: white,
    },
    hMenuItem: {
        borderColor: white,
    },
    hMenuTxt: {
        color: white,
        fontFamily: "LondonBetween",
        fontSize: 15,
    },
    mainMenuWrap: {
        marginHorizontal: 7,
        backgroundColor: white,
        borderRadius: 4,
        elevation: 6,
        marginBottom: 20,
    },
    mmContWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 7,
        marginHorizontal: 5
    },
    mmBtn: {
        paddingVertical: 6,
        paddingHorizontal: 21,
    },
    mmBtnActive: {
        paddingVertical: 6,
        backgroundColor: "rgba(33, 180, 226, 0.1)",
        paddingHorizontal: 21,
        borderRadius: 4,
        borderColor: "rgba(33, 180, 226, 1)",
        borderWidth: 0.9
    },
    mmBtnTxtActive: {
        color: "rgba(33, 180, 226, 1)",
        fontFamily: 'NunitoSans_10pt-Bold',
        fontSize: 15,
    },
    mmBtnTxt: {
        color: b3,
        fontFamily: 'NunitoSans_10pt-Bold',
        fontSize: 15,
    },
    pBarWrap: {
        backgroundColor: white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: 4,
        paddingVertical: 12,
        elevation: 4,
    },
    callImg: {
        width: 26,
        height: 26,
    },
    callImgWrap: {
        width: 45,
        height: 45,
        backgroundColor: blue,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 7,
    },
    arwImg: {
        width: 20,
        height: 20,
        tintColor: b3,
        marginRight: 10
    },
    proLogoWrap: {
        flexDirection: "row",
        alignItems: "center",
    },
    proLogoTxt: {
        color: black,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 15,
        marginLeft: 15,
    },
    addBarWrap: {
        backgroundColor: white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingVertical: 12,
        elevation: 3,
    },
    addTxtB: {
        color: b1,
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 13,
        marginBottom: 5
    },
    addTxt: {
        color: b1,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 11,
    },
});