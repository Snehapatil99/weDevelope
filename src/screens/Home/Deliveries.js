import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const Deliveries = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollViewRef = useRef();
  const tabs = ['Pending', 'New Orders', 'Completed'];
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const type = ['pending', 'neworders', 'completed'][activeTab];
      try {
        const response = await axios.get(`https://temp.wedeveloptech.in/united/appdata/getdeliverylists-ax.php?type=${type}`);
        setOrderData(response.data.data); // Access the 'data' property from the response
        // console.log("data", response.data)
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, [activeTab]);

  const handleTabPress = (index) => {
    setActiveTab(index);
    scrollViewRef.current.scrollTo({ x: index * width - 32, animated: true });
  };
  const handleCardPress = (order) => {
    const { statusid, id ,dispid} = order;
    let route = '';
  
    switch (statusid) {
      case 1:
        route = 'OrderDetails'; // Navigate to OrderDetails for statusid 1
        break;
      case 2:
        // route = 'CompleteOrder'; // Navigate to CompleteOrder for statusid 2
        break;
      case 3:
        route = 'OrderDeliver'; // Navigate to OrderDeliver for statusid 3
        break;
      default:
        console.error('No route found for statusid:', statusid);
        return; // Exit the function if no valid route is found
    }
  
    // Check if the route is not empty
    if (route) {
      navigation.navigate(route, { did: id ,dispid:dispid});
    }
  };
  


  const renderOrderCard = (order) => (
    <TouchableOpacity key={order.dispid} onPress={() => handleCardPress(order)} style={styles.card2} activeOpacity={0.8}>
      <View style={[styles.leftContainer, { justifyContent: 'space-between' }]}>
        <Text style={[cStyles.headerText0BL]}>{order.dispid}</Text>
        <Text style={[cStyles.headerText2G]}>₹${order.price.toFixed(2)}</Text>
      </View>
      <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15 }]}>
        <View style={styles.leftContainer}>
          <View style={styles.imageL}>
            <Image source={{ uri: order.dispimage }} style={styles.image2} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[cStyles.cardText, { marginBottom: 0 }]}>{order.name}</Text>
            <Text style={[cStyles.cardText, { color: '#DF1F26', marginVertical: 4 }]}>+ ${order.more_items} Items</Text>
            <Text style={[cStyles.cardText, styles.numberText]}>{order.timeslot}</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <View style={[cStyles.cardBtn, { marginTop: 8, }]}>
          <Text style={[cStyles.cardText, { color: order.status === 'Pending' ? '#DF1F26' : "#1A8A32"  }]}>{order.status}</Text>
        </View>
        {order.showdtls === 1 && (
          <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
            <View style={styles.starImage}>
              <Image source={require('../../../assets/img/file.png')} style={cStyles.icon} />
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderTabContent = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      {orderData.map((order) => renderOrderCard(order))}
    </ScrollView>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
          <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Image source={require('../../../assets/img/Back.png')} style={cStyles.icon} />
          </TouchableOpacity>
          <Text style={cStyles.backText}>Deliveries</Text>
          <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tab, { borderColor: activeTab === index ? "#DF1F26" : '#000000' }]}
              onPress={() => handleTabPress(index)}
            >
              <Text style={[styles.tabText, { color: activeTab === index ? '#DF1F26' : '#000000' }]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onScroll={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width);
            setActiveTab(index);
          }}
          scrollEventThrottle={16}
        >
          {tabs.map((tab, index) => (
            <View key={index} style={styles.tabContent}>
              {renderTabContent()}
              <View style={{ marginBottom: height * 0.15, }}></View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    //paddingHorizontal: 10,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  tab: {
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    paddingHorizontal: height * 0.0175,
    paddingVertical: height * 0.012,
    borderWidth: 1,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#121212',
    lineHeight: 19,
  },
  tabContent: {
    width: width - 32, // Adjusted to fit within padding
    paddingVertical: 16,
  },
  card2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 16,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginBottom: 30
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageL: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 12
  },
  image2: {
    height: '85%',
    width: '85%',
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  numberText: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  starImage: {
    height: 19,
    width: 19,

  },
});

export default Deliveries;
