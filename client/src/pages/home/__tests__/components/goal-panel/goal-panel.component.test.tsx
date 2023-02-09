import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../../App';

describe('', () => {
    let goalPanelTextarea: HTMLElement;
    let goalPanelStartDateCalendar: HTMLElement;
    let goalPanelFinishDateCalendar: HTMLElement;

    beforeAll(async () => {
        const {getByTestId} = await act(() => render(<BrowserRouter><App /></BrowserRouter>));
          
        // click nav link
        const homeNav = getByTestId('navigation-feature-nav-item-0');
        fireEvent.click(homeNav);
    
        // Check for component instance
        getByTestId('goal-panel-component');
        
        // Get sub components
        goalPanelTextarea = getByTestId('goal-panel-textarea');
        goalPanelStartDateCalendar = getByTestId('goal-panel-start-date-calendar');
        goalPanelFinishDateCalendar  = getByTestId('goal-panel-finish-date-calendar');
    });
    
    afterAll(() => {
        // restore time
        jest.useRealTimers();
    });
    
    test('Test Finish Date cannot be greater or equal to Start Date', async() => {
        
        const input = goalPanelFinishDateCalendar.getElementsByTagName('input');
        act(() => {
            fireEvent.mouseDown(input[0]);
        });
        const day = await screen.findAllByText('6');
        fireEvent.dblClick(day[0]);
    });
});