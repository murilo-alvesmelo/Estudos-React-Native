import React from "react";
import { Text } from "react-native";
import style from "./style";

export default props =>(
        <Text style={style.fontG}>O valor { props.max } é maior que {props.min}</Text>
)