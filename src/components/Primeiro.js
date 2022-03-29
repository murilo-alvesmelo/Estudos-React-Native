import React from "react";
import { Text } from 'react-native'
import style from "./style";

export default () => {
    console.warn("Debug Console.warn")
    return(
        <Text style={style.fontG}>Primeiro componente</Text>
    );
}