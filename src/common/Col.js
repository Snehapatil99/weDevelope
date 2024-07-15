import React from "react";
import RowColStyle from "./Styles/RowCol";
import { View } from "react-native";

const Col = ({ numRows, children }) => {
    return  (
      <View style={RowColStyle[`${numRows}col`]}>{children}</View>
    )
}

export default Col;