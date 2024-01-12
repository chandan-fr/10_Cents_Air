import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, b3, blue, w1 } from '../config/colors';

const OneWay = () => {
    return (
        <View style={styles.main}>
            <View style={styles.topWrap}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>From</Text>

                    <TouchableOpacity>
                        <Text style={styles.midTxt}>Enter Location</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>Origin</Text>
                </View>

                <TouchableOpacity style={styles.imgWrap}>
                    <Image style={styles.img} source={require("../assets/icons/exchange.png")} />
                </TouchableOpacity>

                <View style={styles.right}>
                    <Text style={styles.tbTxt}>Destination</Text>

                    <TouchableOpacity>
                        <Text style={styles.midTxt}>Enter Location</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>Destination</Text>
                </View>
            </View>

            <View style={styles.btmBrdr} />

            <View style={{ marginTop: 7, alignItems: 'flex-start' }}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>Depart</Text>

                    <TouchableOpacity>
                        <Text style={styles.midTxt}>Enter Location</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>Day</Text>
                </View>
            </View>

            <View style={styles.btmBrdr} />

            <View style={{ marginTop: 7 }}>
                <View style={styles.topWrap}>
                    <View style={styles.left}>
                        <Text style={styles.tbTxt}>Travellers</Text>

                        <TouchableOpacity>
                            <Text style={styles.midTxt}>1 Audult</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.right}>
                        <View style={{flexDirection: 'row', alignItems: "center" }}>
                            <Text style={styles.tbTxt}>Class</Text>
                            <Image style={styles.imgCls} source={require("../assets/icons/right-arrow.png")} />
                        </View>

                        <TouchableOpacity>
                            <Text style={styles.midTxt}>Class</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default OneWay;

const styles = StyleSheet.create({
    main: {
        // borderWidth: 1,
    },
    topWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img: {
        width: 20,
        height: 20,
        tintColor: blue,
    },
    imgWrap: {
        width: 28,
        height: 28,
        backgroundColor: w1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tbTxt: {
        color: b3,
        fontFamily: 'NunitoSans_10pt-Regular',
        fontSize: 13,
    },
    midTxt: {
        color: b1,
        fontFamily: 'NunitoSans_10pt-Bold',
        fontSize: 18,
        marginVertical: 8,
    },
    left: {
        // borderWidth: 1
    },
    right: {
        alignItems: "flex-end",
        // borderWidth: 1
    },
    btmBrdr: {
        backgroundColor: b3,
        height: 2,
        marginVertical: 5
    },
    imgCls:{
        width: 10,
        height: 10,
        transform:[{rotate: "90deg"}],
        tintColor: b3,
        marginLeft: 4
    },
});