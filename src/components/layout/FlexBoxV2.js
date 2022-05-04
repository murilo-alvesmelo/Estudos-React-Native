import React from 'react'
import {Text, StyleSheet, View, BackHandler} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado/>
            <Quadrado cor='#F00'/>
            <Quadrado cor='#A52'/>
            <Quadrado cor='#F72'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,  
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF'
    }
})