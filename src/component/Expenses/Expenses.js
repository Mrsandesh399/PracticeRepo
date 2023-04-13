import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {
  const [filteredyear, setFilteredYear] = useState('2020');

  const changeYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === filteredyear;
  });

  return (
    <div>
      <ExpenseFilter
        selected={filteredyear}
        onChangeFilter={changeYearHandler}
      />
      {filterExpenses.length === 0 ? (
        <p>No Expense Found!</p>
      ) : (
        filterExpenses?.map((expense) => (
          <>
            <ExpenseItem
              title={expense.expenseDescription}
              amount={expense.expenseMoney}
              date={expense.expenseDate}
            />
          </>
        ))
      )}
    </div>
  );
}
