/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Switch,
  Dimensions
} from 'react-native';
import cStyles from '../../components/cStyles';
import deliveryIcon from '../../assets/img/deliveries.png';
import profileIcon from '../../assets/img/MyProfile.png';
import statisticsIcon from '../../assets/img/statistics.png';
import settingsIcon from '../../assets/img/settings.png';
import logoutIcon from '../../assets/img/logout.png';

const { width, height } = Dimensions.get('window');

const HomePage = ({navigation}) => {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showDrawer, setShowDrawer] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const toggleDrawer = () => {
    const toValue = showDrawer ? 0 : 0.9;
    const toOffset = showDrawer ? 0 : 230;

    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(offsetValue, {
        toValue: toOffset,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    setShowDrawer(!showDrawer);
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(offsetValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    setShowDrawer(false);
  };

  const [toggleValue, setToggleValue] = useState(false);

  const handleToggle = () => {
    setToggleValue(!toggleValue);
  };

  const handleTabPress = (title) => {
    setCurrentTab(title);
    if (title === 'Logout') {
      //setLogoutDialogVisible(true);
    } else if (title === 'App Settings') {
      navigation.navigate('Settings')
    } else if (title === 'Statistics') {
      navigation.navigate('Statistics')
    } else if (title === 'My Profile') {
      navigation.navigate('MyProfile')
    } else if (title === 'Deliveries') {
      navigation.navigate('Deliveries')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/img/defaultImage1.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Pratik Soni</Text>
        <TouchableOpacity>
          <Text style={styles.profileName1}>pratiksoni@gmail.com</Text>
        </TouchableOpacity>
        <View style={styles.tabButtonsContainer}>
          {TabButton(currentTab, setCurrentTab, 'Deliveries', deliveryIcon, handleTabPress)}
          {TabButton(currentTab, setCurrentTab, 'My Profile', profileIcon, handleTabPress)}
          {TabButton(currentTab, setCurrentTab, 'Statistics', statisticsIcon, handleTabPress)}
          {TabButton(currentTab, setCurrentTab, 'App Settings', settingsIcon, handleTabPress)}
          {TabButton(currentTab, setCurrentTab, 'Logout', logoutIcon, handleTabPress)}
        </View>
      </View>

      <Animated.View
        style={[
          styles.contentContainer,
          {
            transform: [
              { scale: scaleValue },
              { translateX: offsetValue },
            ],
          },
        ]}
      >
        {showDrawer ? (
          <TouchableOpacity
            style={styles.menuButton}
            onPress={closeDrawer}
          >
            <Image
              source={require('../../assets/img/close.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.headerContainer}>
            <View style={[cStyles.wrapT, { paddingHorizontal: 20 }]}>
              <TouchableOpacity
                style={cStyles.backContainer}
                activeOpacity={0.8}
                onPress={toggleDrawer}
              >
                <Image
                  source={require('../../assets/img/menu.png')}
                  style={styles.menuIcon}
                />
              </TouchableOpacity>
              <Text style={cStyles.backText}>Dashboard</Text>
              <TouchableOpacity
                style={cStyles.backContainer1}
                activeOpacity={0.8}
              >
               <Image
                  source={require('../../assets/img/notifications.png')}
                  style={cStyles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
        <View style={[styles.leftContainer, { justifyContent: 'space-between', paddingHorizontal: 10,},]}>
              <View style={styles.leftContainer}>
         <View  style={styles.imageC}>
              <Image source={require('../../assets/img/defaultImage1.png')} style={styles.image} />
         </View>
      
        <View style={styles.textContainer}>
          <Text style={[cStyles.headerText0BL, {marginBottom: 4,}]}>Hey Pratik!</Text>
          <Text style={cStyles.headerText2BL}>+91 9898989898</Text>
        </View>
        
      </View>
     <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
     <View  style={styles.starImage}>
        <Image
            source={require('../../assets/img/star.png')}
            style={cStyles.icon}
          />
     </View>
          
          <Text style={[styles.text, { alignSelf: 'center' }]}>4.0</Text>
        </View>
        </View>
       
      <View style={styles.horizontalLine} />
     <View style={[styles.leftContainer, { justifyContent: 'space-between', paddingLeft: 10,},]}>
         <Text style={cStyles.headerText0BL}>Your Current Online Status</Text>
      <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
        <Switch value={toggleValue} onValueChange={handleToggle} />
      </TouchableOpacity>
     </View>
    
        </View>
        <View style={styles.content}>
             <Text style={[cStyles.headerText0BL, {marginBottom: 15}]}>Your Earnings</Text>
           <View style={styles.card1}>
        <View style={styles.earning}>
          <Text style={[cStyles.headerText2G ,{marginBottom: 4}]}>Today’s Earning</Text>
          <Text style={cStyles.headerText2Gr}>₹320.00</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.earning}>
          <Text style={[cStyles.headerText2BL2,{marginBottom: 4}]}>Monthly Earning</Text>
          <Text style={cStyles.headerText3BL}>₹1,220.00</Text>
        </View>
      </View>
        </View>
         <View style={styles.content}>
            <Text style={[cStyles.headerText0BL, {marginBottom: 15}]}>Currently Delivering</Text>
         <View style={styles.card2}>
            <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
            <Text style={[cStyles.headerText0BL]}>#UNTD2405134</Text>
             <Text style={[cStyles.headerText2G,]}>₹1,939.00</Text>
        </View>
          <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
              <View style={styles.leftContainer}>
         <View  style={styles.imageL}>
              <Image source={require('../../assets/img/beer1.png')} style={styles.image2} />
         </View>
      
        <View style={styles.textContainer}>
          <Text style={[cStyles.cardText, {marginBottom: 0,}]}>The Glenlivet 12 Year Old</Text>
          <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 4 Items</Text>
           <Text style={[cStyles.cardText, styles.numberText]}>
              10:00 AM - 11:00 AM
            </Text>
        </View>
        
      </View>
     <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
     <View  style={styles.starImage}>
        <Image
            source={require('../../assets/img/file.png')}
            style={cStyles.icon}
          />
     </View>
          
        </View>
        </View>
       
         </View>
        </View>
         <View style={styles.content}>
            <Text style={[cStyles.headerText0BL, {marginBottom: 15}]}>Pending Orders <Text style={cStyles.headerText2G}>(3)</Text></Text>
         <View style={styles.card2}>
            <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
            <Text style={[cStyles.headerText0BL]}>#UNTD2405135</Text>
             <Text style={[cStyles.headerText2G,]}>₹1,569.00</Text>
        </View>
          <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
              <View style={styles.leftContainer}>
         <View  style={styles.imageL}>
              <Image source={require('../../assets/img/beer1.png')} style={styles.image2} />
         </View>
      
        <View style={styles.textContainer}>
          <Text style={[cStyles.cardText, {marginBottom: 0,}]}>Jim Bim Bourbon Whiskey</Text>
          <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 1 Items</Text>
           <Text style={[cStyles.cardText, styles.numberText]}>
              12:00 AM - 01:00 PM
            </Text>
        </View>
        
      </View>
     <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
     <View  style={styles.starImage}>
        <Image
            source={require('../../assets/img/file.png')}
            style={cStyles.icon}
          />
     </View>
          
        </View>
        </View>
       
         </View>
        </View>
            <View style={styles.content}>
            <Text style={[cStyles.headerText0BL, {marginBottom: 15}]}>Orders <Text style={cStyles.cardText}>(Today)</Text></Text>
         <View style={styles.cardContainer}>
      <View style={styles.cardC}>
        <Text style={styles.cardText}>03</Text>
         <Text style={[cStyles.cardText, {marginBottom: 0, textAlign:'center'}]}>Pending{'\n'}Orders</Text>
      </View>
      <View style={styles.cardC}>
        <Text style={styles.cardText}>07</Text>
         <Text style={[cStyles.cardText, {marginBottom: 0, textAlign:'center'}]}>Completed{'\n'}Orders</Text>
      </View>
    </View>
        </View>
         <View style={{ marginBottom: height * 0.15, }}></View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const TabButton = (currentTab, setCurrentTab, title, image, handleTabPress) => {
  return (
    <TouchableOpacity
      onPress={() => handleTabPress(title)}
       activeOpacity={0.8}
      style={[
        styles.tabButton,
        {
          backgroundColor: currentTab === title ? 'transparent' : 'transparent',
        },
      ]}
    >
     <Image
        source={image}
        style={styles.tabIcon}
      />
      <Text
        style={[
          styles.tabText,
          {
            color: currentTab === title ? '#fff' : '#fff',
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardText: {
   fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#DF1F26',
    lineHeight: 28,
    fontWeight: '600',
  },
    cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardC: {
    width: (width - 52) / 2, // Calculate width based on screen width and padding
    height: 92, // Set height as per your design
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16, // Adjust vertical margin between cards
    borderWidth: 1,
    borderColor: '#DF1F26',
  },
      numberText: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start', 
  },
    content:{
marginTop: 24,
    },
     card2: {
   backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 16,
    borderColor: '#D9D9D9',
    borderWidth: 1
  },
  image2:{
    height: '85%',
        width: '85%',
        resizeMode: 'contain',
  },
      imageL:{
         width: 50,
    height: 50,
        borderWidth: 1,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 12
    },
  card1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 16,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center', 
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
    text: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#121212',
    fontWeight: '600',
    marginLeft: 4
  },
    starImage:{
        height: 19,
        width: 19,
        
    },
    
    imageC:{
         width: 50,
    height: 50,
        borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
     borderRadius: 6,
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 12
    },
    card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingVertical: 16,
    marginVertical: 8,
    borderColor: '#D9D9D9',
    borderWidth: 1
  },
   leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'column',
     justifyContent: 'center',
  },
  horizontalLine: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#DF1F26',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerContainer: {
    //paddingHorizontal: 10,
  },
  profileContainer: {
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginTop: 30,
  },
  profileImage: {
    width: 74,
    height: 74,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginTop: 8,
  },
  profileName: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    lineHeight: 18,
    fontWeight: '500',
    marginTop: 14,
  },
  profileName1: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    lineHeight: 17,
    fontWeight: '500',
  },
  tabButtonsContainer: {
    flex: 1,
    marginTop: 20,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
  },
  tabText: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    lineHeight: 18,
    fontWeight: '500',
    marginLeft: 14,
  },
   tabIcon: {
     height: 25,
        width: 25,
        resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    //paddingHorizontal: 10,
    borderRadius: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
     paddingVertical: 20,
  },
  menuButton: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  menuIcon: {
    width: 24,
    height: 21,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default HomePage;
