
import { StyleSheet ,Dimensions} from "react-native";

const { width, height } = Dimensions.get('window');

const staticStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Set your desired background color here
    },
    headerContainer: {
        height: 64,
    },
    daysContainer: {
        flexDirection: "row",
        margin: 15,
        justifyContent: 'flex-start',
        top:10,
        left:8,
        // padding:(7,14,7,14)
    },
    daysCard: {
        borderWidth: 1,
        borderColor: "#DF1F26",
        width: 85,
        height: 32,
        borderRadius: 6,
        top: 0,
        marginRight: 9,
        justifyContent:"space-evenly"
    },
    daysText: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#DF1F26',
        lineHeight: 19,
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal:5
    },
    calendarCard: {
        borderWidth: 1,
        borderColor: "#DF1F26",
        width: 31,
        height: 31,
        // top:8,
        borderRadius: 6,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // bottom:7
        
    },
    calendarImage: {
        width: 20,
        height: 22,
    },
    activeCard: {
        borderColor: '#DF1F26',
        backgroundColor: '#FDEDED',
    },
    inactiveCard: {
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',
    },
    activeText: {
        color: '#DF1F26',
    },
    inactiveText: {
        color: '#4D4D4D',
    },
    dateTextContainer: {
        marginHorizontal: 16,
        margin:10,
        left:5
    },
    dateText: {
        color: "#4D4D4D",
        fontSize: 11,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: "600",
        bottom:8,
        left:5
    },
    cardContainer: {
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal:12,
        // gap:10
    },
    rectangle: {
        width: '95%', // Make the card width responsive
        borderColor: "#D9D9D9",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 9,
        borderStyle: "solid",
        overflow: 'hidden',
        padding: 6,
        margin:8
    },
    plainrectangle:{
        width: '95%', // Make the card width responsive
        borderColor: "#D9D9D9",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: '2.5%',
        borderStyle: "solid",
        overflow: 'hidden',
        padding: 10,
    },
    JuneText: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 18,
        fontWeight: '600',
        marginBottom: 7,
        top:5,
        left:4,
    },
    delRevText: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        lineHeight: 28,
        fontWeight: '500',
        top:5,
        right:5,
        marginBottom: 0,
    },
    line: {
        height: 1,
        width: '106.6%',
        backgroundColor: '#D9D9D9',
        marginVertical: 10,
        right:10
    },
    JuneText: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 18,
        fontWeight: '600',
        marginBottom: 7,
        top:5,
        left:4
    },
    delRevText: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        lineHeight: 28,
        fontWeight: '500',
        top:5,left:4,
        marginBottom: 0,
    },
    line: {
        height: 1,
        width: '120%',
        backgroundColor: '#D9D9D9',
        lineHeight: 19,
        marginVertical: 10,
    },
    rightColumn: {
        top: 0,
    },
    boldText: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        fontWeight: '500',
    },
    smallText: {
        fontSize: 11,
        fontFamily: 'Poppins-SemiBold',
        color: '#4D4D4D',
        fontWeight: '600',
    },
    lateText: {
        color: 'red',
    },
    cashDepositCard:{
        width: width -32,
        height: height/11, // Make the card width responsive
        borderColor: "#D9D9D9",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        borderStyle: "solid",
        overflow: 'hidden',
        padding: 7,
        margin:8
    },
    earningTotaltext:{
        fontFamily:"Poppins-SemiBold",
        color:"#000000",
        fontSize:15,
        fontWeight:"600",
        textAlign:"center",
        lineHeight:18
    },
    plainCard: {
        width: '95%', // Make the card width responsive
        borderColor: "#D9D9D9",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 6,
        borderStyle: "solid",
        overflow: 'hidden',
        // paddingHorizontal: 10,
        paddingVertical: 16,
        margin: 3
    },
    totalText: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        lineHeight: 24,
        fontWeight: '600',
        textAlign: "center",
    },
    priceText: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 24,
        fontWeight: '500',
        textAlign: "center",
    
    },
});
export default staticStyle