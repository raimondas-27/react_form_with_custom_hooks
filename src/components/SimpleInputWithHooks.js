import React, {useState, useRef, useEffect} from "react";
import useInput from "../hook/useInput";

const SimpleInput = (props) => {

   const nameValidation = (x) => x.trim().length >= 3;
   const emailValidation = (x) => x.includes("@") && x.includes(".");

   const {
      value: enteredName,
      hasError: nameInputHasError,
      isValid: enteredNameIsValid,
      valueChangeHandler: nameChangeHandler,
      valueBlurHandler: nameBlurHandler,
       reset : resetNameInput,
   } = useInput(nameValidation)

   const {
      value : enteredEmail,
       hasError : emailInputHasError,
       isValid : enteredEmailIsValid,
       valueChangeHandler : emailChangeHandler,
       valueBlurHandler : emailBlurHandler,
       reset : resetEmailInput,
   } = useInput(emailValidation)

   const nameInputRef = useRef();


   const [formIsValid, setFormIsValid] = useState(false);


   useEffect(() => {
      enteredNameIsValid && enteredEmailIsValid ? setFormIsValid(true) : setFormIsValid(false);
   }, [enteredNameIsValid, enteredEmailIsValid])



   const formSubmissionHandler = (event) => {
      event.preventDefault()


      if (!formIsValid) {
         return;
      }
      resetNameInput()
      resetEmailInput()
      console.log(enteredName, enteredEmail)
   }


   const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
   const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

   return (
       <form onSubmit={formSubmissionHandler}>
          <div className={nameInputClasses}>
             <label htmlFor='name'>Your Name</label>
             <input onChange={nameChangeHandler}
                    value={enteredName}
                    type='text'
                    id='name'
                    ref={nameInputRef}
                    onBlur={nameBlurHandler}
             />

             {nameInputHasError && <p className={"error-text"}>
                Your form is empty, please enter name
             </p>}
          </div>
          <div className={emailInputClasses}>
             <label htmlFor='email'>Your Email</label>
             <input onChange={emailChangeHandler}
                    value={enteredEmail}
                    type='text'
                    id='email'
                    ref={nameInputRef}
                    onBlur={emailBlurHandler}
             />

             {emailInputHasError && <p className={"error-text"}>
                Please provide valid email
             </p>}
          </div>
          <div className="form-actions">
             <button disabled={!formIsValid}>Submit</button>
          </div>
       </form>
   );
};

export default SimpleInput;