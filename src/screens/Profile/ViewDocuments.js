import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import Row from "../../common/Row";
import Col from "../../common/Col";
import cStyles from "../../components/cStyles";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ViewDocuments = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.fullScreenContainer}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
                        <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/img/Back.png')} style={cStyles.icon} />
                        </TouchableOpacity>
                        <Text style={cStyles.backText}>View Documents</Text>
                        <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Row>
                        <Col >
                            <Text style={styles.InfoText}>Aadhar Card</Text>
                        </Col>
                        <Col>
                            <Image source={require('../../assets/bottomtab/eyeicon.png')} resizeMode="contain"
                                style={styles.icons}></Image>
                        </Col>
                    </Row>
                    <Divider style={{ height: 0.7, bottom: 3, borderColor: "#D9D9D9" }} />

                    <Row>
                        <Col>
                            <Text style={styles.InfoText}>Pan Card</Text>
                        </Col>
                        <Col>
                            <Image source={require('../../assets/bottomtab/eyeicon.png')} resizeMode="contain"
                                style={styles.icons}></Image>
                        </Col>
                    </Row>
                    <Divider style={{ height: 0.7, bottom: 3, borderColor: "#D9D9D9" }} />

                    <Row>
                        <Col>
                            <Text style={styles.InfoText}>Driving License</Text>
                        </Col>
                        <Col>
                            <Image source={require('../../assets/bottomtab/eyeicon.png')} resizeMode="contain"
                                style={styles.icons}></Image>
                        </Col>
                    </Row>
                    <Divider style={{ height: 0.7, bottom: 3, borderColor: "#D9D9D9" }} />

                    <Row>
                        <Col>
                            <Text style={styles.InfoText}>RC Book</Text>
                        </Col>
                        <Col>
                            <Image source={require('../../assets/bottomtab/eyeicon.png')} resizeMode="contain"
                                style={styles.icons}></Image>
                        </Col>
                    </Row>
                    <Divider style={{ height: 0.7, bottom: 3, borderColor: "#D9D9D9" }} />

                </View>
            </View>
        </View>
    )
}

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
        height: 13,
        width: 20,
        marginHorizontal: 16,
        color: "#000000"
    },
    InfoText: {
        fontSize: 15,
        fontFamily: "Poppins-SemiBold",
        fontWeight: "600",
        lineHeight: 18,
        color: "#000000",
        margin: 15
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

export default ViewDocuments;
