/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import colors from './Color';

const { width, height } = Dimensions.get('window');

const cStyles = StyleSheet.create({
  wrapT: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    justifyContent: 'space-between',
    backgroundColor: "#DF1F26",
  },
  backContainer: {
    height: 16,
    width: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  backContainer1: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  backText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1E92A',
    lineHeight: 19,
    alignSelf: 'center',
    paddingHorizontal: 5,
    textAlign: 'center',
    // left:85
  },
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    // top:35,
    left: 9
  },
  staricon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    left: 6
  },
  FileIcon: {
    width: 21,
    height: 21,
    resizeMode: "contain",
    top: 5,
    left: 1
  },
  cardText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: '#263238',
    lineHeight: 17,
    borderRadius: 5,
    fontWeight: "600"
  },
  TimeText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#4D4D4D',
    lineHeight: 17,
    borderRadius: 5,
  },
  headerText3Gr: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#1ECC44',
    lineHeight: 18,
    fontWeight: '500',
  },
  headerText0R: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#DF1F26',
    lineHeight: 24,
    fontWeight: '600',
  },
  headerText2G: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#4D4D4D',
    lineHeight: 18,
    fontWeight: '600',
  },
  TodayEarningtext: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#979797',
    lineHeight: 18,
    fontWeight: '500',
  },
  headerText2BL2: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#121212',
    lineHeight: 18,
    fontWeight: '500',
  },
  headerText2Gr: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#1A8A32',
    lineHeight: 24,
    fontWeight: '500',
  },
  headerText3BL: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#121212',
    lineHeight: 24,
    fontWeight: '500',
  },
  priceText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    lineHeight: 24,
    fontWeight: '500',
  },
  headerText0BL: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    lineHeight: 19,
    fontWeight: '600',
  },
  headerText1BL: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#121212',
    lineHeight: 24,
    fontWeight: '600',
  },
  headerText2BL: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#4D4D4D',
    lineHeight: 18,
    fontWeight: '500',
  },
  headerTextBL: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#121212',
    lineHeight: 15,
  },
  button: {
    alignSelf: 'center',
    height: 56,
    width: width / 1.2,
    backgroundColor: "#DF1F26",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    lineHeight: 19,
    fontWeight: '500',
  },
  uploadBtn: {
    height: 46,
    width: width / 2.2,
    backgroundColor: '#FEFCFC',
    borderColor: colors.inputBorderColor,
    borderWidth: 0.5,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  uploadBtnText: {
    color: '#121212',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    lineHeight: 19,
    fontWeight: '600',
  },
  requiredIndicator: {
    color: 'red', // Change the color as needed
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
  },
  progImage: {
    height: undefined,
    aspectRatio: 5,
    width: width - 32,
    resizeMode: 'contain',
  },
  closeImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  inputContainer1: {
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 0.8,
    borderRadius: 6,
    alignSelf: 'center',
    backgroundColor: '#FEFCFC',
    height: 46,
    width: '100%',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  inputs: {
    marginLeft: 8,
    color: '#121212',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    lineHeight: 16,
  },
  cardBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  // inputs: {
  //   height: 40,
  //   borderWidth: 1,
  //   borderColor: colors.inputBorderColor, // Use the color from colors.js
  //   padding: 10,
  //   borderRadius: 5,
  // },
});

export default cStyles;
