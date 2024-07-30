
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ActivityIndicator } from "react-native";
import Row from "../../common/Row";
import Col from "../../common/Col";
import cStyles from "../../components/cStyles";
import { Divider } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from 'axios';

const PersonalDetails = () => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params; // Get the ID passed from the profile screen

    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://temp.wedeveloptech.in/united/appdata/getdelboyprofiledtls-ax.php?id=${id}`);
                setDetails(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching personal details:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <View style={styles.fullScreenContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.fullScreenContainer}>
            <View>
                <View style={styles.headerContainer}>
                    <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
                        <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/img/Back.png')} style={cStyles.icon} />
                        </TouchableOpacity>
                        <Text style={cStyles.backText}>Personal Details</Text>
                        <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ margin: 8, top: 5 }}>
                <Row>
                    <Col>
                        <Text style={styles.InfoText}>Name</Text>
                    </Col>
                    <Col>
                        <Text style={styles.InfoText}>{details.name}</Text>
                    </Col>
                </Row>
                <Divider style={{ height: 0.5, borderColor: "#D9D9D9", width: width - 30, left: 8, bottom: 6 }} />
                <Row>
                    <Col>
                        <Text style={styles.InfoText}>Gender</Text>
                    </Col>
                    <Col>
                        <Text style={styles.InfoText}>{details.gender}</Text>
                    </Col>
                </Row>
                <Divider style={{ height: 0.7, borderColor: "#D9D9D9", width: width - 30, left: 8, bottom: 6 }} />
                <Row>
                    <Col>
                        <Text style={styles.InfoText}>Email Id.</Text>
                    </Col>
                    <Col>
                        <Text style={styles.InfoText}>{details.email}</Text>
                    </Col>
                </Row>
                <Divider style={{ height: 0.7, borderColor: "#D9D9D9", width: width - 30, left: 8, bottom: 6 }} />
                <Row>
                    <Col>
                        <Text style={styles.InfoText}>Phone No</Text>
                    </Col>
                    <Col>
                        <Text style={styles.InfoText}>{details.phoneno}</Text>
                    </Col>
                </Row>
                <Divider style={{ height: 0.7, borderColor: "#D9D9D9", width: width - 30, left: 8, bottom: 6 }} />
                <Row>
                    <Col>
                        <Text style={styles.InfoText}>Alt Phone No</Text>
                    </Col>
                    <Col>
                        <Text style={styles.InfoText}>{details.altphone}</Text>
                    </Col>
                </Row>
                <Divider style={{ height: 0.7, borderColor: "#D9D9D9", width: width - 30, left: 8, bottom: 6 }} />

                <Row>
                    <Col>
                        <Text style={styles.InfoText}>WhatsApp Number</Text>
                    </Col>
                    <Col>
                        <Text style={styles.InfoText}>{details.whatsapp}</Text>
                    </Col>
                </Row>
                <Divider style={{ height: 0.7, borderColor: "#D9D9D9", width: width - 30, left: 8, bottom: 6 }} />
                <Row>
                    <Col>
                        <Text style={styles.InfoText}>DOB</Text>
                    </Col>
                    <Col>
                        <Text style={styles.InfoText}>{details.dob}</Text>
                    </Col>
                </Row>
                <Divider style={{ height: 0.7, borderColor: "#D9D9D9", width: width - 30, left: 8, bottom: 6 }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Set background color to white for full screen
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Set background color to white
    },
    headerContainer: {
        height: 64,
    },
    icons: {
        resizeMode: "contain",
        height: 21,
        width: 21,
        left: 19,
        color: "#000000"
    },
    InfoText: {
        fontSize: 15,
        fontFamily: "Poppins-SemiBold",
        fontWeight: "600",
        lineHeight: 18,
        color: "#000000",
        margin: 12
    },
    arrowIcon: {
        height: 14,
        width: 7,
        left: "50%",
        top: 0,
        color: "#000000"
    },
    profileName: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 18,
        fontWeight: '600',
        right: 5,
    },
});

export default PersonalDetails;

