import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={9} expensesTotal={235000001} />
  );
  expect(wrapper).toMatchSnapshot();
});
