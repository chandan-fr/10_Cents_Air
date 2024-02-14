import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b2, b3, blue, gs1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import { Dropdown } from 'react-native-element-dropdown';

const { width, height } = Dimensions.get("window");

const FhFinalReview = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar translucent={true} barStyle={"light-content"} />
      <BgGradient width={width} height={height * 0.1} />
      <Header />

      <View style={styles.body}>
        <ScrollView
          style={{ marginHorizontal: 5, marginTop: 10, flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ rowGap: 10 }}>
            {/* ticket */}
            <View style={styles.comWrap}>
              {/* hotel name */}
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', columnGap: 15 }}>
                {/* left */}
                <Image
                  style={{ width: 100, height: 65 }}
                  source={image.hotelimg2}
                />

                {/* right */}
                <View style={{ flex: 1, rowGap: 6 }}>
                  <Text style={[commonStyles.ns400]}>
                    New Apartments in Cranston by GLOBALSTAY
                  </Text>
                  <Text style={[commonStyles.ns400, { color: b3 }]}>
                    Thu, Dec-21-2023 - Thu, Jan-04-2024
                  </Text>

                  {/* btn action */}
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                    <TouchableOpacity>
                      <Text style={[commonStyles.ns400, { color: blue, fontSize: 12 }]}>
                        Change Hotel
                      </Text>
                    </TouchableOpacity>

                    <Text>|</Text>

                    <TouchableOpacity>
                      <Text style={[commonStyles.ns400, { color: blue, fontSize: 12 }]}>
                        View Details
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* depart/ return */}
              <View style={{ rowGap: 10 }}>
                {/* depart */}
                <View style={styles.depart}>
                  <Text style={[commonStyles.ns400, { textAlignVertical: "bottom", marginBottom: 14 }]}>
                    Depart
                  </Text>

                  <Text style={[commonStyles.ns400, { fontSize: 12, textAlignVertical: "bottom", marginBottom: 14 }]}>
                    1:00 am (DAC)
                  </Text>

                  <View style={{ rowGap: 6 }}>
                    <Text style={[commonStyles.ns400, { fontSize: 12, textAlign: 'center' }]}>
                      1d 09h 45m
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 18 }}>
                      <Text style={[commonStyles.ns400, styles.topDest]}>BOM</Text>
                      <View style={styles.dLine} />
                      <View style={styles.diamond} />
                      <View style={[styles.dLine, { width: 20 }]} />
                      <View style={styles.diamond} />
                      <View style={styles.dLine} />
                      <Text style={[commonStyles.ns400, styles.bottomDest]}>LHR</Text>
                    </View>
                  </View>

                  <View style={{ rowGap: 10, justifyContent: "flex-end", alignItems: "flex-end" }}>
                    <Text style={[commonStyles.ns400, { fontSize: 13, color: "#7F5F01" }]}>
                      next day
                    </Text>

                    <Text style={[commonStyles.ns400, { fontSize: 12, marginBottom: 14 }]}>
                      9:45 aM(YYC)
                    </Text>
                  </View>
                </View>

                {/* return */}
                <View style={styles.depart}>
                  <Text style={[commonStyles.ns400, { textAlignVertical: "bottom", marginBottom: 14 }]}>
                    Return
                  </Text>

                  <Text style={[commonStyles.ns400, { fontSize: 12, textAlignVertical: "bottom", marginBottom: 14 }]}>
                    9:55 am (YYC)
                  </Text>

                  <View style={{ rowGap: 6 }}>
                    <Text style={[commonStyles.ns400, { fontSize: 12, textAlign: 'center' }]}>
                      2d 00h 05m
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 18 }}>
                      <Text style={[commonStyles.ns400, styles.topDest]}>LHR</Text>
                      <View style={styles.dLine} />
                      <View style={styles.diamond} />
                      <View style={[styles.dLine, { width: 20 }]} />
                      <View style={styles.diamond} />
                      <View style={styles.dLine} />
                      <Text style={[commonStyles.ns400, styles.bottomDest]}>DEL</Text>
                    </View>
                  </View>

                  <View style={{ rowGap: 10, justifyContent: "flex-end", alignItems: "flex-end" }}>
                    <Text style={[commonStyles.ns400, { fontSize: 13, color: "#7F5F01" }]}>
                      +2 days
                    </Text>

                    <Text style={[commonStyles.ns400, { fontSize: 12, marginBottom: 14 }]}>
                      10:45 aM(DAC)
                    </Text>
                  </View>
                </View>
              </View>

              {/* pricing */}
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", columnGap: 30 }}>
                {/* left */}
                <View style={{ rowGap: 6, width: 160 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 20 }]}>Package Price</Text>
                  <Text style={[commonStyles.ns400, { color: b3 }]}>Per person</Text>
                  <Text style={[commonStyles.ns400, { color: b3 }]}>Flight + Hotel(incl. taxes & fees)</Text>
                </View>

                {/* right */}
                <View style={{ alignItems: "flex-end", width: 150, rowGap: 6 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                      $2811
                    </Text>
                    <Text style={[commonStyles.ns400, { fontSize: 11, top: 1 }]}>
                      .49
                    </Text>
                  </View>

                  <Text style={[commonStyles.ns400, { fontSize: 12, textAlign: "right" }]}>
                    As low as $351/mo with Affirm <Text style={[commonStyles.lbB1, { fontSize: 12, color: blue, textDecorationLine: "underline" }]} onPress={() => Alert.alert("Learn More")}>Learn more</Text>
                  </Text>

                  {/* btn */}
                  <TouchableOpacity
                    style={styles.btn}
                  >
                    <Text style={[commonStyles.lbB1, { color: white, fontSize: 18 }]}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* baggage */}
            <View style={styles.comWrap}>
              {/* skip */}
              <TouchableOpacity style={{ alignSelf: "flex-start", marginLeft: 10 }}>
                <Text style={[commonStyles.ns600, { fontSize: 18, color: blue }]}>
                  Skip
                </Text>
              </TouchableOpacity>

              <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center" }]}>
                Baggage Information (per person)
              </Text>

              {/* bag info */}
              <View style={{ rowGap: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>Departure Flight</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>DAC</Text>
                  <Image
                    style={{ width: 30, height: 15 }}
                    source={icon.longArrow}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>YYC</Text>
                </View>

                <View style={{ flexDirection: 'row', columnGap: 4, alignItems: "center" }}>
                  <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                    Vistara
                  </Text>

                  <Text style={[commonStyles.ns700, { fontSize: 16 }]}>|</Text>

                  <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                    Cabin : <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Coach</Text>
                  </Text>

                  <Text style={[commonStyles.ns700, { fontSize: 16 }]}>|</Text>

                  <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                    Brand Name : <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Flex</Text>
                  </Text>
                </View>
              </View>

              {/* bags details */}
              <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", columnGap: 15 }}>
                {/* personal bag */}
                <View style={{ rowGap: 10, flex: 1 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                    <View style={[styles.seatWrap, { width: 20, height: 20 }]}>
                      <Image
                        style={{ width: 15, height: 15, tintColor: blue }}
                        source={icon.backpack}
                      />
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                      Personal Item
                    </Text>
                  </View>

                  <View style={{ rowGap: 6, marginLeft: 24 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 10 }]}>
                      Purse, small backpack, briefcase
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                      <Image
                        style={{ width: 10, height: 10, tintColor: "#24AD53" }}
                        source={icon.check}
                      />
                      <Text style={[commonStyles.ns600, { fontSize: 10 }]}>Included</Text>
                    </View>
                  </View>
                </View>

                {/* carry-on bag */}
                <View style={{ rowGap: 10, flex: 1 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                    <View style={[styles.seatWrap, { width: 20, height: 20 }]}>
                      <Image
                        style={{ width: 15, height: 15, tintColor: blue }}
                        source={icon.duffleBag}
                      />
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                      Carry-on bag
                    </Text>
                  </View>

                  <View style={{ rowGap: 6, marginLeft: 24 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 10 }]}>
                      Fits in overhead bin or under the seat
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                      <Image
                        style={{ width: 10, height: 10, tintColor: "#24AD53" }}
                        source={icon.check}
                      />
                      <Text style={[commonStyles.ns600, { fontSize: 10 }]}>Included</Text>
                    </View>
                  </View>
                </View>

                {/* bag */}
                <View style={{ rowGap: 10, flex: 1 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                    <View style={[styles.seatWrap, { width: 20, height: 20 }]}>
                      <Image
                        style={{ width: 16, height: 16, tintColor: blue }}
                        source={icon.baggage}
                      />
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                      2 Checked Bags
                    </Text>
                  </View>

                  <View style={{ rowGap: 6, marginLeft: 24 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                      <Image
                        style={{ width: 10, height: 10, tintColor: "#24AD53" }}
                        source={icon.check}
                      />
                      <Text style={[commonStyles.ns600, { fontSize: 10 }]}>Included</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/*  */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 15 }}>
                <TouchableOpacity>
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>Air Canada</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>Baggage Policy</Text>
                </TouchableOpacity>
              </View>

              {/* bag info */}
              <View style={{ rowGap: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>Return Flight</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>YYC</Text>
                  <Image
                    style={{ width: 30, height: 15 }}
                    source={icon.longArrow}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>DAC</Text>
                </View>

                <View style={{ flexDirection: 'row', columnGap: 4, alignItems: "center" }}>
                  <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                    Vistara
                  </Text>

                  <Text style={[commonStyles.ns700, { fontSize: 16 }]}>|</Text>

                  <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                    Cabin : <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Coach</Text>
                  </Text>

                  <Text style={[commonStyles.ns700, { fontSize: 16 }]}>|</Text>

                  <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                    Brand Name : <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Flex</Text>
                  </Text>
                </View>
              </View>

              {/* bags details */}
              <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", columnGap: 15 }}>
                {/* personal bag */}
                <View style={{ rowGap: 10, flex: 1 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                    <View style={[styles.seatWrap, { width: 20, height: 20 }]}>
                      <Image
                        style={{ width: 15, height: 15, tintColor: blue }}
                        source={icon.backpack}
                      />
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                      Personal Item
                    </Text>
                  </View>

                  <View style={{ rowGap: 6, marginLeft: 24 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 10 }]}>
                      Purse, small backpack, briefcase
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                      <Image
                        style={{ width: 10, height: 10, tintColor: "#24AD53" }}
                        source={icon.check}
                      />
                      <Text style={[commonStyles.ns600, { fontSize: 10 }]}>Included</Text>
                    </View>
                  </View>
                </View>

                {/* carry-on bag */}
                <View style={{ rowGap: 10, flex: 1 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                    <View style={[styles.seatWrap, { width: 20, height: 20 }]}>
                      <Image
                        style={{ width: 15, height: 15, tintColor: blue }}
                        source={icon.duffleBag}
                      />
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                      Carry-on bag
                    </Text>
                  </View>

                  <View style={{ rowGap: 6, marginLeft: 24 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 10 }]}>
                      Fits in overhead bin or under the seat
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                      <Image
                        style={{ width: 10, height: 10, tintColor: "#24AD53" }}
                        source={icon.check}
                      />
                      <Text style={[commonStyles.ns600, { fontSize: 10 }]}>Included</Text>
                    </View>
                  </View>
                </View>

                {/* bag */}
                <View style={{ rowGap: 10, flex: 1 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                    <View style={[styles.seatWrap, { width: 20, height: 20 }]}>
                      <Image
                        style={{ width: 16, height: 16, tintColor: blue }}
                        source={icon.baggage}
                      />
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                      2 Checked Bags
                    </Text>
                  </View>

                  <View style={{ rowGap: 6, marginLeft: 24 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                      <Image
                        style={{ width: 10, height: 10, tintColor: "#24AD53" }}
                        source={icon.check}
                      />
                      <Text style={[commonStyles.ns600, { fontSize: 10 }]}>Included</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/*  */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 15 }}>
                <TouchableOpacity>
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>Air Canada</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>Baggage Policy</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* traveller details */}
            <View style={styles.comWrap}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                {/* skip */}
                <TouchableOpacity style={{ alignSelf: "flex-start", marginLeft: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 18, color: blue }]}>
                    Skip
                  </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 4, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                    Already a ClubMiles member?
                  </Text>

                  <View style={{ backgroundColor: blue, alignItems: 'center', justifyContent: 'center', padding: 3, borderRadius: 15 }}>
                    <Image
                      style={{ width: 10, height: 10, tintColor: white }}
                      source={icon.user}
                    />
                  </View>

                  <TouchableOpacity>
                    <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={[commonStyles.ns600, { fontSize: 22, textAlign: "center" }]}>
                Traveler Details
              </Text>

              <View style={{ borderColor: "#004266", borderWidth: 1, borderRadius: 4, padding: 10 }}>
                <Text style={[commonStyles.ns600, { fontSize: 14, color: "#004266" }]}>
                  Please enter the traveler's name and date of birth exactly as shown on the passport (for international flights) or valid government-issued photo ID (for domestic flights) to be used on this trip. Name changes are not permitted after booking.
                </Text>
              </View>

              <View style={{ borderColor: "#E5AA01", borderWidth: 1, borderRadius: 4, padding: 10 }}>
                <Text style={[commonStyles.ns600, { fontSize: 14, color: "#664C00" }]}>
                  Before booking your flight, please check the latest <Text style={[commonStyles.ns700, { fontSize: 14, color: "#664C00" }]}>
                    COVID-19 travel restrictions to Canada
                  </Text>
                </Text>

                <Text style={[commonStyles.ns600, { fontSize: 14, color: "#664C00" }]}>
                  Please continuously check all COVID-19 related restrictions directly with airlines prior to travel as they may change
                </Text>

                <View style={{ marginTop: 30, marginHorizontal: 50 }}>
                  <TouchableOpacity
                    style={{ borderColor: "#6C5100", borderWidth: 1, borderRadius: 4, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}
                  >
                    <Text style={[commonStyles.lbB1, { fontSize: 18, color: "#664C00" }]}>
                      See Restrictions
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* input fields */}
              <View style={{ rowGap: 10 }}>
                {/* email */}
                <View style={styles.inputGrp}>
                  <Text style={[commonStyles.ns600, styles.lable]}>
                    Email Address*
                  </Text>
                  <TextInput
                    style={styles.inputBox}
                  />
                </View>

                {/* first name & middle name */}
                <View style={{ alignItems: 'flex-start', flexDirection: 'row', columnGap: 10 }}>
                  <View style={[styles.inputGrp, { width: 160 }]}>
                    <Text style={[commonStyles.ns600, styles.lable]}>
                      First Name*
                    </Text>

                    <TextInput
                      style={[styles.inputBox]}
                    />
                  </View>

                  <View style={[styles.inputGrp, { width: 160 }]}>
                    <Text style={[commonStyles.ns600, styles.lable]}>
                      Middle Name*
                    </Text>

                    <TextInput
                      style={[styles.inputBox, { flex: 1 }]}
                    />
                  </View>
                </View>

                {/* date of birth */}
                <View style={[styles.inputGrp, { width: 300 }]}>
                  <Text style={[commonStyles.ns600, styles.lableActive]}>
                    Date of birth*
                  </Text>

                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                    <Dropdown
                      data={[]}
                      placeholder='DD'
                      placeholderStyle={[commonStyles.ns600, { fontSize: 14, color: b3 }]}
                      style={styles.dropDownBox}
                    />
                    <Dropdown
                      data={[]}
                      placeholder='MM'
                      placeholderStyle={[commonStyles.ns600, { fontSize: 14, color: b3 }]}
                      style={styles.dropDownBox}
                    />
                    <Dropdown
                      data={[]}
                      placeholder='YYYY'
                      placeholderStyle={[commonStyles.ns600, { fontSize: 14, color: b3 }]}
                      style={styles.dropDownBox}
                    />
                  </View>
                </View>

                {/* last name & gender */}
                <View style={{ alignItems: 'flex-start', flexDirection: 'row', columnGap: 10 }}>
                  <View style={[styles.inputGrp, { width: 160 }]}>
                    <Text style={[commonStyles.ns600, styles.lable]}>
                      Last Name*
                    </Text>

                    <TextInput
                      style={[styles.inputBox]}
                    />
                  </View>

                  <View style={[styles.inputGrp, { width: 140 }]}>
                    <Text style={[commonStyles.ns600, styles.lableActive]}>
                      Gender*
                    </Text>

                    <Dropdown
                      data={[]}
                      placeholder='Select'
                      placeholderStyle={[commonStyles.ns600, { fontSize: 14, color: b3 }]}
                      style={styles.dropDownBox}
                    />
                  </View>
                </View>

                {/* passport */}
                <View style={[styles.inputGrp, { width: 270 }]}>
                  <Text style={[commonStyles.ns600, styles.lable]}>
                    Passport Number*
                  </Text>
                  <TextInput
                    style={styles.inputBox}
                  />
                </View>

                {/* Country */}
                <View style={[styles.inputGrp, { width: 250 }]}>
                  <Text style={[commonStyles.ns600, styles.lable]}>
                    Country*
                  </Text>
                  <TextInput
                    style={styles.inputBox}
                  />
                </View>

                {/* date of birth */}
                <View style={[styles.inputGrp, { width: 300 }]}>
                  <Text style={[commonStyles.ns600, styles.lableActive]}>
                    Passport Expiry*
                  </Text>

                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                    <Dropdown
                      data={[]}
                      placeholder='Day'
                      placeholderStyle={[commonStyles.ns600, { fontSize: 14, color: b3 }]}
                      style={styles.dropDownBox}
                    />
                    <Dropdown
                      data={[]}
                      placeholder='Month'
                      placeholderStyle={[commonStyles.ns600, { fontSize: 14, color: b3 }]}
                      style={styles.dropDownBox}
                    />
                    <Dropdown
                      data={[]}
                      placeholder='Year'
                      placeholderStyle={[commonStyles.ns600, { fontSize: 14, color: b3 }]}
                      style={styles.dropDownBox}
                    />
                  </View>
                </View>
              </View>

              <View style={{ alignItems: "flex-start", marginTop: 10 }}>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: 'center', columnGap: 8 }}
                >
                  <Text style={[commonStyles.ns600, { color: blue }]}>
                    Frequent Flyer and Optional Requests
                  </Text>

                  <Image
                    style={{ width: 16, height: 16, tintColor: blue, transform: [{ rotate: "90deg" }] }}
                    source={icon.rightArrow}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* travel protection */}
            <View style={styles.comWrap}>
              {/* skip */}
              <TouchableOpacity style={{ alignSelf: "flex-start", marginLeft: 10 }}>
                <Text style={[commonStyles.ns600, { fontSize: 18, color: blue }]}>
                  Skip
                </Text>
              </TouchableOpacity>

              <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center" }]}>
                Travel Protection
              </Text>

              <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 8 }}>
                <Image
                  style={{ width: 25, height: 25, tintColor: "#435970" }}
                  source={icon.shield}
                />
                <Text style={[commonStyles.ns600]}>
                  Reasons you might need travel protection
                </Text>
              </View>

              {/* coverages */}
              <View style={{ flexDirection: "row", columnGap: 20, alignItems: "flex-start" }}>
                {/* left */}
                <View style={{ flex: 1, rowGap: 8 }}>
                  <View style={{ flexDirection: "row", alignItems: 'flex-start', columnGap: 5 }}>
                    <Image
                      style={{ width: 12, height: 12, tintColor: gs1, marginTop: 3 }}
                      source={icon.check}
                    />
                    <Text style={[commonStyles.ns600, { color: b3, fontSize: 12, flex: 1 }]}>
                      Trip Cancellation, up to Total Trip Cost
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: 'flex-start', columnGap: 5 }}>
                    <Image
                      style={{ width: 12, height: 12, tintColor: gs1, marginTop: 3 }}
                      source={icon.check}
                    />
                    <Text style={[commonStyles.ns600, { color: b3, fontSize: 12, flex: 1 }]}>
                      Trip Interruption, up to Total Trip Cost
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: 'flex-start', columnGap: 5 }}>
                    <Image
                      style={{ width: 12, height: 12, tintColor: gs1, marginTop: 3 }}
                      source={icon.check}
                    />
                    <Text style={[commonStyles.ns600, { color: b3, fontSize: 12, flex: 1 }]}>
                      Up to $2,000 Travel Delay, including
                      delays relating to quarantine
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: 'flex-start', columnGap: 5 }}>
                    <Image
                      style={{ width: 12, height: 12, tintColor: gs1, marginTop: 3 }}
                      source={icon.check}
                    />
                    <Text style={[commonStyles.ns600, { color: b3, fontSize: 12, flex: 1 }]}>
                      Up to $50,000 Medical Expense, covers COVID the same as any sickness
                    </Text>
                  </View>
                </View>

                {/* right */}
                <View style={{ flex: 1, rowGap: 8 }}>
                  <View style={{ flexDirection: "row", alignItems: 'flex-start', columnGap: 5 }}>
                    <Image
                      style={{ width: 12, height: 12, tintColor: gs1, marginTop: 3 }}
                      source={icon.check}
                    />
                    <Text style={[commonStyles.ns600, { color: b3, fontSize: 12, flex: 1 }]}>
                      Up to $50,000 Emergency Evacuation, including to locate suitable COVID treatment
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: 'flex-start', columnGap: 5 }}>
                    <Image
                      style={{ width: 12, height: 12, tintColor: gs1, marginTop: 3 }}
                      source={icon.check}
                    />
                    <Text style={[commonStyles.ns600, { color: b3, fontSize: 12, flex: 1 }]}>
                      Up to $100,000 Accidental Death and Dismemberment
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: 'flex-start', columnGap: 5 }}>
                    <Image
                      style={{ width: 12, height: 12, tintColor: gs1, marginTop: 3 }}
                      source={icon.check}
                    />
                    <Text style={[commonStyles.ns600, { color: b3, fontSize: 12, flex: 1 }]}>
                      Lost Baggage, up to $1,000
                    </Text>
                  </View>
                </View>
              </View>

              <Text style={commonStyles.ns600}>
                Important
              </Text>

              <Text style={[commonStyles.ns600, { fontSize: 12, color: b3 }]}>
                * Please note, cancellation of a trip due to government travel advisories or desire not to travel are not covered. View Plan Details to <Text style={[commonStyles.ns600, { fontSize: 12, color: blue, textDecorationLine: "underline" }]} onPress={() => Alert.alert("Learn More")}>Learn More</Text>.
              </Text>

              <View>
                <TouchableOpacity>
                  <Text style={[commonStyles.ns600, { color: blue, textDecorationLine: "underline" }]}>
                    View Plan Details and Important Disclaimers (Non-insurance services and assistance fees included in the total travel protection plan cost). Terms and Conditions Apply
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={commonStyles.ns600}>
                    USD 267
                  </Text>
                  <Text style={[commonStyles.ns600, { fontSize: 11, top: 1 }]}>
                    .95
                  </Text>
                </View>

                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                  per person
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8, alignSelf: "flex-start", backgroundColor: "#FEF6F4", paddingVertical: 10, paddingHorizontal: 25, borderRadius: 4 }}>
                <TouchableOpacity>
                  <View style={styles.circle} />
                </TouchableOpacity>

                <Text style={[commonStyles.ns600, { fontSize: 15 }]}>
                  Yes, I want travel protection for my trip
                </Text>
              </View>
            </View>

            {/* Billing and Contact Information */}
            <View style={styles.comWrap}>
              {/* skip */}
              <TouchableOpacity style={{ alignSelf: "flex-start", marginLeft: 10 }}>
                <Text style={[commonStyles.ns600, { fontSize: 18, color: blue }]}>
                  Skip
                </Text>
              </TouchableOpacity>

              <Text style={[commonStyles.ns700, { textAlign: "center" }]}>
                Billing and Contact Information
              </Text>

              {/* inputs */}
              <View style={{ rowGap: 10 }}>
                {/* country & address */}
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10, }}>
                  <View style={[styles.inputGrp, { flex: 1 }]}>
                    <Text style={[commonStyles.ns600, styles.lableActive]}>
                      Country*
                    </Text>
                    <TextInput
                      style={[styles.inputBox, commonStyles.ns600]}
                      value='United States'
                    />
                  </View>

                  <View style={[styles.inputGrp, { flex: 1.4 }]}>
                    <Text style={[commonStyles.ns600, styles.lable]}>
                      Address*
                    </Text>
                    <TextInput
                      style={[styles.inputBox, commonStyles.ns600]}
                    />
                  </View>
                </View>

                {/* city & zip & state */}
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10, }}>
                  <View style={[styles.inputGrp, { flex: 1 }]}>
                    <Text style={[commonStyles.ns600, styles.lable]}>
                      Zip*
                    </Text>
                    <TextInput
                      style={[styles.inputBox, commonStyles.ns600]}
                      keyboardType='number-pad'
                    />
                  </View>

                  <View style={[styles.inputGrp, { flex: 1 }]}>
                    <Text style={[commonStyles.ns600, styles.lable]}>
                      City*
                    </Text>
                    <TextInput
                      style={[styles.inputBox, commonStyles.ns600]}
                    />
                  </View>

                  <View style={[styles.inputGrp, { flex: 1 }]}>
                    <Text style={[commonStyles.ns600, styles.lableActive]}>
                      State*
                    </Text>
                    <TextInput
                      style={[styles.inputBox, commonStyles.ns600]}
                      value='State*'
                    />
                  </View>
                </View>

                {/* Contact */}
                <View style={styles.inputGrp}>
                  <Text style={[commonStyles.ns600, styles.lable]}>
                    Contact Phone*
                  </Text>
                  <TextInput
                    style={[styles.inputBox, commonStyles.ns600]}
                    keyboardType='number-pad'
                  />
                </View>

                {/* Confirm Email */}
                <View style={styles.inputGrp}>
                  <Text style={[commonStyles.ns600, styles.lable]}>
                    Confirm Email Address*
                  </Text>
                  <TextInput
                    style={[styles.inputBox, commonStyles.ns600]}
                    keyboardType='email-address'
                  />
                </View>
              </View>

              <View style={{ rowGap: 30 }}>
                <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>
                  Booking confirmation will be sent to this email address
                </Text>

                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 15, alignSelf: "flex-start" }}>
                  <TouchableOpacity>
                    <View style={styles.circle} />
                  </TouchableOpacity>

                  <Text style={[commonStyles.ns600, { fontSize: 15, flex: 1 }]}>
                    I agree to share this contact information with the airline(s) associated with this booking.
                  </Text>
                </View>
              </View>
            </View>

            {/* Policies & Review */}
            <View style={styles.comWrap}>
              {/* skip */}
              <TouchableOpacity style={{ alignSelf: "flex-start", marginLeft: 10 }}>
                <Text style={[commonStyles.ns600, { fontSize: 18, color: blue }]}>
                  Skip
                </Text>
              </TouchableOpacity>

              <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                Policies & Review
              </Text>

              {/* hotel cancel */}
              <Text style={[commonStyles.ns600, { color: "#DF1414" }]}>
                Hotel Cancellations
              </Text>

              <Text style={commonStyles.ns400}>
                The guest checking into hotel must be 21 years or older, present a valid government-issued photo ID and credit card. Please confirm that the dates of your accommodations are correct. Presence of primary guest is mandatory at the time of check-in.
              </Text>

              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                Check-in Fri. Dec-22-2023 | Check-out Thu. Jan-04-2024
              </Text>

              <Text style={commonStyles.ns600}>
                Primary Guest Name :
                Kevin Vo
                Male
              </Text>

              <TouchableOpacity
                style={{ alignSelf: "flex-start" }}
              >
                <Text style={[commonStyles.ns600, { fontSize: 17, color: blue, textDecorationLine: "underline" }]}>
                  Make changes
                </Text>
              </TouchableOpacity>

              {/* flight cancell */}
              <Text style={[commonStyles.ns600, { color: "#DF1414" }]}>
                Flight Cancellations
              </Text>

              <Text style={commonStyles.ns400}>
                Please confirm that the date(s) and time(s) of flights and name(s) of travelers are accurate. Each traveler's name and date of birth must be exactly as shown on the passport or other government-issued photo ID to be used on this trip.
              </Text>

              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                Depart: Thu, Dec 21 2023 | Return: Thu, Jan 04 2024
              </Text>

              <Text style={commonStyles.ns600}>
                Traveller 1 :
                Kevin Vo
                Male
              </Text>

              <TouchableOpacity
                style={{ alignSelf: "flex-start" }}
              >
                <Text style={[commonStyles.ns600, { fontSize: 17, color: blue, textDecorationLine: "underline" }]}>
                  Make changes
                </Text>
              </TouchableOpacity>

              {/* note */}
              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                Please note: <Text style={[commonStyles.ns400, { color: b3 }]}>
                  All rates quoted are USD. Please keep in mind that, in the event of cancellation, any booking fees already paid are non-refundable. Your credit/debit card may be billed in multiple charges totaling the above amount.
                </Text>
              </Text>

              <View style={styles.dottedLine} />

              <Text style={commonStyles.ns400}>
                Tickets are non-transferable and name changes are not permitted. Total price shown includes all applicable taxes & fees and our service fees. Some airlines may charge additional baggage fees or other fees. Fares are not guaranteed until ticketed. Tickets and our fees are non-refundable (see Fare Rules). Some taxes and government agency fees may be non-refundable.Date and routing changes will be subject to airline penalties and our fees.
              </Text>

              <View style={styles.dottedLine} />

              <Text style={[commonStyles.ns400, { textAlign: "center" }]}>
                By clicking 'Confirm & Book', I agree that I have read and accepted the above policies and 10 Cents Air.com's Terms and Conditions and Privacy Policy
              </Text>

              {/* Confirm & Book */}
              <View style={{ marginTop: 20, marginHorizontal: 30 }}>
                <TouchableOpacity
                  style={styles.btnLrg}
                  onPress={() => navigation.navigate("fhpayment")}
                >
                  <Text style={[commonStyles.lbB1, { color: white }]}>
                    Confirm & Book
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* PROCEED */}
        {/* <View style={{ backgroundColor: b1, alignItems: "center", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 10, flexDirection: "row" }}>
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
            onPress={() => navigation.navigate("fhfr")}
          >
            <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View> */}
      </View >
    </SafeAreaView >
  )
};

export default FhFinalReview;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    marginTop: 18,
    flex: 1,
  },
  comWrap: {
    backgroundColor: white,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 4,
    rowGap: 15,
  },
  depart: {
    flexDirection: "row",
    columnGap: 10,
  },
  dLine: {
    backgroundColor: b3,
    height: 1.9,
    width: 30,
  },
  diamond: {
    width: 7,
    height: 7,
    backgroundColor: b3,
    transform: [{ rotate: "45deg" }],
  },
  topDest: {
    fontSize: 8,
    color: b3,
    position: "absolute",
    top: 0,
    left: 25
  },
  bottomDest: {
    fontSize: 8,
    color: b3,
    position: "absolute",
    bottom: 0,
    right: 25
  },
  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    width: "100%"
  },
  seatWrap: {
    backgroundColor: "rgba(33, 180, 226, 0.1)",
    borderRadius: 22,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    height: 40,
    paddingLeft: 5,
  },
  dropDownBox: {
    height: 40,
    paddingLeft: 5,
    flex: 1,
  },
  inputGrp: {
    borderWidth: 1,
    borderColor: "#D8D8D8",
    borderRadius: 4,
    paddingTop: 20,
    position: 'relative',
  },
  lable: {
    fontSize: 14,
    paddingLeft: 5,
    position: "absolute",
    top: 20,
    color: b3,
  },
  lableActive: {
    fontSize: 14,
    paddingLeft: 5,
    position: "absolute",
    top: 0,
    color: b3,
  },
  circle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: blue,
    borderRadius: 25,
  },
  dottedLine: {
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderTopColor: b3,
    marginVertical: 10,
  },
  btnLrg: {
    borderRadius: 8,
    backgroundColor: b2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});