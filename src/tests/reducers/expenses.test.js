import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    expense: {
      id: expenses[1].id,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    expense: {
      id: '-1',
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('shold add expense', () => {
  const expense = {
    id: '4',
    description: 'Test',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('shold edit expense with provided id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '3',
    updates: {
      note: 'Test edit',
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].note).toBe(action.updates.note);
});

test('shold not edit expense with wrong id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '33',
    updates: {
      note: 'Test edit',
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]],
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1]]);
});
