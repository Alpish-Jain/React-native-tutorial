import React from 'react';
import {View,Text,Button,StyleSheet,Button} from 'react-native';

function Square(props) {
    return (
      <Button style={styles.square} onClick={props.onClick}>
        {props.value}
      </Button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <View>
          <View style={styles.status}>{status}</View>
          <View style={styles.board-row}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </View>
          <View style={styles.board-row}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </View>
          <View style={styles.board-row}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </View>
        </View>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <View style={styles.game}>
          <View style={styles.game-board}>
            <Board />
          </View>
          <View style={styles.game_info}>
            <View>{/* status */}</View>
            <ol>{/* TODO */}</ol>
          </View>
        </View>
      );
    }
  }

  const styles=StyleSheet.create({

      status:{
          marginBottom:10
      },
      square:{
        backgroundColor:'#fff',
        borderColor:'#999',
        borderWidth:1,
        float:screenLeft,
        borderStyle:'solid',
        fontSize:24,
        fontWeight:'bold',
        lineHeight:34,
        height:34,
        marginRight:-1,
        marginTop:-1,
        padding0,
        textAlign:'center',
        width:34

      },
    game:{
        display:'flex',
        flexDirection:'row'
    },
    game_info:{
marginLeft:20
    }
    
  });
  export default Game;