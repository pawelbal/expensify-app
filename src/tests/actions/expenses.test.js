import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpenses,
  startEditExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'testuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test('should setup remove expense action object', () => {
  const result = removeExpense({ id: '123abc' });
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    expense: {
      id: '123abc',
    },
  });
});

test('should remove expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store
    .dispatch(startRemoveExpenses({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {
          id,
        },
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test('should edit expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = {
    description: 'Updated Gum',
  };

  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val().description).toEqual(updates.description);
      done();
    });
});

test('should set up add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('should add expense to DB and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Laptop',
    amount: '400000',
    note: 'New laptop for work',
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to DB and store', (done) => {
  const store = createMockStore(defaultAuthState);
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          description: '',
          note: '',
          amount: 0,
          createdAt: 0,
        },
      });
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual({
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
      });
      done();
    });
});

test('Should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});
