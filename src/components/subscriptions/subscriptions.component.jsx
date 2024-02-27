import { Link } from "react-router-dom";
import './subscriptions.styles.scss'
const Subscriptions = () => {
    return (
        <div className="subscriptions-container">
            <form className="subscriptions-form">
                <h2 className="subscriptions-title">Request account invite</h2>
                <p className="subscriptions-instruction">Provide your email below in order to complete your account setup. Once complete, you can manage your subscriptions directly within your account.</p>

                
                <input className="subscriptions-input" type="text" placeholder="EMAIL." />

                <button className="subscriptions-btn">GET SUBSCRIPTION LOGIN</button>

                <Link className="subscriptions-return-login" to={'/log-in'}>RETURN TO LOGIN</Link>
            </form>
        </div>
    )
}
export default Subscriptions