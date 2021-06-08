import { StatusBar } from 'expo-status-bar';

import React ,{useState,useEffect} from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import Box from './components/box';
import { Ionicons } from '@expo/vector-icons'; 

import React ,{useState} from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import Box from './components/box';


export default function App() {
 
const [boxes,setBoxes]=useState(Array(9).fill(null));
const [isXChance,setIsXChance]=useState(true);
const [winner,setWinner]=useState(null);

function PlayBox(no){
  return(
  <Box no={no} boxInfo={{boxes,setBoxes}} chance={{isXChance,setIsXChance}} winner={winner} />
  );
}

function calculateWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (boxes[a]!=null && boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      setWinner(boxes[a]); 
      return ;
    }
  }
  return null;
}

useEffect(()=>{
  calculateWinner();

},[isXChance])
function resetValues(){
  setWinner(null);
  setBoxes(Array(9).fill(null));
  setIsXChance(true);

}

function Boxes(){
  return (
    <View style={styles.playBoard}>
    <View style={styles.rows}>
      {PlayBox(0)}
      {PlayBox(1)}
      {PlayBox(2)}
    </View>
    <View style={styles.rows}>
      {PlayBox(3)}
      {PlayBox(4)}
      {PlayBox(5)}
    </View>
    <View style={styles.rows}>
      {PlayBox(6)}
      {PlayBox(7)}
      {PlayBox(8)}
    </View>
    </View>
  );
}
  return (
    <View style={styles.container}>
        <StatusBar style="auto"  backgroundColor='blue'/>
        <View style={styles.featureContainer}>{
            winner!=null?
            <Text style={[styles.primaryText,styles.winnerText]}>{winner} Won!</Text>:
            <Text styles={styles.primaryText}>Chance:{isXChance?'X':'O'}</Text>
}
<Ionicons style={styles.resetIcon} name="reload-circle" size={24} color="black" onPress={resetValues} />
</View>
    <Boxes />


  return (
    <View style={styles.container}>
        <StatusBar style="auto"  backgroundColor='blue'/>
     <View style={styles.playBoard}>
     <View style={styles.rows}>
       {PlayBox(0)}
       {PlayBox(1)}
       {PlayBox(2)}
     </View>
     <View style={styles.rows}>
       {PlayBox(3)}
       {PlayBox(4)}
       {PlayBox(5)}
     </View>
     <View style={styles.rows}>
       {PlayBox(6)}
       {PlayBox(7)}
       {PlayBox(8)}
     </View>
     </View>

    </View>
  );
}



const styles=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#fff',
  justifyContent:'center',
  alignItems:'center',
},

  playBoard:{
    borderWidth:5,
    borderRadius:10,

  },

  resetIcon: {
    position: 'absolute',
    right: 20,
  },
  rows:{
    flexDirection:'row'
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  primaryText: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  
  },
  winnerText: {
    color: 'darkorange',
    fontSize: 48,

  rows:{
    flexDirection:'row'

  }
});
