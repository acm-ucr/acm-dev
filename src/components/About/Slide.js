import React from 'react'
import './Slide.css'



// make carousel

const Slide = (props) => {
    return(
        <div class="about-single-slide">
            <img src={props.image} alt="prop"/>
    
        </div>
    )
}

export default Slide