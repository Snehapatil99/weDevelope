import {StyleSheet} from 'react-native'

const RowColStyle = StyleSheet.create({ 

    /*****RowCustom */
    rowcustom: {
        flexDirection: "row",
        // height:80,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#080833',
        marginBottom: 5,
        alignItems:'center'
    },
    col_custom: {
        "1col":  {
            borderColor:  "#fff",
            borderWidth:  0,
            flex:  1,
        },
        "2col":  {
            flex:  3,
            alignItems:'flex-end',
            
        },
        "3col":  {
            flex:  3,
            alignItems:'flex-end'
            
        },
        "4col":  {
            flex:  3,
            alignItems:'flex-end'
            
        },
        "4col":  {
            flex:  3,
            alignItems:'flex-end'
            
        },
        "5col":  {
            flex:  3,
            alignItems:'flex-end'
            
        },
    },
    row: {
        flexDirection: "row",
        height: "auto",
        // backgroundColor: '#FFFFFF',
        marginBottom: 5,
        // marginHorizontal: 20,
        // borderWidth: 1,
        // borderColor:'#FFFFFF',
        // paddingVertical: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1,
        },
        alignItems:'center',
        justifyContent:'space-between'
    },
    "1col":  {
        borderColor:  "#fff",
        borderWidth:  0,
        flex:  1,
        right: 10
    },
    "2col":  {
        borderColor:  "#fff",
        borderWidth:  0,
        flex:  2,
        height: '100%'
    },
    "3col":  {
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  3
    },
    "4col":  {
        flex:  4
    },
    "5col":  {
        flex:  5
    },
})

export default RowColStyle;