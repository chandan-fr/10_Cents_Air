import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { black } from '../../config/colors';
import LinearGradient from 'react-native-linear-gradient';

const Search = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <LinearGradient>
                
            </LinearGradient>
        </SafeAreaView>
    )
};

export default Search;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
});