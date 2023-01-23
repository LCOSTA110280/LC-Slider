import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import Slider from '@react-native-community/slider';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      valor:0,
      
    }
    
  }

  render(){  
  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorSelecionado)=>this.setState({valor:valorSelecionado})}
        value={this.state.valor}
        minimumTrackTintColor='red'
        maximumTrackTintColor='green'
        >
      </Slider>

      <Text style={{textAlign:'center', fontSize:30}}>
        Você tem {this.state.valor.toFixed(0)} KG
      </Text>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  
    
})

export default App;


