//https://github.com/react-community/create-react-native-app
// para iniciar o EXPO CLI digitar no diretorio do programa:
// expo start

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        <Image style ={{width: 100, height: 100}}
        source={{uri: 'http://ms.icasual.com.br:81/fotos/CLI172700.jpg'}}
        />

        <Text style = {{fontSize:20}}>
              Renata Neves
        </Text>

        <Text>Vendas no período: 
              <Text style = {{fontSize:20, color:'red', fontWeight: 'bold'}} > R$ 1 159,00 </Text>
        </Text>
        <Text>Margem de Contribuição: 
          <Text style = {{fontSize:20, color:'red', fontWeight: 'bold'}} >  
              R$ 662,00
          </Text>
        </Text>


      </View>
    );}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
