import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b3, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import ModifyCarSearch from './ModifyCarSearch';

const { width, height } = Dimensions.get("window");

const CarSearch = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.34} />
            <Header />

            <View style={styles.body}>
                <View style={[styles.tDetails, { zIndex: 1 }]}>
                    <ModifyCarSearch navigation={navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
};

export default CarSearch;

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
});