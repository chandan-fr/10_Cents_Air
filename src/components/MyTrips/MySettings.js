import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { white } from '../../config/colors';
import BgGradient from '../../utility/BgGradient';
import Header from '../Header';
import commonStyles from '../../assets/css/CommonFonts';

const { width, height } = Dimensions.get("window");

const MySettings = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height} />
            <Header />

            <View style={styles.body}>
                {/* heading */}
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={commonStyles.lbB1}>
                        My Settings
                    </Text>
                </View>

                <View style={{ flex: 1, borderWidth: 1 }}>
                    {/* <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={""}
                                            placeholderTextColor={b1}
                                        /> */}
                </View>
            </View>
        </SafeAreaView>
    )
};

export default MySettings;

const styles = StyleSheet.create({
    parent: { flex: 1 },
    body: {
        marginTop: 25,
        backgroundColor: "#F4F4F4",
        marginHorizontal: 4,
        borderRadius: 8,
        elevation: 3,
        minHeight: height * 0.7,
        flex: 1,
    },
});