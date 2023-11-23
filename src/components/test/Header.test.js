import React from "react";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CompanyBrand from "../CompanyBrand";
import Header from "../../pages/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header test", ()=> {

    

    test("Header component rendered", async () => {
        render(<BrowserRouter><Header></Header></BrowserRouter>);
        const headerComponent = screen.getByTestId('header');
        expect(headerComponent).toBeIntheDocument;
    });
    

})
