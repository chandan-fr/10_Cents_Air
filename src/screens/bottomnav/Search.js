import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';
import SearchButton from '../../components/SearchButton';
import { b3, white } from '../../config/colors';
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
        // borderWidth: 1,
    },
    headMenuWrap: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginBottom: 25,
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
});