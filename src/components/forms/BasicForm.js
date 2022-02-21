
import useInputDemo from '../../hooks/use-inputDemo';
import classes from './SimpleInput.module.css';


const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

    const { value: enteredFirstName, isValid: firstNameIsValid, hasError: firstNameInputHasError, valueChangeHandler: firstNameChangeHandler, inputBlurHandler: firstNameBlurHandler, reset: resetFirstNameInput } = useInputDemo(isNotEmpty);
    const { value: enteredLastName, isValid: lastNameIsValid, hasError: lastNameInputHasError, valueChangeHandler: lastNameChangeHandler, inputBlurHandler: lastNameBlurHandler, reset: resetLastNameInput } = useInputDemo(isNotEmpty);
    const { value: enteredEmail, isValid: emailIsValid, hasError: emailInputHasError, valueChangeHandler: emailChangeHandler, inputBlurHandler: emailBlurHandler, reset: resetEmailInput } = useInputDemo(isEmail);

    const firstNameInputClasses = `${classes['form-control']} ${firstNameInputHasError ? classes['invalid'] : ''}`;
    const lastNameInputClasses = `${classes['form-control']} ${lastNameInputHasError ? classes['invalid'] : ''}`;
    const emailInputClasses = `${classes['form-control']} ${emailInputHasError ? classes['invalid'] : ''}`;

    const formSubmissionHandler = event => {
        event.preventDefault();
        if(!firstNameIsValid && !lastNameIsValid && !emailIsValid){
            return;
        }
        console.log(enteredFirstName, enteredLastName, enteredEmail)
        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    }

    return (
        <form onSubmit={formSubmissionHandler}> 
            <div className={classes['control-group']}>
                <div className={firstNameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input 
                        type='text' 
                        id='firstName'
                        value={enteredFirstName}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler} />
                    {firstNameInputHasError && <p className={classes['error-text']}>First Name must not be empty.</p>}    
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input 
                        type='text' 
                        id='lastName'
                        value={enteredLastName}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler} />
                    {lastNameInputHasError && <p className={classes['error-text']}>Last Name must not be empty.</p>}    
                </div>
                <div className={emailInputClasses}>
                    <label htmlFor="name">Email Address</label>
                    <input 
                        type='email' 
                        id='email'
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler} />
                    {emailInputHasError && <p className={classes['error-text']}>Email must not be empty.</p>}    
                </div>
                <div className={classes['form-actions']}>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default BasicForm;