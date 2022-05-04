import React from 'react'
import {Text} from 'react-native'

import Filho from './filho'

export default props=>{
    let x = 20
    let y = 100
    return (
        <>
        <Filho a={x} b={y}></Filho>
        <Filho a={x + 1} b={y}></Filho>
        </>
    )
}