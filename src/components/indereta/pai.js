import React, { useState } from 'react'
import {Text} from 'react-native'
import Filho from './Filho'

export default props => {
    const [num, setNum] = useState(0)
    const [msg, setMsg] = useState('')
    function exibirValor(numero, msg){
        setNum(numero)
        setMsg(msg)
    }
    return (
        <>
        <Text>{msg}{num}</Text>
        <Filho
            min ={1}
            max={60}
            funcao={exibirValor}
        />
        </>
    )
}