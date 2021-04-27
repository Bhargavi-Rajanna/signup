### Project execution

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npm start` :   Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test` : Launches the test runner in the interactive watch mode.

### `Workflow/Tasks Completed `
1. The app gets rendered with input form containing input values and labels for (First Name , Last Name, Email , Password) and a submit button.

<img width="1766" alt="Screen Shot 2021-04-27 at 11 05 20 PM" src="https://user-images.githubusercontent.com/57440745/116298107-1d701e80-a7ad-11eb-873b-a9d6082de156.png">

2. If user clicks on submit without filling any input feilds. The forms displays the error messages.
<img width="1762" alt="Screen Shot 2021-04-27 at 11 05 35 PM" src="https://user-images.githubusercontent.com/57440745/116298216-37a9fc80-a7ad-11eb-800b-98ebcfeb0f3b.png">
3. Validation to check for valid email is done.
4. Validations for password are done.
   checks :
    1> Password is required
    2> Password should not contain your first or last name
    3> Password must include lower and upper case character
    4> Password should be of minimum 8 characters
5. Form is submitted only when form is valid.
6. Once the form is submitted. A post request call is made to https://demo-api.now.sh/users with the form data as request body. A message "Form Submitted Successfully" is displayed on the screen.
7. Once the post request gets resolved.A get request to https://demo-api.now.sh/users is made after 4 secs.
8. Once the get request is resolved, the form gets reset.
9. Functional test cases are available in signUp.test.js file.
10. The app is designed for responsive and mobile screens.
