import { createUserAccountWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import './sign-up.styles.scss'
import { createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react'

const defaultFormField = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const SignUp = () => {

    const [formField, setFormField] = useState(defaultFormField);
    const { firstName, lastName, email, password } = formField;



    const handleSubmit = async (event) => {
        event.preventDefault();

        const { user } = await createUserAccountWithEmailAndPassword(email, password)
        
        return createUserDocFromAuth(user)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });

    }
    return (
        <div className="sign-up-container">
            <h2 className='sign-up-title'>CREATE ACCOUNT</h2>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput label='FIRST NAME' classLabel='sign-up-label' className='sign-up-input' onChange={handleChange} type="text" name='firstName' value={firstName} />
                <FormInput label='LAST NAME' classLabel='sign-up-label' className='sign-up-input' onChange={handleChange} type="text" name='lastName' value={lastName} />
                <FormInput label='EMAIL' classLabel='sign-up-label' className='sign-up-input' onChange={handleChange} type="email" name='email' value={email} />
                <FormInput label='PASSWORD' classLabel='sign-up-label' className='sign-up-input' onChange={handleChange} type="password" name='password' value={password} />
                <button className='sign-up-btn' type='submit'>CREATE</button>
            </form>
        </div>
    )
}
export default SignUp;