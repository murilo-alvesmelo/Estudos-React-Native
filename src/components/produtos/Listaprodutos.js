import React from 'react'
import {Text} from 'react-native'
import style from '../style'

import produtos from './produtos'

export default props => {

    function lista(){
        return produtos.map(p =>{
            return(
                <Text key={p.id}>{p.id} - {p.nome} R$: {p.preco}</Text>
            )
        })
    }
    return (
        <>
            <Text style={style.fontG}>Lista de Produtos</Text>
            {lista()}
        </>
    )
}