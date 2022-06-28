import React from "react"
import "./spinner.css"

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="ring">
                <p className="Loading">Loading...</p>
                <span></span>
            </div>
        </div>
    )
}

export default Spinner