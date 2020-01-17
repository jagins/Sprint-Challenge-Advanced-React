import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('App renders without crashing', () =>
{
    render(<App/>);
});

test('Random color button is displayed on the screen', () =>
{
    const {getByTestId} = render(<App/>);
    getByTestId(/random-color-btn/i);
});