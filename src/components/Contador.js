import React, { useState } from "react";
import { Text, Button } from "react-native";
import style from './style';

export default ({inicial = 0, passo = 10}) =>{
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passo); 
    const dec = () => setNumero(numero - passo);
    return(
        <>
            <Text style={style.fontG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>       
        </>
    )
}