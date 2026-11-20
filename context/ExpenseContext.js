"use client";
import { createContext, useContext, useState } from 'react';

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  // Dynamic roommates state
  const [roommates, setRoommates] = useState(["Alice", "Bob"]);
  
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Monthly Groceries", amount: 1500, paidBy: "Alice", date: "2026-10-25" },
    { id: 2, title: "Electricity Bill", amount: 800, paidBy: "Bob", date: "2026-10-26" }
  ]);

  const addExpense = (newExpense) => {
    setExpenses([{ ...newExpense, id: Date.now() }, ...expenses]);
  };

  // --- New Roommate Management Functions ---
  const addRoommate = (name) => {
    if (name && !roommates.includes(name)) {
      setRoommates([...roommates, name]);
    }
  };

  const removeRoommate = (name) => {
    setRoommates(roommates.filter(r => r !== name));
  };

  const editRoommate = (oldName, newName) => {
    if (newName && !roommates.includes(newName)) {
      // Update the roommate list
      setRoommates(roommates.map(r => r === oldName ? newName : r));
      // Update any previous expenses paid by the old name to the new name
      setExpenses(expenses.map(e => e.paidBy === oldName ? { ...e, paidBy: newName } : e));
    }
  };
  // -----------------------------------------

  const totalSpend = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const splitAmount = roommates.length > 0 ? totalSpend / roommates.length : 0;

  const balances = roommates.map(person => {
    const paid = expenses.filter(e => e.paidBy === person).reduce((sum, e) => sum + e.amount, 0);
    return { person, balance: paid - splitAmount };
  });

  return (
    <ExpenseContext.Provider value={{ 
      expenses, addExpense, balances, totalSpend, roommates, 
      addRoommate, removeRoommate, editRoommate 
    }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpense = () => useContext(ExpenseContext);