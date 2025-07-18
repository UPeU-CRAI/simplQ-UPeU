import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store';

import LeaveQueue from '../LeaveQueue';

jest.mock('store/asyncActions', () => ({
  useDeleteToken: () => jest.fn(),
}));

const renderWithState = (state) => {
  const store = configureStore({ reducer: rootReducer, preloadedState: state });
  return render(
    <Provider store={store}>
      <LeaveQueue />
    </Provider>
  );
};

test('does not render leave queue item when token is removed', () => {
  renderWithState({ token: { tokenStatus: 'REMOVED' } });
  expect(screen.queryByText(/leave queue/i)).toBeNull();
});
