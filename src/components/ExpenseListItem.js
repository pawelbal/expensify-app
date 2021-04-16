import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
  <div>
    <Link to={'/edit/' + props.expense.id}>
      <h3>{props.expense.description}</h3>
    </Link>

    <p>{props.expense.amount}</p>
    <p>{props.expense.createdAt}</p>
  </div>
);

export default ExpenseListItem;
