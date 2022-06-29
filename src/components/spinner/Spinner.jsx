import React from "react"
import "./spinner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="ring">
                <p className="Loading paragraph">Working_On_It</p>
                <strong className="text-white heading-sm"><FontAwesomeIcon icon={faUserNinja}/></strong>
                <span></span>
            </div>
        </div>
    )
}

export default Spinner