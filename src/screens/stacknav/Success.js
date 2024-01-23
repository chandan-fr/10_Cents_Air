import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { b1, white } from '../../config/colors';

const Success = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.Wrap}>
            </View>
        </SafeAreaView>
    )
};

export default Success;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        marginTop: 30,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        color: b1,
        fontSize: 16,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 14,
    },
});