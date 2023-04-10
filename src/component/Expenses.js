import React from 'react';
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.items[0]?.expenseDescription}
        amount={props.items[0]?.expenseMoney}
        date={props.items[0]?.expenseDate}
      />
      <ExpenseItem
        title={props.items[1].expenseDescription}
        amount={props.items[1].expenseMoney}
        date={props.items[1].expenseDate}
      />
      <ExpenseItem
        title={props.items[2].expenseDescription}
        amount={props.items[2].expenseMoney}
        date={props.items[2].expenseDate}
      />
    </div>
  );
}
