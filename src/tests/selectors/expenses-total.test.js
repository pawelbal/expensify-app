import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should return 195', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test('should return 14695', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(14695);
});
