import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const BackToDashBoard = () => {
    return (
        <View style={{ margin: 20, flex: 1 }}>
            <View style={{marginVertical:20}}>
                <Image source={require('../../assets/img/DeliveryComplted.png')}
                    resizeMode="contain" style={styles.rightTickimage} ></Image>
                <Text style={styles.deliveryComplteText}>Great Job!{'\n'}
                    Delivery Complete.</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../../assets/img/Clock.png')} style={styles.ClockDelivery} resizeMode="contain"></Image>
                    <Text style={styles.bonusText}>BONUS EARNED!</Text>
                    <Text style={styles.timeText}>On Time Delivery.</Text>
                </View>
            </View>
            <View style={{flexDirection:"column"}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",margin:15,top:15}}>
                    <Text style={styles.balanceearingText}>Pocket Balance {'\n'}₹320.00</Text>
                    <Text style={styles.balanceearingText}>Todays Earning {'\n'}₹1,220.00</Text>
                </View>
            </View>
            <Text style={styles.detailsText}>Details</Text>
            <View style={{flexDirection:"column"}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",top:50,margin:10}}>
                    <Text style={styles.paymentText}>Delivery Time {'\n'}Payment Mode{'\n'}Amnt. Received</Text>
                    <Text style={styles.paymentText}>04 Jul, 2024, 12:13 PM {'\n'}Cash{'\n'}₹320.00</Text>
                    {/* <Text style={styles.paymentText}></Text> */}

                </View>
            </View>
            <Button style={{backgroundColor:"#DF1F26",borderRadius:0,top:90,padding:10}} 
            mode='contained'><Text style={{color:"#FFFFFF",fontSize:16}}>Back to Dashboard</Text></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    rightTickimage: {
        alignItems: "center",
        alignSelf: "center"
    },
    deliveryComplteText: {
        fontWeight: "700",
        color: "#000000",
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        // lineHeight: 20,
        textAlign: "center"
    },
    ClockDelivery: {
        left: 30,
        bottom: 5,
        height: 49,
        width: 147
    },
    bonusText: {
        fontWeight: "600",
        color: "#1A8A32",
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        // lineHeight: 20,
        textAlign: "center",
        right:5
    },
    timeText: {
        fontWeight: "600",
        color: "#4D4D4D",
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        lineHeight: 17,
        textAlign: "center",
        top: 20,
        right: 130
    },
    balanceearingText:{
        fontWeight: "600",
        color: "#000000",
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        // lineHeight: 20,
        textAlign: "center",
        right:5
    },
    detailsText:{
        fontWeight: "600",
        color: "#000000",
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        // lineHeight: 20,
        textAlign: "center",
        top:30
        
    },
    paymentText:{
        fontWeight: "600",
        color: "#000000",
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        lineHeight: 35,
        textAlign: "center",
        
    }

})
export default BackToDashBoard;