import useInputDemo from '../../hooks/use-inputDemo';
import classes from './SimpleInput.module.css';

const SimpleInput = (props) => {

    console.log("Calling SimpleInput Component!!!!");

    const { value: enteredName, hasError: nameInputHasError, valueChangeHandler: nameChangeHandler, inputBlurHandler: nameBlurHandler, reset: resetNameInput } = useInputDemo(value => value.trim() !== '');
    const { value: enteredEmail, hasError: emailInputHasError, valueChangeHandler: emailChangeHandler, inputBlurHandler: emailBlurHandler, reset: resetEmailInput } = useInputDemo(value => value.includes('@'));

    const nameInputClasses = `${classes['form-control']} ${nameInputHasError ? classes['invalid'] : ''}`;
    const emailInputClasses = `${classes['form-control']} ${emailInputHasError ? classes['invalid'] : ''}`;

    const formSubmissionHandler = event => {
        event.preventDefault();

        if (!nameInputHasError && !emailInputHasError) {
            return;
        }

        resetNameInput();
        resetEmailInput();
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName} />
                {nameInputHasError && <p className={classes['error-text']}>Name must not be empty.</p>}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail} />
                {emailInputHasError && <p className={classes['error-text']}>Email must not be empty.</p>}
            </div>

            <div className={classes['form-actions']}>
                <button>Submit</button>
            </div>
        </form>
    );
}

export default SimpleInput;