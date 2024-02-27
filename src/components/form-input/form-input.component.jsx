import { Fragment } from 'react'
import '../sign-up/sign-up.styles.scss'
const FormInput = ({ label, classLabel, ...otherProps }) => {
    return (
        <Fragment>
            <label className={classLabel}>{label}</label>
            <input {...otherProps} />
        </Fragment>
    )
}
export default FormInput