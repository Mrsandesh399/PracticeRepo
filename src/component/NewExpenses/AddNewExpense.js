import React from 'react';
import NewExpense from './NewExpense';
import './AddNewExpense.css';

export default function AddNewExpense() {
  const onSaveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense ">
      <NewExpense onSaveData={onSaveDataHandler} />
    </div>
  );
}
