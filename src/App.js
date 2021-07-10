import React, { useState } from "react";
import ExpenseItem from "./Components/ExpenseItem";
import AddExpense from "./Components/AddExpense";
import "./Components/CSS/Expense.css";
import "./Components/CSS/NewExpense.css";
import Filter from "./Components/Filter";

function App() {
  const [filter, setFilter] = useState('2020');
  const ExpenseItems = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
  ];

  const [expense, setExpense] = useState(ExpenseItems);

  const newExpenseHandler = (getNewExpense) => {
    setExpense((prevExpense) => {
      return [...getNewExpense, ...prevExpense];
    });
    console.log(expense);
  };
  const FilterHandler = (seletedYear) => {
    setFilter(seletedYear);
  };
  const FilteredExpense = expense.filter((filterData) => {
    return filterData.date.getFullYear().toString() === filter;
  });

  return (
    <div className="App">
      <div className="new-expense">
        <AddExpense onAddExpense={newExpenseHandler} />
      </div>
      <Filter select={filter} onFilter={FilterHandler} />
      <div className="expenses">
        {FilteredExpense.length === 0 ? <p>No data To Display</p> : FilteredExpense.map((Items) => (
          <ExpenseItem
            title={Items.title}
            amount={Items.amount}
            date={Items.date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
