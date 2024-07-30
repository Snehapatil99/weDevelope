// import React, { useState, useEffect } from 'react';
// import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions, ActivityIndicator } from 'react-native';
// import cStyles from '../components/cStyles';
// import Row from '../common/Row';
// import Col from '../common/Col';
// import { Divider } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import { WebView } from 'react-native-webview';
// import { AirbnbRating } from 'react-native-ratings';
// import axios from 'axios';

// const { width, height } = Dimensions.get('window');

// const MyProfile = () => {
//     const navigation = useNavigation();
//     const [loading, setLoading] = useState(true);
//     const [profileData, setProfileData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://temp.wedeveloptech.in/united/appdata/getdelboyprofile-ax.php?id=1');
//                 setProfileData(response.data.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching profile data:', error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return (
//             <SafeAreaView style={styles.container}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </SafeAreaView>
//         );
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <View>
//                 <View style={styles.headerContainer}>
//                     <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
//                         <TouchableOpacity
//                             style={cStyles.backContainer}
//                             activeOpacity={0.8}
//                             onPress={() => navigation.goBack()}
//                         >
//                             <Image source={require('../assets/img/Back.png')} style={cStyles.icon} />
//                         </TouchableOpacity>
//                         <Text style={cStyles.backText}>Profile</Text>
//                         <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//             <View style={styles.profileContainer}>
//                 <View style={styles.profileImageContainer}>
//                     <Image
//                         source={{ uri: profileData.dispimage }}
//                         resizeMode="contain"
//                         style={styles.profileImage}
//                     />
//                 </View>
//                 <View style={styles.profileInfoContainer}>
//                     <Text style={styles.profileName}>{profileData.name}</Text>
//                     <Text style={styles.profilePhone}>+91 {profileData.phoneno}</Text>
//                     <View style={styles.ratingContainer}>
//                         <AirbnbRating
//                             count={5}
//                             defaultRating={profileData.rating}
//                             size={25}
//                             showRating={false}
//                             isDisabled
//                         />
//                     </View>
//                 </View>
//             </View>
//             <Divider style={{
//                 borderColor: "#D9D9D9",
//                 height: 0.8,
//                 marginTop: 10,
//                 width: width - 33,
//                 bottom: 15, left: 15
//             }} />
//             <View style={styles.section}>
//                 <Row>
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate('PersonalDetails', { id: profileData.id })}
//                         style={styles.rowTouchable}
//                     >
//                         <Col numRows={1}>
//                             <Image
//                                 source={require('../assets/bottomtab/PersonalInfo.png')}
//                                 style={styles.icons}
//                             />
//                         </Col>
//                         <Col numRows={5}>
//                             <Text style={styles.InfoText}>Personal Details</Text>
//                         </Col>
//                         <Col numRows={2}>
//                             <Image
//                                 source={require('../assets/bottomtab/rightArrow.png')}
//                                 resizeMode="contain"
//                                 style={styles.arrowIcon}
//                             />
//                         </Col>
//                     </TouchableOpacity>
//                 </Row>
//                 <Divider style={styles.divider} />
//             </View>
//             <View style={styles.section}>
//                 <Row>
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate('ViewDocuments')}
//                         style={styles.rowTouchable}
//                     >
//                         <Col numRows={1}>
//                             <Image source={require('../assets/bottomtab/Documents.png')} style={styles.icons} />
//                         </Col>
//                         <Col numRows={5}>
//                             <Text style={styles.InfoText}>View Documents</Text>
//                         </Col>
//                         <Col numRows={2}>
//                             <Image
//                                 source={require('../assets/bottomtab/rightArrow.png')}
//                                 resizeMode="contain"
//                                 style={styles.arrowIcon}
//                             />
//                         </Col>
//                     </TouchableOpacity>
//                 </Row>
//                 <Divider style={styles.divider} />
//             </View>
//             <View style={styles.section}>
//                 <Row>
//                     <TouchableOpacity style={styles.rowTouchable}>
//                         <Col numRows={1}>
//                             <Image source={require('../assets/bottomtab/IDProof.png')} style={styles.icons} />
//                         </Col>
//                         <Col numRows={5}>
//                             <Text style={styles.InfoText}>Cheers Id Card</Text>
//                         </Col>
//                         <Col numRows={2}>
//                             <Image
//                                 source={require('../assets/bottomtab/rightArrow.png')}
//                                 resizeMode="contain"
//                                 style={styles.arrowIcon}
//                             />
//                         </Col>
//                     </TouchableOpacity>
//                 </Row>
//                 <Divider style={styles.divider} />
//             </View>
//             <View style={{ flex: 1 }}>
//                 <WebView
//                     source={{ uri: profileData.cheersid }}
//                     style={{ marginTop: 20 }}
//                     startInLoadingState={true}
//                     renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
//                 />
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//     },
//     headerContainer: {
//         // height: 64,
//     },
//     profileContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         margin: 10,
//         marginVertical: 25,
//         paddingVertical: 10,
//         paddingHorizontal: 15
//     },
//     profileImageContainer: {
//         width: width / 3.9,
//         height: height / 9,
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: '#DF1F26',
//         marginRight: 9,
//         top: 10,
//         overflow: 'hidden'
//     },
//     profileImage: {
//         width: "80%",
//         height: "80%",
//         alignSelf: 'center',
//         resizeMode: "contain",
//         top: 6

//     },
//     profileInfoContainer: {
//         flex: 1,
//         padding: 5,
//         top: 15
//     },
//     profileName: {
//         fontSize: 15,
//         fontFamily: 'Poppins-SemiBold',
//         color: '#000000',
//         lineHeight: 18,
//         fontWeight: '600',
//         left: 8
//     },
//     profilePhone: {
//         fontSize: 15,
//         fontFamily: 'Poppins-SemiBold',
//         color: '#000000',
//         lineHeight: 18,
//         fontWeight: '600',
//         marginVertical: 5,
//     },
//     ratingContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     divider: {
//         borderColor: "#D9D9D9",
//         height: 0.8,
//         marginTop: 6,
//         width: width - 32,
//         left: 10
//     },
//     section: {
//         marginHorizontal: 6,
//         paddingVertical: 8,
//         bottom: 10
//     },
//     rowTouchable: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icons: {
//         resizeMode: 'contain',
//         height: 21,
//         width: 21,
//         marginLeft: 25,
//     },
//     InfoText: {
//         fontSize: 15,
//         fontFamily: 'Poppins-SemiBold',
//         fontWeight: '600',
//         lineHeight: 18,
//         color: '#000000',
//         marginRight: '40%',
//     },
//     arrowIcon: {
//         height: 14,
//         width: 7,
//         marginLeft: '65%',
//     },
// });

// export default MyProfile;



import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions, ActivityIndicator, } from 'react-native';
import cStyles from '../components/cStyles';
import Row from '../common/Row';
import Col from '../common/Col';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { AirbnbRating } from 'react-native-ratings';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const MyProfile = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [profileData, setProfileData] = useState(null);
    const [showPdf, setShowPdf] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://temp.wedeveloptech.in/united/appdata/getdelboyprofile-ax.php?id=1');
                setProfileData(response.data.data);
                console.log("data--", response.data)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {showPdf ? (
                <WebView
                    source={{ uri: profileData.cheersid }}
                    style={{ flex: 1 }}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
                />
            ) : (
                <>
                    <View>
                        <View style={styles.headerContainer}>
                            <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
                                <TouchableOpacity
                                    style={cStyles.backContainer}
                                    activeOpacity={0.8}
                                    onPress={() => navigation.goBack()}
                                >
                                    <Image source={require('../assets/img/Back.png')} style={cStyles.icon} />
                                </TouchableOpacity>
                                <Text style={cStyles.backText}>Profile</Text>
                                <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.profileContainer}>
                        <View style={styles.profileImageContainer}>
                            <Image
                                source={{ uri: profileData.dispimage }}
                                resizeMode="contain"
                                style={styles.profileImage}
                            />
                        </View>
                        <View style={styles.profileInfoContainer}>
                            <Text style={styles.profileName}>{profileData.name}</Text>
                            <Text style={styles.profilePhone}>+91 {profileData.phoneno}</Text>
                            <View style={styles.ratingContainer}>
                                <AirbnbRating
                                    count={5}
                                    defaultRating={profileData.rating}
                                    size={25}
                                    showRating={false}
                                    isDisabled
                                />
                            </View>
                        </View>
                    </View>
                    <Divider style={{
                        borderColor: "#D9D9D9",
                        height: 0.8,
                        marginTop: 10,
                        width: width - 33,
                        bottom: 15, left: 15
                    }} />
                    <View style={styles.section}>
                        <Row>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('PersonalDetails', { id: profileData.id })}
                                style={styles.rowTouchable}
                            >
                                <Col numRows={1}>
                                    <Image
                                        source={require('../assets/bottomtab/PersonalInfo.png')}
                                        style={styles.icons}
                                    />
                                </Col>
                                <Col numRows={5}>
                                    <Text style={styles.InfoText}>Personal Details</Text>
                                </Col>
                                <Col numRows={2}>
                                    <Image
                                        source={require('../assets/bottomtab/rightArrow.png')}
                                        resizeMode="contain"
                                        style={styles.arrowIcon}
                                    />
                                </Col>
                            </TouchableOpacity>
                        </Row>
                        <Divider style={styles.divider} />
                    </View>
                    <View style={styles.section}>
                        <Row>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ViewDocuments')}
                                style={styles.rowTouchable}
                            >
                                <Col numRows={1}>
                                    <Image source={require('../assets/bottomtab/Documents.png')} style={styles.icons} />
                                </Col>
                                <Col numRows={5}>
                                    <Text style={styles.InfoText}>View Documents</Text>
                                </Col>
                                <Col numRows={2}>
                                    <Image
                                        source={require('../assets/bottomtab/rightArrow.png')}
                                        resizeMode="contain"
                                        style={styles.arrowIcon}
                                    />
                                </Col>
                            </TouchableOpacity>
                        </Row>
                        <Divider style={styles.divider} />
                    </View>
                    <View style={styles.section}>
                        <Row>
                            <TouchableOpacity
                                style={styles.rowTouchable}
                                onPress={() => navigation.navigate('GooglePdfViewer', { pdfUrl: profileData.cheersid })}
                            >

                                <Col numRows={1}>
                                    <Image source={require('../assets/bottomtab/IDProof.png')} style={styles.icons} />
                                </Col>
                                <Col numRows={5}>
                                    <Text style={styles.InfoText}>Cheers Id Card</Text>
                                </Col>
                                <Col numRows={2}>
                                    <Image
                                        source={require('../assets/bottomtab/rightArrow.png')}
                                        resizeMode="contain"
                                        style={styles.arrowIcon}
                                    />
                                </Col>
                            </TouchableOpacity>
                        </Row>
                        <Divider style={styles.divider} />
                    </View>
                </>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        // height: 64,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginVertical: 25,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    profileImageContainer: {
        width: width / 3.9,
        height: height / 9,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#DF1F26',
        marginRight: 9,
        top: 10,
        overflow: 'hidden'
    },
    profileImage: {
        width: "80%",
        height: "80%",
        alignSelf: 'center',
        resizeMode: "contain",
        top: 6

    },
    profileInfoContainer: {
        flex: 1,
        padding: 5,
        top: 15
    },
    profileName: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 18,
        fontWeight: '600',
        left: 8
    },
    profilePhone: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 18,
        fontWeight: '600',
        marginVertical: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        borderColor: "#D9D9D9",
        height: 0.8,
        marginTop: 6,
        width: width - 32,
        left: 10
    },
    section: {
        marginHorizontal: 6,
        paddingVertical: 8,
        bottom: 10
    },
    rowTouchable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icons: {
        resizeMode: 'contain',
        height: 21,
        width: 21,
        marginLeft: 25,
    },
    InfoText: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        lineHeight: 18,
        color: '#000000',
        marginRight: '40%',
    },
    arrowIcon: {
        height: 14,
        width: 7,
        marginLeft: '65%',
    },
});

export default MyProfile;

