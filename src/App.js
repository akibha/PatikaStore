
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  TextInput, 
} from 'react-native';

import storeData from "./store_data.json";
import Product from "./Components/Product";


function App () {
  const renderProduct =( {item}) => <Product product = {item}/>
  
  return (
    <SafeAreaView  style = {styles.container}>
        <Text style ={styles.header}>PATIKASTORE</Text>
      
    <TextInput  placeholder= "Ara.." style = {styles.input}/>
      <FlatList
      
      horizontal={false}
      data= {storeData}
      renderItem={renderProduct}
      keyExtractor = {item => item.id.toString()}
      numColumns={2}
      
      />
      
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
    
  },
 

  header:{
    fontSize:50,
    fontWeight: 'bold',
    color: 'purple',
    margin:20,
    marginLeft:5
  },
  input:{
    backgroundColor:'#eceff1',
    margin:10,
    height:Dimensions.get('window').height/10,
    borderRadius:10
  }
});

export default App;