import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../../App';

describe("App test", ()=> {
    beforeEach(() => {
        // Precondicion
        render(<App/>);
    })


test("Header component rendered", async () => {
    const headerComponent = screen.getByTestId('header');
    expect(headerComponent).toBeIntheDocument;
});

test("Promotions component rendered", async () =>{
    const promotionsComponent = screen.getByTestId('promotions');
    expect(promotionsComponent).toBeIntheDocument;
}) 

test("Footer component rendered", async () => {
    const footerCompoent = screen.getByTestId('footer');
    expect(footerCompoent).toBeIntheDocument;
    
})


})