import React from "react"
import "./spinner.css"

const Spinner = ({ text, hidden, show }) => {
    return (
        <div className="spinner-container">
            <div className="ring">
                <p className={hidden}>Loading...</p>
                <p className={show}>{text}</p>
                <span></span>
            </div>
        </div>
    )
}

export default Spinner