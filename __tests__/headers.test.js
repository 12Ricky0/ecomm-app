import '@testing-library/jest-dom';
import { NavHeader } from '../components/header';
import { render, fireEvent, screen } from '@testing-library/react';

jest.mock('../libs/action', () => ({
    getCookies: jest.fn().mockResolvedValue({/* mock data here */ }),
}));


describe('NavHeader', () => {
    const cartItems = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
    const setDisplayCart = jest.fn().mockResolvedValue();;
    it('renders a heading', () => {
        render(<NavHeader />)

        const heading = screen.getByTestId("earphones");


        expect(heading).toBeInTheDocument()
        expect(window.location.pathname).toBe("/");

    })




    // it('opens cart modal on cart icon click', () => {
    //     const { getByAltText } = render(<NavHeader cart={cartItems} />);
    //     fireEvent.click(getByAltText('cart'));
    //     expect(setDisplayCart).toHaveBeenCalledWith(true);
    // });

    // Add more tests for other functionalities if needed
});
