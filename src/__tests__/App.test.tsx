import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('App test', () => {
  test('renders learn react link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    
    const linkElement = screen.getByText(/Daily Goal/i);
    expect(linkElement).toBeInTheDocument();
  });  
});
