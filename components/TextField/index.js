import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = ({onInputChange}) => {
  const [text, setText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const onChangeText = (e) => {
    onInputChange(e)
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Номер и ФИО"
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;