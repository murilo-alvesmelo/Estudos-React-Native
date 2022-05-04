import React from 'react'
import {Text, StyleSheet, View, BackHandler} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flex: 1,
        width: 100,
        backgroundColor: '#FFF'
    },
    V0: {
        backgroundColor: '#F72',
        height: 300,
    },
    V1: {
        flex: 9,
        backgroundColor: '#F00'
    },
    V2: {
        flex: 1,
        backgroundColor: '#A52'
    }
})