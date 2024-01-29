import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, b2, b3, green, white } from '../../../config/colors';
import image from '../../../config/ImageAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import icon from '../../../config/IconAssets';

const { width } = Dimensions.get("window");

const HotelPromoOffers = () => {
    return (
        <View style={styles.main}>
            <Image style={styles.img} resizeMode='cover' source={image.hotelimg} />

            <View style={{}}>
                <View style={{}}>
                    <View style={{ rowGap: 6 }}>
                        <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                            DoubleTree by Hilton Hotel & Suites
                        </Text>

                        {/* star */}
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image
                                style={{ width: 15, height: 15, marginRight: 3 }}
                                source={icon.star}
                            />
                            <Image
                                style={{ width: 15, height: 15, marginRight: 3 }}
                                source={icon.star}
                            />
                            <Image
                                style={{ width: 15, height: 15, marginRight: 3 }}
                                source={icon.star}
                            />
                        </View>

                        {/* location */}
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image
                                style={{ tintColor: b1, width: 15, height: 15, marginRight: 6 }}
                                source={icon.location}
                            />

                            <Text style={[commonStyles.ns600, { color: b1, fontSize: 14 }]}>
                                New York
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    $631
                                </Text>
                                <Text style={{ color: b1, fontSize: 12, alignSelf: "flex-start", fontFamily: "Arial", top: 3 }}>
                                    .39
                                </Text>
                            </View>

                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 14, marginTop: 5 }]}>
                                Hotel (incl. taxes & fees)
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.btn}
                        >
                            <Text style={[commonStyles.lbB1, { color: white }]}>
                                Book
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default HotelPromoOffers;

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 20,
        marginTop: 10,
    },
    img: {
        width: width - 96,
    },
    moneyRangeTxt: {
        color: b3,
        fontSize: 15,
        fontFamily: "Arial"
    },
    moneyRangeTxtWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    },
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
});