import React from "react"
import {View, StyleSheet} from 'react-native'
import ContadorV2 from "./src/components/contador/ContadorV2"

//import Pai from "./src/components/indereta/Pai"
//import Aleatorio from "./src/components/Aleatorio";
//import Botao from "./src/components/Botao";
//import Minmax from "./src/components/Minmax";
//import Contador from "./src/components/Contador";
//import CompPadrao, { Comp1, Comp2 } from "./src/components/Multi";
//import Primeiro from "./src/components/Primeiro"
//import Soma from "./src/components/Soma";
//import Titulo from "./src/components/Titulo";

/* function App(){
    return(
        <View>
            <Primeiro/>
        </View>
    );
}

export default App */

/* const App = function() {
    return(
        <View>
            <Primeiro/>
        </View>
    );
}
export default App */

/* export default function(){
    return(
        <View>
            <Primeiro/>
        </View>
    );
} */

export default () => (
        <View style={style.App}>
            <ContadorV2/>
            {/*
            <Pai/>
            <Contador/>
            <Botao/>
            <Titulo principal='Previpalmas' secundario="Bem vindo"/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Minmax min={3} max={90}/>
            <Minmax min={5} max={60}/>
            <Soma num1={10} num2={10}/>
            <Primeiro/>
            <CompPadrao/>
            <Comp1/>
            <Comp2/> */}
        </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#9DD6F6',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20
    }
})