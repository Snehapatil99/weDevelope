import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import cStyles from '../components/cStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import thumbIcon from '../assets/img/arrow-left.png';
import SwipeButton from 'rn-swipe-button';

const { width, height } = Dimensions.get('window');

const GetStarted = ({ navigation }) => {

    const handleNext = async () => {
        console.log('TabNavigator');
        navigation.navigate('HomePage');
        // navigation.navigate('TabNavigator');

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/img/GetStarted.png')}
                    style={styles.image1}
                    resizeMode="contain"
                />
                <Text style={cStyles.headerText0R}>You Are All Set!</Text>
                <Text style={[cStyles.headerText0BL, { marginTop: height * 0.045, textAlign: 'center', }]}>Welcome to{'\n'}
                    The <Text style={{ color: '#DF1F26', }}>Cheers By United</Text> Family.</Text>
                <Text style={[cStyles.headerText2BL, styles.centeredText]}>
                    Your registration has been{'\n'}
                    verified successfully.
                </Text>
                <Text style={[cStyles.headerText2BL, styles.centeredText, { marginTop: height * 0.095, paddingHorizontal: 8 }]}>
                    Swipe the button below to start{'\n'}
                    working with us.
                </Text>
                <SwipeButton
                    style={styles.slideButton}
                    disabled={false}
                    swipeSuccessThreshold={70}
                    height={56}
                    width={width / 1.2}
                    containerStyles={{borderRadius: 3,top:10}}
                    title="Get Started"
                    titleColor='#000000'
                    //titleFontSize={24}
                    titleStyles={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        //paddingLeft: 30,
                        fontSize: 16,
                        fontFamily: 'Poppins-SemiBold',
                        lineHeight: 19
                    }}
                    // thumbIconImageSource={thumbIcon}
                    thumbIconStyles={{ borderRadius:6,height:44,width:44}}
                     thumbIconWidth={44}
                    //  thumbIconComponent={height}
                      
                    onSwipeSuccess={handleNext}
                    thumbIconBackgroundColor='#DF1F26'
                    thumbIconBorderColor='#DF1F26'
                    railBorderColor='#DF1F26'
                    railBackgroundColor='white'
                    railFillBackgroundColor='rgba(255, 255, 255, 0.7)'

                />
                {/* <TouchableOpacity
                            style={[cStyles.button, { marginBottom: 10,  marginTop: height * 0.025, }]}
                        onPress={handleNext}
                        activeOpacity={0.8}
                    >
                        <Text style={cStyles.buttonText}>Submit</Text>
                    </TouchableOpacity> */}

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 28,
    },
    image1: {
        width: width / 1.8,
        height: undefined,
        aspectRatio: 1,
        marginBottom: 30,
    },
    centeredText: {
        textAlign: 'center',
        marginTop: 15,
    },
});

export default GetStarted;