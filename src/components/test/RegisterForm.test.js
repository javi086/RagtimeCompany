import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import RegistrationForm from "../../pages/RegistrationForm";


describe("Register Component test", () => {
    beforeEach(() => {
        // Precondicion
        render(<RegistrationForm/>);
    })
    test('Render 3 components into the RegisterForm component', () => {
        //PreCondicion

        //Que quiero que pase
        const basicUserInfo = screen.getByTestId('basicUserInformation');
        const additionalUserInfo = screen.getByTestId('additionalUserInformation');
        const buttonElement = screen.getByTestId('submitButton');

        //El resultado que espero
        expect(basicUserInfo).toBeInTheDocument();
        expect(additionalUserInfo).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });


    test('Labels in the form', () =>{

       const firstNameLabel = screen.getByText('Nombre(s):');
       const paternaNameLabel = screen.getAllByText('Apellido Paterno:');
       const maternalNameLabel = screen.getAllByText('Apellido Materno:');
       const emailLabel = screen.getAllByText('Correo:');


        expect(firstNameLabel).toBeInTheDocument;
        expect(paternaNameLabel).toBeInTheDocument;
        expect(maternalNameLabel).toBeInTheDocument;
        expect(emailLabel).toBeInTheDocument;
    });



})


