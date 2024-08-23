import '@testing-library/jest-dom';
import { NavHeader } from '../components/header';
import { render, fireEvent, screen } from '@testing-library/react';
import CartProvider, { CartContext } from '../cart-provide';
import user from "@testing-library/user-event";
import { useContext } from 'react';



jest.mock('../libs/action', () => ({
    getCookies: jest.fn().mockResolvedValue({/* mock data here */ }),
}));

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(),
}));

describe('NavHeader', () => {
    const cartItems = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
    // const displayCart = jest.fn().mockResolvedValue(true);
    it('renders a heading', () => {
        render(<NavHeader />)

        const heading = screen.getByTestId("earphones");


        expect(heading).toBeInTheDocument()
        expect(window.location.pathname).toBe("/");

    })




    it('opens cart modal on cart icon click', async () => {
        render(<NavHeader cart={cartItems} />);
        const cart = screen.getByAltText('cart');
        await user.click(cart);
        expect(displayCart).toHaveBeenCalled();
    });

    // Add more tests for other functionalities if needed
});
