import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const result = removeExpense({ id: '123abc' });
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    expense: {
      id: '123abc',
    },
  });
});

test('should setup edit expense action object', () => {
  const result = editExpense('123qwe', { note: 'A new test note' });
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123qwe',
    updates: {
      note: 'A new test note',
    },
  });
});

test('should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This is last month rent',
    amount: 1000,
    createdAt: 1000,
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test('should set up add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
