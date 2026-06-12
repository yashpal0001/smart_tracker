import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ExpenseCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {item.title}
      </Text>

      <Text>
        ₹{item.amount}
      </Text>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});