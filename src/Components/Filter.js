import React,{useState} from "react";
import "./CSS/ExpenseItem.css";

function Filter(props) {
  const [filter, setFilter] = useState()

  const dropdownChangeHandler = (e) => {
    setFilter(e.target.value);
    console.log(filter)
    props.onFilter(filter);
  };

  return (
    <div>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.select} onChange={dropdownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
