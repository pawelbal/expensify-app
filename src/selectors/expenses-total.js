const selectExpensesTotal = (expenses) => {
  return expenses
    .map((expense) => {
      return expense.amount;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);
};

export default selectExpensesTotal;
