import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, white, blue, } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';

const { width, height } = Dimensions.get("window");

const HotelUserDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.11} />
            <Header />

            <View style={styles.body}>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{}}
                    >
                        <View style={{ paddingVertical: 5, rowGap: 15 }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center" }]}>
                                Enter your details
                            </Text>

                            {/* user info wrapper */}
                            <View style={styles.uiWrap}>
                                {/* info */}
                                <View style={styles.info}>
                                    <Image
                                        style={{ width: 20, height: 20, marginRight: 15 }}
                                        source={icon.info}
                                    />
                                    <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                        Almost done! Just fill in the required info
                                    </Text>
                                </View>

                                {/* user info */}
                                <View style={styles.inputGrp}>
                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"First Name *"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Last Name *"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"E-mail Address *"}
                                        placeholderTextColor={b1}
                                    />

                                    <Text style={[commonStyles.ns400, { textAlign: "center" }]}>
                                        Confirmation email goes to this address
                                    </Text>
                                </View>

                                {/* address */}
                                <View style={{ rowGap: 10 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                        Your address*
                                    </Text>

                                    <View style={styles.inputGrp}>
                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Address *"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"City *"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Zipcode *"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Country/ Region*"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Mobile Number*"}
                                            placeholderTextColor={b1}
                                        />

                                        <Text style={commonStyles.ns400}>
                                            Needed by the property to validate your booking
                                        </Text>
                                    </View>

                                    <View style={{ rowGap: 10 }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                            Who are you booking for?
                                        </Text>

                                        <View style={{ rowGap: 8 }}>
                                            <TouchableOpacity
                                                style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}
                                            >
                                                <View style={styles.circle} />

                                                <Text style={commonStyles.ns400}>
                                                    I am the main guest
                                                </Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}
                                            >
                                                <View style={styles.circle} />

                                                <Text style={commonStyles.ns400}>
                                                    Booking is for someone else
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={{ rowGap: 10 }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                            Are you travelling for work?
                                        </Text>

                                        <View style={{ columnGap: 8, flexDirection: "row" }}>
                                            <TouchableOpacity
                                                style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}
                                            >
                                                <View style={styles.circle} />

                                                <Text style={commonStyles.ns400}>
                                                    Yes
                                                </Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}
                                            >
                                                <View style={styles.circle} />

                                                <Text style={commonStyles.ns400}>
                                                    No
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

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
                        onPress={() => navigation.navigate("hotelps")}
                    >
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
                            proceed
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        </SafeAreaView >
    )
};

export default HotelUserDetails;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 25,
        flex: 1,
        backgroundColor: white,
    },
    uiWrap: {
        backgroundColor: white,
        marginHorizontal: 6,
        borderRadius: 8,
        elevation: 3,
        paddingVertical: 10,
        paddingHorizontal: 15,
        rowGap: 15,
    },
    info: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#D8D8D8",
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 10,
        paddingLeft: 15,
        marginRight: 20
    },
    inputGrp: {
        rowGap: 6,
        width: width * 0.75
    },
    inputBox: {
        backgroundColor: white,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        paddingLeft: 8,
        height: 40,
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: blue,
    },
});