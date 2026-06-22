import React from 'react';
import { ExpenseProvider } from './src/context/ExpenseContext';
import AppNavigator from "./src/navigation/AppNavigation"
export default function App() {
  return (
    <ExpenseProvider>
      <AppNavigator />
    </ExpenseProvider>
  );
}