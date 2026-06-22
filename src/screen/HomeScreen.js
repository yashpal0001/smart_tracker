import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {ExpenseContext}
from '../context/ExpenseContext';

import ExpenseCard
from '../component/ExpenseCard';

export default function HomeScreen({
  navigation,
}) {

  const {expenses} =
  useContext(ExpenseContext);

  const totalExpense =
  expenses.reduce(
    (sum, item) =>
    sum + Number(item.amount),
    0,
  );

  return (
    <View style={styles.container}>

      <Text style={styles.balance}>
        Total Expense
      </Text>

      <Text style={styles.amount}>
        ₹{totalExpense}
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate(
            'AddExpense',
          )
        }>
        <Text style={styles.btnText}>
          Add Expense
        </Text>
      </TouchableOpacity>

      <FlatList
        data={expenses}
        keyExtractor={(_, index) =>
          index.toString()
        }
        renderItem={({item}) => (
          <ExpenseCard item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  balance: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  amount: {
    fontSize: 32,
    color: 'red',
    marginBottom: 20,
  },

  btn: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});