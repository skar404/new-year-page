import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gift from './Gift';

describe('<Gift />', () => {
    test('it should mount', () => {
        render(<Gift/>);

        const gift = screen.getByTestId('Gift');

        expect(gift).toBeInTheDocument();
    });
});
