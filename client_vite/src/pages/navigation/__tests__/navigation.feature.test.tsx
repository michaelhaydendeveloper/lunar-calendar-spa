import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavigationContainer from '../navigation.container';
import { Provider } from 'react-redux';
import store from '../../../reducers/store';

test('Navigation Feature parts are visible', () => {
  render(<BrowserRouter>
        <Provider store={store}>
            <NavigationContainer />
        </Provider>
    </BrowserRouter>);

  screen.getByTestId('navigation-feature');
  screen.getByTestId('navigation-feature-logo');
  screen.getByTestId('navigation-feature-title');

  screen.getByTestId('navigation-feature-nav-item-0');
  screen.getByTestId('navigation-feature-nav-item-1');
  screen.getByTestId('navigation-feature-nav-item-2');
  screen.getByTestId('navigation-feature-nav-item-3');
  
});
