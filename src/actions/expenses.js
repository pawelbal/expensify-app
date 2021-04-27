import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

// Add expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = {
      description,
      note,
      amount,
      createdAt,
    };
    return database
      .ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// Remove expense
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id,
  },
});

// startRemoveExpenses
export const startRemoveExpenses = ({ id } = {}) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(
          removeExpense({
            id,
          })
        );
      });
  };
};

// Edit expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// startEditExpense
export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses,
});

// export const startSetExpenses
export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
