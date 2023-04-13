import React from 'react';

export default function ExpenseFilter(props) {
  const selectYear = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectYear}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
