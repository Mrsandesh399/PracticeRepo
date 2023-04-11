import React, { useState } from 'react';
import './NewExpense.css';

export default function NewExpense() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titlehandler = (e) => {
    setTitle(e.target.value);
  };

  const amounthandler = (e) => {
    setAmount(e.target.value);
  };

  const datehandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlehandler}></input>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input type="number" min="0.01" onChange={amounthandler}></input>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="10/4/2023"
            max="31/12/2024"
            onChange={datehandler}
          ></input>
        </div>
        <div className="new-expense__actions ">
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
}
