import React from 'react'

function FloatingButtonComponent(props){
    return(
        <button className="btn-floating btn-rounded btn-success" onClick={() => props.handleShow()}
        >+</button>
    )
}

export default FloatingButtonComponent