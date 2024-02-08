import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';
import { white } from '../../config/colors';
import Flights from '../../components/Search/Flights/Flights';
import Hotels from '../../components/Search/Hotels/Hotels';
import Cars from '../../components/Search/Cars/Cars';
import GroupTickets from '../../components/Search/GroupTickets/GroupTickets';

const { width, height } = Dimensions.get("window");

const Search = ({ navigation }) => {
    const [selectedHMenu, setSelectedHMenu] = useState("f");
    const data = [1, 1, 1, 1, 1];

    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.62} />
            <Header />

            <View style={styles.body}>
                {/* booking nav bar */}
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

                {/* extra nav bar */}
                <View style={[styles.headMenuWrap, { marginHorizontal: 100 }]}>
                    <TouchableOpacity
                        style={selectedHMenu == "hp" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("hp")}
                    >
                        <Text numberOfLines={2} style={[styles.hMenuTxt, { width: 60, textAlign: "center" }]}>
                            Holiday Packages
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedHMenu == "gt" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("gt")}
                    >
                        <Text numberOfLines={2} style={[styles.hMenuTxt, { width: 50, textAlign: "center" }]}>
                            Group Tickets
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Flights */}
                {selectedHMenu === "f" && <Flights navigation={navigation} data={data} width={width} height={height} />}

                {/* Flights + hotels */}
                {/* {selectedHMenu === "f&h" && <FlightsHtls navigation={navigation} data={data} width={width} height={height} />} */}

                {/* hotels */}
                {selectedHMenu === "h" && <Hotels navigation={navigation} data={data} width={width} height={height} />}

                {/* cars */}
                {selectedHMenu === "c" && <Cars navigation={navigation} />}

                {/* holiday packages */}
                {/* {selectedHMenu === "hp" && <HolidayPacks navigation={navigation} />} */}

                {/* group tickets */}
                {selectedHMenu === "gt" && <GroupTickets navigation={navigation} data={data} width={width} height={height} />}
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
});