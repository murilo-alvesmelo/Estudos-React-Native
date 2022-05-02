import React, {useState} from 'react'
import {Text, View} from 'react-native'
import { TextInput } from 'react-native'
import style from './style'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput 
                placeholder="Digite aqui"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}