import React, { Component, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const OrderTable = ({keyWord}) => {
    const [tableHead, setTablehead] = React.useState(['Name', 'Room']);
    const [tableData, setTableData] = React.useState(
        [
            ['Medet', '2'],
            ['Sula', '4'],
            ['Gei', '3']
        ]
    );
    const [filtered, setFiltered] = React.useState(null);

    useEffect(() => {
        console.log(keyWord)
        //filtering
        
        let output = tableData.filter(row => row.length > 0 && row[0].includes(keyWord));
        setFiltered(output);
    },[keyWord]);

    
  
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={filtered} textStyle={styles.text}/>
        </Table>
      </View>
    )
  };
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

export default OrderTable;