import React,
{
  useState,
  useContext,
} from 'react';

import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import {ExpenseContext}
from '../context/ExpenseContext';

export default function AddExpenseScreen({
  navigation,
}) {

  const [title, setTitle] =
  useState('');

  const [amount, setAmount] =
  useState('');

  const {addExpense} =
  useContext(ExpenseContext);

  const saveExpense = () => {

    addExpense({
      title,
      amount,
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Expense Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />

      <Button
        title="Save Expense"
        onPress={saveExpense}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    borderRadius: 8,
    padding: 10,
  },
});