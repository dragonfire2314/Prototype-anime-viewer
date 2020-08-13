/*
import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

const apiAddress = 'http://70.44.140.70:7777/search';
async function getAnimeSearch() {
  try {
    let res = await fetch(apiAddress, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ search: 'full metal panic'})
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error('Error is: ${error}');
  }
}

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

function addItem() 
{
  console.log("Add item");
}

export default App = () => {

  const [todoItems, setTodo] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Sample Item',
    },
  ]);

  const todoItemHandler = (list) => {
    list.forEach(element => {
      setTodo((prevTodo) => {
        return [
          { title: element.title, id: Math.random().toString() },
          ...prevTodo
        ]
      });
    });  
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>dfgdfgthdfsis</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={todoItems}
        renderItem={({item}) => <Item title={item.title}/>}
      />
      <Button 
        title={'Add'}
        onPress={() => {
          getAnimeSearch().then(res =>{
            todoItemHandler(res);
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: '#BDBDBD',
    //borderStyle: 'solid',
    //borderLeftWidth: 1,
    //borderRightWidth: 1,
    //borderBottomWidth: 2,
    borderRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  }
});
*/

//New App Screen
import Navigator from './routes/drawer'
import React from 'react';
import Home from './screens/home'

export default function App() {
  return (
    <Navigator />
  );
}