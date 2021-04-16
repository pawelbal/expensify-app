import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount',
  });
  expect(state.sortBy).toBe('amount');
});

test('shold set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const action = { type: 'SORT_BY_DATE', sortBy: 'date' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter to provided value', () => {
  const currentState = {
    text: ' ',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: 'SET_TEXT_FILTER', text: 'test value' };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe('test value');
});

test('should set startDate to provided value', () => {
  const currentState = {
    text: ' ',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const action = {
    type: 'SET_START_DATE',
    startDate: moment(0),
  };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toEqual(moment(0));
});

test('should set endDate to provided value', () => {
  const currentState = {
    text: ' ',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const action = {
    type: 'SET_END_DATE',
    endDate: moment(0),
  };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toEqual(moment(0));
});
