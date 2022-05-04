import React from "react";
import { Text } from "react-native";
import style from "./style";

export default props => (
    <Text style={style.fontG}>A soma dos numeros é: {props.num1 + props.num2}</Text>
)