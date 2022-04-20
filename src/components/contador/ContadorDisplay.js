import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import style from '../style'

export default props => {
    return (
        <View style={styleLocal.Display}>
            <Text style={[style.fontG, styleLocal.DisplayText]}>{props.num}</Text>   
        </View>
    )
}

const styleLocal = StyleSheet.create({
    Display:{
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText:{
        color: '#FFF'
    }
})