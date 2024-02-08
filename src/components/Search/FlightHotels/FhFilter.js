import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import { b2, b3, blue, white } from '../../../config/colors';
import image from '../../../config/ImageAssets';

const FhFilter = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={{ flex: 1, marginTop: 45 }}>
                {/* nav */}
                <TouchableOpacity
                    style={styles.nav}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{ width: 22, height: 22, marginRight: 10 }}
                        source={icon.next}
                    />

                    <Text style={[commonStyles.ns600, { fontSize: 20, textTransform: "uppercase" }]}>
                        Filter
                    </Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20, flex: 1 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ width: "75%", marginLeft: 15 }}
                    >
                        <View style={styles.filterWrap}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                    Popular Filters
                                </Text>

                                {/* Popular Filters options */}
                                <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Hotel
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>174</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Refundable properties
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>93</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Homes and Apartment
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>17</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.hr} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default FhFilter;

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        marginLeft: 13,
    },
    filterWrap: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#D8D8D8",
        paddingVertical: 15,
    },
    hr: {
        backgroundColor: "#D8D8D8",
        height: 1,
        marginVertical: 10,
    },
    tick: {
        backgroundColor: blue,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    tickImg: {
        width: 12,
        height: 12,
        tintColor: white,
    },
});