import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { LunarDailyCard } from '../../components/lunar-daily-card.component';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';

describe('Lunar Daily Card Component tests', () => {
  describe('[INITIAL STATE] Check for elements on the Initial Page', () => {
    test('renders', async () => {
        const {getByTestId} = await act(() => render(<BrowserRouter><App /></BrowserRouter>));
        
        // click nav link
        const lunarCalendarNav = getByTestId('navigation-feature-nav-item-1');
        fireEvent.click(lunarCalendarNav);

        const lunarDailyCardEl = getByTestId('lunar-daily-card');
        console.log('lunarDailyCardEl', lunarDailyCardEl);
        // const linkElement = screen.getByText(/Daily Goal/i);
        // expect(linkElement).toBeInTheDocument();
      });  
  });
  describe('[COMPONENT] Test logic', () => {
    test('', () => {
      // const {getByTestId} = render(<LunarDailyCard />);
    });
  });
});
