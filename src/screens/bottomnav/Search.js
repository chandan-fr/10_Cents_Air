import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { black } from '../../config/colors';
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';
import SearchButton from '../../components/SearchButton';

const { width, height } = Dimensions.get("window");

const Search = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height} />
            <Header />

            <View style={{flex: 1}}>

            </View>
            <SearchButton />

        </SafeAreaView>
    )
};

export default Search;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },

});