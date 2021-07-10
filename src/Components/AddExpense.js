import React, { useState } from "react";
import "./CSS/AddExpense.css";

function AddExpense(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountHandler = (e) => {
      setAmount(e.target.value)
  }

  const dateHandler = (e) => {
    setDate(e.target.value)
  }

  const submitClickHandler = (event) => {
    event.preventDefault();

    const NewExpense = [{
        title:title,
        amount:amount,
        date:new Date(date)
    }]
    console.log(NewExpense)
    props.onAddExpense(NewExpense);
    setTitle('')
    setDate('')
    setAmount('')

  };

  return (
    <form onSubmit={submitClickHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0" value={amount} onChange={amountHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" value={date} onChange={dateHandler} />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddExpense;
