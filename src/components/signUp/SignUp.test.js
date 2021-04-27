import React from 'react'
import SignUp from './SignUp';
import {render, fireEvent,screen} from '@testing-library/react'
import { act } from 'react-dom/test-utils';


describe("SignUp", () => {

    describe("Signup Form", () => {
        it("should render the input form fields", () => {
            render(<SignUp/>);

            expect(screen.getByLabelText("First Name")).toBeInTheDocument();
            expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
            expect(screen.getByLabelText("Email")).toBeInTheDocument();
            expect(screen.getByLabelText("Password")).toBeInTheDocument();
            expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
        });
    });

    describe("Signup Form error", () => {
        it("should render the errors when form is submitted", async() => {
            const {getByRole} = render(<SignUp/>)

            await act(async () => {
                fireEvent.click(getByRole('button', { name: /submit/i }))

            })


            expect(await screen.findByText("First Name is required")).toBeInTheDocument();
            expect(await screen.findByText("Last Name is required")).toBeInTheDocument();
            expect(await screen.findByText("Email is required")).toBeInTheDocument();
            expect(await screen.findByText("Password is required")).toBeInTheDocument();
            expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();


        });

    });

});