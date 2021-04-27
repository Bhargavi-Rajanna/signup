
import { useForm } from "react-hook-form";
import {useEffect} from "react";
import styled from "styled-components";

//utils functions
import {getRegex} from "../../utils/getRegex";
import {postData} from "../../utils/postData";


const SignupForm = styled.form`
  max-width: 500px;
  margin: 50px auto;
  padding: 25px 75px;
  border: 1px solid white;
  background: #E5E5E5;
  @media screen and (max-width: 600px) {
      max-width: 250px;
      padding: 20px;
      margin: 35px auto;
  }
`;

const FormHeader= styled.h1`
    font-weight: 300;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #0b64a0;
`;

const FormLabel= styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  color: black;
  font-size: 14px;
  font-weight: 250;
`;
const FormInput = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  
`;

const ErrorMessage = styled.p`
  color: #bf1650;
  text-align: left;
`;

const SuccessMessage = styled.p`
  color:#006400FF;
  text-align:center;
  font-size:18px;
`;

const SubmitButton = styled.input`
  background: #0b64a0;
  color: white;
  width:100%;
  text-transform: uppercase;
  border: none;
  margin: 30px 0 25px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  &:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`;

const Signup = () =>{
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState,
        watch,
        reset
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
    });
    const {errors}= formState;

    const passwordValidation = ( value) => {
        let passwordRegex = getRegex('password')
        const {firstName, lastName} = getValues();
        if(value){
            if(firstName || lastName) {
                let first_name = firstName?.toString().toLowerCase(),
                    last_name = lastName?.toString().toLowerCase(),
                    password = value.toString().toLowerCase();
                if (password.includes(first_name) || password.includes(last_name)) {
                   return "Password should not contain your first or last name";
                 }
            }
            return (
                passwordRegex.every((pattern) =>
                    pattern.test(value)
                ) || "Password must include lower and upper case character"
            );
        }

    }

    const fields = [
        { name:'firstName',
            rules:{
                required: {
                    value:true,
                    message: 'First Name is required'}
            }
        },
        { name:'lastName',
            rules:{
                required: {
                    value:true,
                    message: 'Last Name is required'}
            }
        },
        { name:'email',
            rules:{
                required: {
                    value:true,
                    message: 'Email is required',
                },
                pattern: {
                    value:getRegex('email'),
                    message:'Enter a valid email'
                }
            }
        },
        { name:'password',
            rules:{
                required: {
                    value:true,
                    message: 'Password is required'
                },
                minLength:{
                    value:8,
                    message : "Password should be of minimum 8 characters"
                },
                validate: (value) => {
                    return passwordValidation(value)
                }
            },

        },

    ]

    const onSubmit = (data) => {
        postData(data).then(r => reset());
    };

    const onChangeChandler = (e) =>{
        const {name,value} = e.currentTarget;
        setValue(name, value,{shouldValidate:true});
    }

    useEffect(() => {
        if(register){
            fields.forEach(field => {
                register(field.name, field.rules)
                watch(field.name)
            })
        }
    }, [register, fields, watch]);

    return(
        <SignupForm onSubmit={handleSubmit(onSubmit)} >
            <FormHeader>Sign up</FormHeader>
            {formState.isSubmitSuccessful && <SuccessMessage>Form Submitted Successfully</SuccessMessage>}
            <div>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <FormInput
                    aria-invalid={errors?.firstName ? "true" : "false"}
                    type="text"
                    id='firstName'
                    value={getValues().firstName}
                    name="firstName"
                    onChange={onChangeChandler}
                />
                {errors?.firstName && <ErrorMessage>{errors?.firstName.message}</ErrorMessage>}
            </div>

            <div style={{ marginBottom: 10 }}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <FormInput
                    type="text"
                    name="lastName"
                    id="lastName"
                    data-testid="test-lastName"
                    value={getValues().lastName}
                    onChange={onChangeChandler}
                />
                {errors?.lastName && <ErrorMessage>{errors?.lastName.message}</ErrorMessage>}
            </div>

            <div>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput type="text"
                           name="email"
                           id="email"
                           data-test-id="test-email"
                           value={getValues().email}
                           onChange={onChangeChandler}
                />
                {errors?.email && <ErrorMessage>{errors?.email.message}</ErrorMessage>}
            </div>

            <div>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    name="password"
                    id="password"
                    data-test-id="test-password"
                    value={getValues().password}
                    onChange={onChangeChandler}
                />
                {errors?.password && <ErrorMessage>{errors?.password.message}</ErrorMessage>}
            </div>

            <SubmitButton type="submit" name="submit"/>
        </SignupForm>

    )
}


export default Signup;
