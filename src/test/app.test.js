import React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './app';

describe('Testing App', () => {
    test('render h1 element', () => {
        render(<App message="Hello World" />);
        
        expect(screen.getByText(/Hello/)).toBeInTheDocument();
    });

    test('increment', () => {
        render(<App message="Something"/>);
        const counter = screen.getByTestId('counter');
        const incrementButton = screen.getByText('Increment');
        UserEvent.click(incrementButton);
        UserEvent.click(incrementButton);
        expect(counter.textContent).toEqual('2');
        screen.debug();
    });

    test('decrement', () => {
        render(<App message=""/>);
        const counter = screen.getByTestId('counter');
        const decrementButton = screen.getByText('Decrement');
        UserEvent.click(decrementButton);
        expect(counter.textContent).toEqual('-1');
        UserEvent.click(decrementButton);
        expect(counter.textContent).toEqual('-2');
    });
});
