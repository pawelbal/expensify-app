//  Set Text filter
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// Sort by amount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount',
});

// Sort by date
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date',
});

// Set Start Date
export const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate,
});

// Set End Date
export const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate,
});
