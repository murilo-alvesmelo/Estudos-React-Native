import React from 'react'
import {Text, StyleSheet, View, BackHandler} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado lado={20}/>
            <Quadrado cor='#F00' lado={30}/>
            <Quadrado cor='#A52' lado={40}/>
            <Quadrado cor='#F72' lado={50}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        height: 350,
        width: '100%',
        backgroundColor: '#FFF'
    }
})