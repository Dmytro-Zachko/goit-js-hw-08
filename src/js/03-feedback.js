import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('textarea');
const inputRef = document.querySelector('input')


formRef.addEventListener('submit', OnFormSubmit)
formRef.addEventListener('input', throttle(AddLocalStorageValue, 500))
 
const LOCAL_KEY = "feedback-form-state";
const LocalValue = localStorage.getItem(LOCAL_KEY);

function AddLocalStorageValue(event) {
   const formData = {
    email: inputRef.value,
    message: textareaRef.value,
  };
    const LocalStorageValue = localStorage.setItem("feedback-form-state", JSON.stringify(formData));  
}

function OnFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY)
}

function PopulateInputs(event) {
    const LocalValue = JSON.parse(localStorage.getItem(LOCAL_KEY));
    console.log(LocalValue)
    if (LocalValue) {
        textareaRef.value = LocalValue.message;
        inputRef.value = LocalValue.email   
    }
}
PopulateInputs();