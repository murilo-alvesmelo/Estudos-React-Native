import React, { Component }from 'react'
import {Text, TextInput} from 'react-native'
import style from '../style'

export class Mega extends Component{

    state ={
        qtdNumeros: this.props.qtdNumeros || 6
    }
    constructor(props){
        super(props)
        this.alterarQuantidadeNumero = this.alterarQuantidadeNumero.bind(this)
    }
    alterarQuantidadeNumero = (qtd) =>{
        this.setState({qtdNumeros: qtd})
    }
    render(){ 
        return (
            <>
                <Text style={style.fontG}>Gerador de Mega-Sena</Text>
                <TextInput
                    keyboardType='numeric'
                    style={{borderBottomWidth: 1}}
                    placeholder='Quantidade de numeros'
                    value={this.state.qtdNumeros}
                    onChange={this.alterarQuantidadeNumero}
                />
            </>
        )
    }
}