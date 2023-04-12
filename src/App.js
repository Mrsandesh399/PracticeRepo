import Expenses from './component/Expenses/Expenses';
import AddNewExpense from './component/NewExpenses/AddNewExpense';
function App() {
  const expense = [
    {
      id: 1,
      expenseDate: new Date(2023, 2, 22),
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
      expenseDate: new Date(2023, 2, 15),
      expenseDescription: 'Washing machine',
      expenseMoney: '120$',
    },
  ];

  const onAddExpense = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <AddNewExpense expenses={onAddExpense} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
