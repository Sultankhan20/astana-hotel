import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UselessTextInput from './components/TextField';
import OrderTable from './components/OrderTable';

export default function App() {
  const searchRef = useRef(null);
  const [searchInput, setSearchInput] = useState(null);

  function CatchInputChange(e){
    // console.log("app.js: " + e)
    setSearchInput(e);
  }

  return (
    <View 
        style={styles.container}
      >
        <Text>Guest Search</Text>
        <UselessTextInput  
          onInputChange={CatchInputChange}
        />
        <OrderTable
          keyWord={searchInput}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 50,
    top: 70,
  },
  table: {
    position: 'relative'
  }
});
