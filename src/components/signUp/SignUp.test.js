import React from 'react'
import SignUp from './SignUp';
import {render, fireEvent, screen, getByLabelText} from '@testing-library/react'
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

        it("check if email is valid", async() => {
           render(<SignUp/>)
            const EmailInput = screen.getByLabelText("Email");
            await act(async () => {
                fireEvent.change(EmailInput, {target: {value: "test.com"}})
            })
           expect(await screen.findByText("Enter a valid email")).toBeInTheDocument();
        });

        it("check if password is minimum of 8 chars", async() => {
            render(<SignUp/>)
            const password = screen.getByLabelText("Password");
            await act(async () => {
                fireEvent.change(password, {target: {value: "test"}})
            })
            expect(await screen.findByText("Password should be of minimum 8 characters")).toBeInTheDocument();
        });

        it("check if password is not same as last Name", async() => {
            render(<SignUp/>)

            const password = screen.getByLabelText("Password");
            const lastName = screen.getByLabelText("Last Name");

            await act(async () => {
                fireEvent.change(lastName, {target: {value: "Testing"}})
                fireEvent.change(password, {target: {value: "Testing@123"}})
            })
            expect(await screen.findByText("Password should not contain your first or last name")).toBeInTheDocument();
        });

        it("check if password is not same as first name", async() => {
            render(<SignUp/>)

            const password = screen.getByLabelText("Password");
            const firstName = screen.getByLabelText("Last Name");

            await act(async () => {
                fireEvent.change(firstName, {target: {value: "Testing"}})
                fireEvent.change(password, {target: {value: "Testing@123"}})
            })
            expect(await screen.findByText("Password should not contain your first or last name")).toBeInTheDocument();
        });

    });





});