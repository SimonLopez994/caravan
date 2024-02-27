import { Link } from "react-router-dom";
import './sign-in.styles.scss'
import { useState } from "react";
import { signIntoAccountWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    email: '',
    password: '',
}
const SignIn = () => {
    const [formField, setFormField] = useState(defaultFormField);

    const { email, password } = formField



    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await signIntoAccountWithEmailAndPassword(email, password)
        console.log(response)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormField({ ...formField, [name]: value })
    }

    return (
        <div className="sign-in-container">
            <h2 className="sign-in-title">LOGIN</h2>
            <form className="sign-in-form" onSubmit={handleSubmit}>
                <label className="sign-in-label">EMAIL</label>
                <input className="sign-in-input" type="email" onChange={handleChange} name="email" value={email} />

                <label className="sign-in-label">PASSWORD</label>
                <input className="sign-in-input" type="password" onChange={handleChange} name="password" value={password} />
                <p className="sign-in-passwords">FORGOT YOUR PASSWORD?</p>

                <button className="sign-in-btn" type="submit">SIGN IN</button>
                <Link className="create-account" to={'/sign-up'}>CREATE ACCOUNT</Link>
                <Link className="sign-in-subscriptions" to={'/subscriptions'}>MANAGE SUBSCRIPTIONS</Link>
            </form>
        </div>
    )
}
export default SignIn;