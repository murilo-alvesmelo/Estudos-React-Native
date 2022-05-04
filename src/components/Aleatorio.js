import React from "react";
import { Text } from "react-native";
import style from "./style";

export default props =>{
    
    const numeroAleatorio = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    return(
        <Text style={style.fontM}>Nº: {numeroAleatorio}</Text>
    )
}