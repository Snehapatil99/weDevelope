import React from "react";
import RowColStyle from "./Styles/RowCol";
import { View } from "react-native";


const ColDivision = ({ numRows, children }) => {
    return  (
      <View style={RowColStyle.col_custom[`${numRows}col`]}>{children}</View>
    )
}

export default ColDivision;