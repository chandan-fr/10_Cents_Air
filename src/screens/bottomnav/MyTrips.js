import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { black, white } from '../../config/colors';
import Header from '../../components/Header';
import BgGradient from '../../utility/BgGradient';

const { width, height } = Dimensions.get("window");

const MyTrips = () => {
  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={width} height={height} />
      <Header />

      <View style={styles.body}>

      </View>
    </SafeAreaView>
  )
};

export default MyTrips;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    marginTop: 25,
    flex: 1,
    backgroundColor: white,
    marginHorizontal: 4,
    borderRadius: 8,
    marginBottom: 80,
  },
});