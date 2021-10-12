import { render, screen, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import ReactTesting from './index';
document.createRange = () => {
    const range = new Range();

    range.getBoundingClientRect = jest.fn();

    range.getClientRects = () => {
        return {
            item: () => null,
            length: 0,
            [Symbol.iterator]: jest.fn()
        };
    };

    return range;
}
describe('ReactTesting Component Tests',  () => {
    test('loadComponentTest', async () => {
        render(<ReactTesting />);
        const udiv = screen.getByTestId(/React Testing/);
        UserEvent.click(udiv);
        await waitFor(() => screen.getByTestId(/text match/));
        await waitFor(() => screen.getByTestId(/UserEvent/));
    });
});