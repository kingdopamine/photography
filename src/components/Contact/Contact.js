import React from 'react'

import './Contact.css'

import Navigation from '../Navigation/Navigation'

import image from './james onashile.jpg'

class Contact extends React.Component{

    render (){
        return (
            <div id="contact">
                <Navigation/>
                <img src={image} id="profile" alt="James Onashile Photographer"></img>
                <h3>Hi, my name is James.</h3>
                <h4>Born, raised, and living in South London.</h4>
                <h4>I hope you enjoyed the visuals!</h4>
                <h4>Let's work together! <a href="mailto:jonashile@gmail.com">Email Me</a></h4>
            </div> 
        )
    }
}

export default Contact