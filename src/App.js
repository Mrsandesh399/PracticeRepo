import { useState } from 'react';
import Expenses from './component/Expenses/Expenses';
import AddNewExpense from './component/NewExpenses/AddNewExpense';
const dummy_data = [
  {
    id: 1,
    expenseDate: new Date(2020, 2, 22),
    expenseDescription: 'Television',
    expenseMoney: '220$',
  },
  {
    id: 2,
    expenseDate: new Date(2023, 2, 28),
    expenseDescription: 'car insurance',
    expenseMoney: '1120$',
  },
  {
    id: 3,
    expenseDate: new Date(2022, 2, 15),
    expenseDescription: 'Washing machine',
    expenseMoney: '120$',
  },
];
function App() {
  const [expense, setExpense] = useState(dummy_data);

  const onAddExpense = (expense) => {
    setExpense((prevExpense) => {
      console.log(expense, './..././............expense');
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <AddNewExpense expenses={onAddExpense} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
