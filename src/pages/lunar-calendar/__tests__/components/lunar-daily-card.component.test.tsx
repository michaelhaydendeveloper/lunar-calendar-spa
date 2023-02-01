import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { LunarDailyCard } from '../../components/lunar-daily-card.component';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';

describe('Lunar Daily Card Component tests', () => {
  let lunarH1Header: HTMLElement;
  let lunarPhase: HTMLElement;
  let lunarPhaseEmoji: HTMLElement;
  let localDateString: HTMLElement;
  let lunarAge: HTMLElement;
  let lunarAgePercent: HTMLElement;

  beforeAll(async () => {
    // Freeze time
    jest.useFakeTimers();
    jest.setSystemTime(new Date('20 Aug 2020 02:12:00 GMT'));

    const {getByTestId} = await act(() => render(<BrowserRouter><App /></BrowserRouter>));
      
    // click nav link
    const lunarCalendarNav = getByTestId('navigation-feature-nav-item-1');
    fireEvent.click(lunarCalendarNav);

    // Check for component instance
    getByTestId('lunar-daily-card');
    
    // Get sub components
    lunarH1Header = getByTestId('lc-h1-header');
    lunarPhase = getByTestId('lc-lunar-phase');
    lunarPhaseEmoji = getByTestId('lc-lunar-phase-emoji');
    localDateString = getByTestId('lc-local-date-string');
    lunarAge = getByTestId('lc-lunar-age');
    lunarAgePercent = getByTestId('lc-lunar-age-percent');
  });

  afterAll(() => {
    // restore time
    jest.useRealTimers();
  });

  describe('[INITIAL STATE] Check for elements on the Initial Page', () => {
    test('renders', () => {
      // const linkElement = screen.getByText(/Daily Goal/i);
      // expect(linkElement).toBeInTheDocument();
    });  
    test('Check Values against mocked Date and Time', () => {
      expect(lunarH1Header.innerHTML).toBe('Lunar Calendar');
      expect(lunarPhase.innerHTML).toBe('New');
      expect(lunarPhaseEmoji.innerHTML).toBe('🌑');
      expect(localDateString.innerHTML).toBe('8/20/2020, 2:12:00 AM');
      expect(lunarAge.innerHTML).toBe('Lunar Age: 1.19 Days');
      expect(lunarAgePercent.innerHTML).toBe('Lunar Age Percent: 4.04%');
    });

    // TODO: Look back upon getting this to work after ENUMS get set up
    // test('Check values change when time increments', () => {
    //   jest.useRealTimers();
    //   jest.useFakeTimers
    //   jest.setSystemTime(new Date('20 Aug 2020 02:15:00 GMT'));
    //   expect(localDateString.innerHTML).toBe('8/20/2020, 2:15:00 AM');
    // });
  });
});
