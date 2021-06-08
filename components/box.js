import React,{useState} from 'react';

import {View,Text,StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default function Box({no,boxInfo,chance,winner}){
    const {isXChance,setIsXChance}=chance;
    const player=isXChance?'X':'O';
    const {boxes,setBoxes}=boxInfo;
    return(
        <TouchableWithoutFeedback>
            <View style={styles.boxView}>
                <Text >{player}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles=StyleSheet.create({
    boxView:{
        
        minWidth:110,
        minHeight:110,
        borderWidth:2,
        borderColor:'gray',
        justifyContent:'center',
        alignItems:'center'
    }
})