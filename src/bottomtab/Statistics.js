// import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
// import cStyles from "../components/cStyles";
// import Row from "../common/Row";
// import Col from "../common/Col";
// import { useNavigation } from "@react-navigation/native";


// const Statistics = () => {
//     const navigation = useNavigation()
//     return (
//         <SafeAreaView >
//             <View style={styles.container}>
//                 <View style={styles.headerContainer}>
//                     <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
//                         <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
//                             <Image source={require('../assets/img/Back.png')} style={cStyles.icon} />
//                         </TouchableOpacity>
//                         <Text style={cStyles.backText}>Statistics</Text>
//                         <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//             {/* <View  style={{ backgroundColor:"white"}}> */}
//             <View style={{ top: 90, marginHorizontal: 20}} >
//                 <Text style={styles.DataText}>Today’s Data</Text>
//                 <View style={styles.content}>
//                     {/* <Text style={[cStyles.headerText0BL, { marginBottom: 15 }]}>Your Earnings</Text> */}
//                     <View style={styles.card1}>
//                         <View style={styles.earning}>
//                             <Text style={[cStyles.headerText2G, { marginBottom: 4 }]}>Pocket Balance</Text>
//                             <Text style={cStyles.headerText3BL}>₹320.00</Text>
//                         </View>
//                         <View style={styles.verticalLine} />
//                         <View style={styles.earning}>
//                             <Text style={[cStyles.headerText2BL2, { marginBottom: 4 }]}>Earning</Text>
//                             <Text style={cStyles.headerText3BL}>₹1,220.00</Text>
//                         </View>
//                     </View>
//                     <View style={{ margin: 10, top: 25 }}>
//                         <Text style={styles.otherText}>Other Data</Text>
//                     </View>
//                     <View style={{ top: 25, justifyContent: "space-between", marginHorizontal: 3 }}>
//                         <Row>
//                             <Col numRows={1}>
//                                 <TouchableOpacity onPress={()=>navigation.navigate('LoginHistory')}>
//                                     <View style={styles.cardContainer}>
//                                         <Text style={styles.textStyle}>Login History</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </Col>
//                             <Col>
//                                 <TouchableOpacity onPress={()=>navigation.navigate('TripHistory')}>
//                                     <View style={styles.cardContainer}>
//                                         <Text style={styles.textStyle}>Trip History</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </Col>
//                         </Row>
//                         <View>
//                             <Row>
//                                 <Col numRows={1}>
//                                     <TouchableOpacity onPress={()=>navigation.navigate('Earnings')}>
//                                         <View style={styles.cardContainer}>
//                                             <Text style={styles.textStyle}>Earnings</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 </Col>
//                                 <Col>
//                                     <TouchableOpacity onPress={()=>navigation.navigate('IncenTives')}>
//                                         <View style={styles.cardContainer}>
//                                             <Text style={styles.textStyle}>Incentives</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 </Col>
//                             </Row>
//                         </View>
//                         <View>
//                             <Row>
//                                 <Col numRows={1}>
//                                     <TouchableOpacity onPress={()=>navigation.navigate('CashDeposit')}>
//                                         <View style={styles.cardContainer}>
//                                             <Text style={styles.textStyle}>Cash Deposit</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 </Col>
//                                 <Col>
//                                     <TouchableOpacity onPress={()=>navigation.navigate('WithDrawals')}>
//                                         <View style={styles.cardContainer}>
//                                             <Text style={styles.textStyle}>Withdrawls</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 </Col>
//                             </Row>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//             {/* </View> */}
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//     },
//     headerContainer: {
//         height: 64
//     },
//     DataText: {
//         fontFamily: "Poppins-SemiBold",
//         fontSize: 16,
//         fontWeight: "600",
//         // lineheight: 19,
//         textAlign: "left",
//         color: "#000000",
//         lineHeight:18
//     },
//     card1: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 6,
//         paddingHorizontal: 16,
//         borderColor: '#D9D9D9',
//         borderWidth: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     earning: {
//         flex: 1,
//         paddingVertical: 16,
//         alignItems: 'center',
//     },
//     verticalLine: {
//         width: 1,
//         height: '100%',
//         backgroundColor: '#CCCCCC',
//         marginHorizontal: 8,
//     },
//     content: {
//         marginTop: 24,
//     },
//     otherText: {
//         fontSize: 16,
//         fontFamily: 'Poppins-SemiBold',
//         color: '#DF1F26',
//         lineHeight: 19,
//         fontWeight: '600',
//     },
//     textStyle: {
//         fontSize: 15,
//         fontFamily: 'Poppins-SemiBold',
//         color: '#000000',
//         lineHeight: 18,
//         fontWeight: '600',
//         textAlign: "center",
//         top: 10
//     },
//     cardContainer: {
//         width: 145,
//         height: 45,
//         borderRadius: 3,
//         borderWidth: 1,
//         borderColor: "#D9D9D9",
//         justifyContent: "space-between",
//         marginHorizontal: 5, margin: 10
//         // marginHorizontal:3
//     }
// })
// export default Statistics

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import cStyles from '../components/cStyles';
import Row from '../common/Row';
import Col from '../common/Col';
import { useNavigation } from '@react-navigation/native';

const Statistics = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
                    <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/img/Back.png')} style={cStyles.icon} />
                    </TouchableOpacity>
                    <Text style={cStyles.backText}>Statistics</Text>
                    <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                </View>
            </View>

            <View style={{ top: 80, marginHorizontal: 20 }}>
                <Text style={styles.DataText}>Today’s Data</Text>

                <View style={styles.content}>
                    <View style={styles.card1}>
                        <View style={styles.earning}>
                            <Text style={[cStyles.headerText2G, { marginBottom: 4,color:"#000000" }]}>Pocket Balance</Text>
                            <Text style={cStyles.headerText3BL}>₹320.00</Text>
                        </View>
                        <View style={styles.verticalLine} />
                        <View style={styles.earning}>
                            <Text style={[cStyles.headerText2BL2, { marginBottom: 4 }]}>Earning</Text>
                            <Text style={cStyles.headerText3BL}>₹1,220.00</Text>
                        </View>
                    </View>

                    <View style={{ margin: 10, top: 25 }}>
                        <Text style={styles.otherText}>Other Data</Text>
                    </View>

                    <View style={{ top: 25, justifyContent: 'space-between', marginHorizontal: 3 }}>
                        <Row>
                            <Col numRows={1}>
                                <TouchableOpacity onPress={() => navigation.navigate('LoginHistory')}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.textStyle}>Login History</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity onPress={() => navigation.navigate('TripHistory')}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.textStyle}>Trip History</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                        </Row>

                        <Row>
                            <Col numRows={1}>
                                <TouchableOpacity onPress={() => navigation.navigate('Earnings')}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.textStyle}>Earnings</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity onPress={() => navigation.navigate('IncenTives')}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.textStyle}>Incentives</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                        </Row>

                        <Row>
                            <Col numRows={1}>
                                <TouchableOpacity onPress={() => navigation.navigate('CashDeposit')}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.textStyle}>Cash Deposit</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity onPress={() => navigation.navigate('WithDrawals')}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.textStyle}>Withdrawls</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        height: 4,
    },
    DataText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'left',
        color: '#000000',
        // lineHeight: 10
        bottom:10,
    },
    card1: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        paddingHorizontal: 16,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // bottom:10
    },
    earning: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
    },
    verticalLine: {
        width: 1,
        height: '100%',
        backgroundColor: '#CCCCCC',
        marginHorizontal: 8,
    },
    content: {
        marginTop: 3,
    },
    otherText: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#DF1F26',
        lineHeight: 19,
        fontWeight: '600',
        bottom:15
    },
    textStyle: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 18,
        fontWeight: '600',
        textAlign: 'center',
        top: 15,
    },
    cardContainer: {
        width: 145,
        height: 46,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        margin: 10,
        bottom:20
    },
});

export default Statistics;
