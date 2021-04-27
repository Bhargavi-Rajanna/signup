## Signup Form

### Project execution

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npm start` :   Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test` : Launches the test runner in the interactive watch mode.


### Workflow/Tasks Completed

1. The app gets rendered with input form containing input values and labels for (First Name, Last Name, Email, Password) and a submit button.

<img width="1766" alt="Screen Shot 2021-04-27 at 11 05 20 PM" src="https://user-images.githubusercontent.com/57440745/116298107-1d701e80-a7ad-11eb-873b-a9d6082de156.png">

2. If user clicks on submit without filling any input feilds. The forms displays the error messages.
<img width="1762" alt="Screen Shot 2021-04-27 at 11 05 35 PM" src="https://user-images.githubusercontent.com/57440745/116298216-37a9fc80-a7ad-11eb-800b-98ebcfeb0f3b.png">
3. Handled the email id validation.
4. Validations for password is done based on the following checks

    * Password is required
    * Password should not contain your first or last name.
    * Password must include lower and upper case character.
    * Password should be of minimum 8 characters
   
5. Form can be submitted only when it is valid.
6. Once the form is submitted. A post request call is made to `https://demo-api.now.sh/users` with the form data as request body. A message `Form Submitted Successfully` is displayed on the screen.
7. Once the post request gets resolved then a get request to `https://demo-api.now.sh/users` is triggered after 4 secs.
8. Once the get request is resolved, the form gets reset.
9. Functional test cases are available in `signUp.test.js` file.
10. The app is designed using styled-components. The screens are responsive and also mobile-friendly.


### Assumptions/Opinions:

1. Disabling the submit button if the user has not filled the form.
Yes, this is a good design in some cases say where a network call is happening on every submit/click event. Since useForm does not submit the form if the form is not valid, disabling is not required.
2. I could have approached doing the complete solution without using react hook form, by keeping track of the visited/changed/touched fields, and handling form submission. Since useForm is one of the popular choices, I finalized this approach. Also, as per the requirement I was asked to use the latest versions and hooks.
3. The validation could have got handled with `yup` and `yup resolvers` and if required `Formik` for advance validations. But since this is a simple form, I decided to do my own validations.

### Future improvements
1. Advance-level email validations can be done for advance validations. We can make use of validation libraries like yup, emailValidators
2. Once the form is submitted, the users see "form submitted successfully". Maybe we can navigate the user to a different page.
3. Error handling for API requests need to be done. Currently, I am logging the errors in console. Maybe we could notify the user about form submission failed or not navigate to a different page.
4. Could have added more test cases on failure scenarios.

Note: You can play the below video to have a look at the workflow :)

https://user-images.githubusercontent.com/57440745/116305861-6926c600-a7b5-11eb-82dc-08f60f7f69e3.mov

