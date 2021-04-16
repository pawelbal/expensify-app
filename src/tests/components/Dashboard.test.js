import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashbordPage from '../../components/Dashboard';

test('should render DashboardPage', () => {
  const wrapper = shallow(<ExpenseDashbordPage />);
  expect(wrapper).toMatchSnapshot();
});
