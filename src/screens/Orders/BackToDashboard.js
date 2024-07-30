import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import Row from "../../common/Row";
import Col from "../../common/Col";
import cStyles from "../../components/cStyles";
import { useRoute, useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const BackToDashBoard = ({ route}) => {
    const { orderData } = route.params || {};
    // console.log("Route params:", route.params); 
    const navigation = useNavigation();
    // const route = useRoute();
    // const did = route.params.did;
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/img/DeliveryComplted.png')}
                    resizeMode="contain" style={styles.rightTickimage} />
                <Text style={styles.deliveryCompleteText}>Great Job!{'\n'}Delivery Complete.</Text>
            </View>
            <View style={styles.bonusContainer}>
                <Row>
                    <Image source={require('../../assets/img/Clock.png')} style={styles.clockDelivery} resizeMode="contain" />
                    <Col>
                        <View style={styles.bonusTextContainer}>
                            <Text style={styles.bonusText}>BONUS EARNED!</Text>
                            <Text style={styles.timeText}>On Time Delivery.</Text>
                        </View>
                    </Col>
                </Row>
            </View>
            <View style={styles.balanceContainer}>
                <View style={styles.balanceBox}>
                    <Text style={styles.balanceEarningText}>
                        Pocket Balance {'\n'}₹{orderData.pocketbalance}
                    </Text>
                    <View style={styles.verticalDivider}></View>
                    <Text style={styles.balanceEarningText}>
                        Today's Earning {'\n'}₹{orderData.todayearning}
                    </Text>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.line} />
                <Text style={styles.detailsText}>Details</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.detailBoxContainer}>
                <View style={styles.detailBox}>
                    <Row>
                        <Col>
                            <Text style={styles.paymentText}>Delivery Time</Text>
                        </Col>
                        <Col>
                            <Text style={styles.paymentText}>{orderData.orderdtls.deliverytime}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text style={styles.paymentText}>Payment Mode</Text>
                        </Col>
                        <Col>
                            <Text style={styles.paymentText}>{orderData.orderdtls.paymode}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text style={styles.paymentText}>Amount Received</Text>
                        </Col>
                        <Col>
                            <Text style={styles.paymentText}>₹{orderData.orderdtls.amountrecvd}</Text>
                        </Col>
                    </Row>
                </View>
            </View>
            <TouchableOpacity
                style={[cStyles.button, { marginBottom: 10, marginTop: height * 0.075 }]}
                onPress={() => navigation.navigate('HomePage')}
                activeOpacity={0.8}
            >
                <Text style={cStyles.buttonText}>BackToDashBoard</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center', // Center content horizontally
    },
    imageContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    rightTickimage: {
        width: 150,
        height: 150,
    },
    deliveryCompleteText: {
        fontWeight: "600",
        color: "#000000",
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        textAlign: "center",
    },
    bonusContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    clockDelivery: {
        height: 49,
        width: 49,
        marginBottom: 10,
    },
    bonusTextContainer: {
        alignItems: 'center',
    },
    bonusText: {
        fontWeight: "600",
        color: "#1A8A32",
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    },
    timeText: {
        fontWeight: "600",
        color: "#4D4D4D",
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        marginTop: 0,
        bottom: 4,
    },
    balanceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    balanceBox: {
        borderWidth: 1,
        width: '100%', // Make the box responsive to the screen width
        maxWidth: 324,
        height: 78,
        borderRadius: 6,
        borderColor: "#D9D9D9",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    verticalDivider: {
        borderWidth: 0.5,
        height: 73,
        borderColor: "#D9D9D9",
    },
    balanceEarningText: {
        fontWeight: "600",
        color: "#000000",
        fontSize: 15,
        lineHeight: 19,
        fontFamily: 'Poppins-SemiBold',
        textAlign: "center",
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#000000',
        marginHorizontal: 20,
    },
    detailsText: {
        fontWeight: "600",
        color: "#000000",
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        textAlign: "center",
    },
    detailBoxContainer: {
        marginBottom: 20,
        width: '100%', // Make the container responsive to the screen width
        alignItems: 'center',
    },
    detailBox: {
        borderWidth: 1,
        width: '100%', // Make the box responsive to the screen width
        maxWidth: 324,
        height: 100,
        borderRadius: 6,
        borderColor: "#D9D9D9",
        padding: 10,
    },
    paymentText: {
        fontWeight: "600",
        color: "#000000",
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        lineHeight: 25,
        textAlign: "center",
    },
    backButton: {
        backgroundColor: "#DF1F26",
        borderRadius: 6,
        padding: 10,
        marginTop: 30,
        position: "absolute",
        bottom: 16,
        alignSelf: 'center',
        width: width - 55
    },
    backButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        fontWeight: "600",
        textAlign: "center",
        lineHeight: 18
    },
});

export default BackToDashBoard;

