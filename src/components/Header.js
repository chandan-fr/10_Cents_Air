import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { blue, white } from '../config/colors';



const Header = () => {
  return (
    <View style={styles.body}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={[styles.imgWrap, { position: 'relative' }]}>
          <Image style={styles.img} source={require("../assets/icons/bell.png")} />
          <View style={styles.bellDot} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 2, alignItems: "center" }}>
        <Text style={styles.heading}>10 Cents Air</Text>
      </View>

      <View style={styles.rightWrap}>
        <TouchableOpacity style={styles.imgWrap}>
          <Image style={styles.img} source={require("../assets/icons/beacon.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.piWrap}>
          <Text style={styles.pi}>KV</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Header;

const styles = StyleSheet.create({
  body: {
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: 26,
    height: 26,
  },
  imgWrap: {
    width: 29,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  bellDot: {
    backgroundColor: blue,
    width: 12,
    height: 12,
    borderRadius: 12,
    position: "absolute",
    top: 1,
    right: 3,
  },
  pi: {
    color: white,
    fontSize: 13,
    fontFamily: 'LondonBetween',
  },
  piWrap: {
    width: 29,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: white,
  },
  heading: {
    color: white,
    fontSize: 22,
    fontFamily: 'LondonBetween',
  },
  rightWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    flex: 1,
  },
});