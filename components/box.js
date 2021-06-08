import React,{useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import {View,Text,StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default function Box({no,boxInfo,chance,winner}){
    const {isXChance,setIsXChance}=chance;
    const player=isXChance?'X':'O';
    const {boxes,setBoxes}=boxInfo;
    return(
        <TouchableWithoutFeedback 
        onPress={()=>{
            if(boxes[no]===null && winner===null){
                setBoxes((prevBoxState)=>{
                    prevBoxState[no]=player
                    return prevBoxState;
                });
                setIsXChance((prevstate)=>!prevstate)
            }
        }}
        >
            {boxes[no]!=null?
            <View style={styles.boxView}>
                {boxes[no]==='X'?
                <Entypo name="cross" size={24} color="black" />:
                <Feather name="circle" size={24} color="black" />
                }
            </View>:
            <View style={styles.boxView}></View>
}
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