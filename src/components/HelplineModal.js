// HelplineModal.js
import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const HelplineModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Image source={require('../../assets/img/warning.png')} resizeMode='contain' style={{ margin: 4 }} />
              <Text style={styles.modalTitle}>Facing Issue</Text>
            </View>
            <Text style={styles.modalText}>Call Helpline Number!</Text>
          </View>
          <View style={{ flexDirection: "column", margin: 10 }}>
            <TouchableOpacity style={styles.callButton} onPress={() => {
              Alert.alert('Calling Helpline');
            }}>
              <Image source={require('../../assets/img/phone.png')} resizeMode='contain' style={styles.callIcon} />
              <Text style={styles.callButtonText}>Call Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontWeight: "600",
    color: "#DF1F26",
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 19,
    left: 8,
    top: 4,
  },
  modalText: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 19,
    textAlign: "center",
  },
  callButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000000",
    width: 100,
    height: 28,
    borderRadius: 7,
    justifyContent: "space-evenly",
  },
  callIcon: {
    top: 6,
    padding: 3,
    left: 4,
  },
  callButtonText: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 19,
    textAlign: "center",
    top: 4,
  },
});

export default HelplineModal;
