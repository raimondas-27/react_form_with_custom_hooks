import React, {useState, useEffect} from "react";

const useInput = (validateValue) => {


   const [enteredValue, setEnteredValue] = useState("");
   const [isTouched, setIsTouched] = useState(false);

   const valueIsValid = validateValue(enteredValue)
   const hasError = !valueIsValid && isTouched;

   const valueChangeHandler = (event) => {
      setEnteredValue(event.target.value)
   }

   const valueBlurHandler = (event) => {
      setIsTouched(true)
   }

   const reset = () => {
      setEnteredValue("");
      setIsTouched(false);
   }


   return {
      isValid : valueIsValid,
      value: enteredValue,
      hasError,
      valueChangeHandler,
      valueBlurHandler,
      reset,
   }

}


export default useInput;