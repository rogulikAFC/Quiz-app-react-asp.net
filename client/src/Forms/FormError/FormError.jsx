import './FormError.css'

export function FormError({ children }) {
    return (
        <span className="form-error"> {children} </span>
    )
}