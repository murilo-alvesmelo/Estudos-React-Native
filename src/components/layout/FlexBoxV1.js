import React from 'react'
import {Text, StyleSheet, View, BackHandler} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado/>
            <Quadrado cor='#F00'/>
            <Quadrado cor='#A52'/>
            <Quadrado cor='#F72'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#FFF'
    }
})