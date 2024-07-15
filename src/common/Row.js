import React from "react";
import RowColStyle from "./Styles/RowCol";
import { View } from "react-native";


const Row = ({ children }) => (
    <View style={RowColStyle.row}>{children}</View>
)

export default Row;