import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import cStyles from "../../components/cStyles";
import Row from "../../common/Row";
import Col from "../../common/Col";
import staticStyle from "../../common/Styles/StaticsStyles";

const { width, height } = Dimensions.get('window');

const IncenTives = ({ navigation }) => {
    const [selectedDay, setSelectedDay] = useState('7 Days');

    const handleDaySelection = (day) => {
        setSelectedDay(day);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
                    <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/img/Back.png')} style={cStyles.icon} />
                    </TouchableOpacity>
                    <Text style={[cStyles.backText, { color: 'yellow' }]}>Incentives</Text>
                    <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                </View>
            </View>
            <View style={staticStyle.daysContainer}>
                <TouchableOpacity
                    style={[staticStyle.daysCard, selectedDay === '7 Days' ? staticStyle.activeCard : staticStyle.inactiveCard]}
                    onPress={() => handleDaySelection('7 Days')}>
                    <Text style={[staticStyle.daysText, selectedDay === '7 Days' ? staticStyle.activeText : staticStyle.inactiveText]}>7 Days</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[staticStyle.daysCard, selectedDay === '30 Days' ? staticStyle.activeCard : staticStyle.inactiveCard]}
                    onPress={() => handleDaySelection('30 Days')}>
                    <Text style={[staticStyle.daysText, selectedDay === '30 Days' ? staticStyle.activeText : staticStyle.inactiveText]}>30 Days</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[staticStyle.calendarCard, selectedDay === 'Calendar' ? staticStyle.activeCard : staticStyle.inactiveCard]}
                    onPress={() => handleDaySelection('Calendar')}>
                    <Image
                        source={require("../../assets/bottomtab/DateSet.png")}
                        resizeMode="contain"
                        style={[staticStyle.calendarImage, { tintColor: selectedDay === 'Calendar' ? '#DF1F26' : '#4D4D4D' }]}
                    />
                </TouchableOpacity>
            </View>
            <View style={staticStyle.dateTextContainer}>
                <Text style={staticStyle.dateText}>14th Jun to 20th Jun, 2024</Text>
            </View>
            <View style={[staticStyle.cardContainer, {}]}>
                <View style={[staticStyle.plainCard, { marginVertical:10 }]}>
                    <Text style={staticStyle.totalText}>Total Incentives</Text>
                    <Text style={staticStyle.priceText}>₹400.00</Text>
                </View>
                <View style={[staticStyle.rectangle,{marginVertical:16}]}>
                    <Text style={staticStyle.JuneText}>20th June, 2024, Thursday</Text>
                    <View style={styles.line} />
                    <Row>
                        <Col>
                            {/* <View style={styles.colLeft}> */}
                            <Text style={staticStyle.delRevText}>10 Timely Deliveries</Text>
                            {/* </View> */}
                        </Col>
                        <Col>
                            <View style={styles.colRight}>
                                <Text style={staticStyle.delRevText}>₹200</Text>
                            </View>
                        </Col>
                    </Row>
                </View>
                <View style={staticStyle.rectangle}>
                    <Text style={staticStyle.JuneText}>19th June, 2024, Thursday</Text>
                    <View style={styles.line} />
                    <Row>
                        <Col>
                            {/* <View style={styles.colLeft}> */}
                            <Text style={staticStyle.delRevText}>10 Timely Deliveries</Text>
                            {/* </View>/ */}
                        </Col>
                        <Col>
                            <View style={styles.colRight}>
                                <Text style={staticStyle.delRevText}>₹200</Text>
                            </View>
                        </Col>
                    </Row>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        height: 64,
        backgroundColor: 'white',
    },
    line: {
        height: 1,
        width: '150%',
        backgroundColor: '#D9D9D9',
        marginVertical: 10,
        right: 10
    },
    colLeft: {
        top: 10,
        left: 5
    },
    colRight: {
        top: 5,
        right: 5,
        alignItems: 'flex-end',
    },
});

export default IncenTives;
