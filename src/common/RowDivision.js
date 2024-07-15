import React from "react";
import RowColStyle from "./Styles/RowCol";
import { View } from "react-native";


const RowDivision = ({ children }) => (
    <View style={RowColStyle.rowcustom}>{children}</View>
)

export default RowDivision;