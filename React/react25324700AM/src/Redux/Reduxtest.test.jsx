import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PrintStoreValue from './PrintStoreValue';
import { IncrementAction, DecrementAction } from './action';

const mockStore = configureStore([]);

test('renders PrintStoreValue component with initial values', () => {
  const initialState = {
    count: 0,
    course: 'React',
    details: { institute: 'ABC Institute', city: 'New York' },
    increment: { IncrementAction },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <PrintStoreValue {...initialState} IncrementAction={jest.fn()} DecrementAction={jest.fn()} />
    </Provider>
  );

  expect(screen.getByText('0')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('ABC Institute')).toBeInTheDocument();
  expect(screen.getByText('New York')).toBeInTheDocument();
});

test('increments count when Increment button is clicked', () => {
  const initialState = { count: 0, course: 'React', details: { institute: 'ABC Institute', city: 'New York' } };
  const store = mockStore(initialState);
  const mockIncrement = jest.fn();

  render(
    <Provider store={store}>
      <PrintStoreValue {...initialState} IncrementAction={mockIncrement} DecrementAction={jest.fn()} />
    </Provider>
  );

  fireEvent.click(screen.getByText('Increment'));
  expect(mockIncrement).toHaveBeenCalled();
});

test('decrements count when Decrement button is clicked', () => {
  const initialState = { count: 0, course: 'React', details: { institute: 'ABC Institute', city: 'New York' } };
  const store = mockStore(initialState);
  const mockDecrement = jest.fn();

  render(
    <Provider store={store}>
      <PrintStoreValue {...initialState} IncrementAction={jest.fn()} DecrementAction={mockDecrement} />
    </Provider>
  );

  fireEvent.click(screen.getByText('Decrement'));
  expect(mockDecrement).toHaveBeenCalled();
});