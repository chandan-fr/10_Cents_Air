import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b3, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import HotelItem from './HotelItem';

const { width, height } = Dimensions.get("window");

const HotelSearches = ({ navigation }) => {
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.62} />
            <Header />

            <View style={styles.body}>
                {/* Travel details */}
                <View style={styles.tDetails}>
                    <Text style={[commonStyles.ns400, { color: b3, lineHeight: 20 }]}>Destination</Text>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                        <Text style={[commonStyles.ns400]}>Calgary,  23-25th Dec, 1 Adult</Text>

                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: "center" }}
                        >
                            <Image
                                style={{ width: 12, height: 12, tintColor: blue }}
                                source={icon.pencil}
                            />
                            <Text style={[commonStyles.lbB1, { fontSize: 12, color: blue }]}>Modify Date</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* hotels */}
                <View style={styles.hotelItemWrap}>
                    <Text style={[commonStyles.ns700, { fontSize: 24, textAlign: "center" }]}>
                        Hotels In Calgary
                    </Text>

                    <View style={{ borderWidth: 0, marginTop: 23 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ rowGap: 30 }}>
                                {data.map((_, i) => (
                                    <HotelItem key={i} navigation={navigation} />
                                ))}
                            </View>

                            <View style={{ marginVertical: 20, marginHorizontal: 8 }}>
                                <TouchableOpacity
                                    style={styles.viewall}
                                >
                                    <Text style={[commonStyles.lbB1, { fontSize: 22, color: blue }]}>
                                        Show More
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default HotelSearches;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 25,
        flex: 1,
    },
    tDetails: {
        backgroundColor: "#FFFEFE",
        borderRadius: 8,
        elevation: 4,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    hotelItemWrap: {
        backgroundColor: white,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 23,
        marginTop: -20,
        flex: 1,
    },
    viewall: {
        borderWidth: 2,
        borderColor: blue,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 10,
    },
});