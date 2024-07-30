import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cStyles from '../../components/cStyles';
import Row from '../../common/Row';
import Col from '../../common/Col';
import staticStyle from '../../common/Styles/StaticsStyles';


const { width, height } = Dimensions.get('window');

const Earnings = () => {
    const navigation = useNavigation();
    const [selectedDay, setSelectedDay] = useState('7 Days');

    const handleDaySelection = (day) => {
        setSelectedDay(day);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
                        <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/img/Back.png')} style={cStyles.icon} />
                        </TouchableOpacity>
                        <Text style={cStyles.backText}>Earnings</Text>
                        <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                    </View>
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
            <View style={staticStyle.cardContainer}>
                <View style={[staticStyle.plainCard,{marginVertical:8}]}>
                    <Text style={staticStyle.earningTotaltext}>Total Earnings</Text>
                    <Text style={staticStyle.priceText}>₹1,220.00</Text>
                </View>
            </View>
            <View style={staticStyle.cardContainer}>
                <View style={[staticStyle.rectangle,{marginVertical:5}]}>
                    <Text style={staticStyle.JuneText}>20th June, 2024, Thursday</Text>
                    <View style={styles.line} />
                    <Row>
                        <Col>
                            <Text style={staticStyle.delRevText}>10 Timely Deliveries</Text>
                        </Col>
                        <View style={{right:5}}>
                        <Text style={[staticStyle.delRevText]}>₹200</Text>
                        </View>
                    </Row>
                </View>
            </View>
            <View style={staticStyle.cardContainer}>
                <View style={staticStyle.rectangle}>
                    <Text style={staticStyle.JuneText}>19th June, 2024, Thursday</Text>
                    <View style={styles.line} />
                    <Row>
                        <Col>
                            <Text style={[staticStyle.delRevText,]}>10 Timely Deliveries</Text>
                        </Col>
                        <Col>
                        <View style={{right:5}}>
                        <Text style={[staticStyle.delRevText]}>₹200</Text>
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
        backgroundColor: '#FFFFFF', // White background for full screen
    },
    headerContainer: {
        height: 64,
    },
    line: {
        height: 1,
        width: '120%',
        backgroundColor: '#D9D9D9',
        marginTop: 15,
        right: 10

    },
  
});

export default Earnings;
