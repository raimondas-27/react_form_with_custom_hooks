import useInput from "../hook/useInput";
import React, {useEffect, useRef, useState} from "react";


const BasicForm = (props) => {

   const nameValidation = (x) => x.trim().length >= 3;
   const passwordValidation = (x) => x.length >= 3 && x.includes(".");
   const emailValidation = (x) => x.includes("@") && x.includes(".");


   const {
      value: enteredName,
      hasError: nameInputHasError,
      isValid: enteredNameIsValid,
      valueChangeHandler: nameChangeHandler,
      valueBlurHandler: nameBlurHandler,
      reset: resetNameInput,
   } = useInput(nameValidation)

   const {
      value: enteredPassword,
      hasError: passwordInputHasError,
      isValid: enteredPasswordIsValid,
      valueChangeHandler: passwordChangeHandler,
      valueBlurHandler: passwordBlurHandler,
      reset: resetPasswordInput,
   } = useInput(passwordValidation)

   const {
      value: enteredEmail,
      hasError: emailInputHasError,
      isValid: enteredEmailIsValid,
      valueChangeHandler: emailChangeHandler,
      valueBlurHandler: emailBlurHandler,
      reset: resetEmailInput,
   } = useInput(emailValidation)


   // const nameInputRef = useRef();
   // const passwordInputRef = useRef();
   // const emailInputRef = useRef();

   const [formIsValid, setFormIsValid] = useState(false);

   useEffect(() => {
      enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid ? setFormIsValid(true) : setFormIsValid(false);
   }, [enteredNameIsValid, enteredPasswordIsValid, enteredEmailIsValid])

   const formSubmissionHandler = (event) => {
      event.preventDefault()


      if (!formIsValid) {
         return;
      }
      resetNameInput()
      resetPasswordInput();
      resetEmailInput();
      console.log(enteredName, enteredEmail, enteredPassword)
   }

   const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
   const passwordInputClasses = passwordInputHasError ? "form-control invalid" : "form-control";
   const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";



   return (
       <form onSubmit={formSubmissionHandler}>
          <div className='control-group'>
             <div className={nameInputClasses}>
                <label htmlFor='name'>First Name</label>
                <input type='text'
                       id='name'
                       onChange={nameChangeHandler}
                       value={enteredName}
                       onBlur={nameBlurHandler}
                />
                {nameInputHasError && <p className={"error-text"}>
                Your form is too short, must be min 3 chars.
             </p>}
             </div>
             <div className={passwordInputClasses}>
                <label htmlFor='password'>Password</label>
                <input type='password'
                       id='password'
                       onChange={passwordChangeHandler}
                       value={enteredPassword}
                       onBlur={passwordBlurHandler}
                />
                {passwordInputHasError && <p className={"error-text"}>
                Please provide valid password
             </p>}
             </div>
          </div>
          <div className={emailInputClasses}>
             <label htmlFor='email'>E-Mail Address</label>
             <input type='text'
                    id='email'
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                    onBlur={emailBlurHandler}
             />
             {emailInputHasError && <p className={"error-text"}>
                Please provide valid email
             </p>}
          </div>
          <div className='form-actions'>
             <button disabled={!formIsValid}>Submit</button>
          </div>
       </form>
   );
};

export default BasicForm;
