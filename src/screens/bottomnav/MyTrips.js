import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { black } from '../../config/colors';

const MyTrips = () => {
  return (
    <View style={styles.parent}>
      <Text style={{color: black}}>MyTrips</Text>
    </View>
  )
};

export default MyTrips;

const styles = StyleSheet.create({
    parent:{
        flex: 1,
        justifyContent: "center",
    },
});