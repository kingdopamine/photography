import React from 'react';

import './Navigation.css';

class Navigation extends React.Component {
   


    render(){
    
        return(
            <div id="nav">
                <ul>
                    <li><a href="/">Digital</a></li>
                    <li><a href="/nishika-n8000">Nishka N8000 / Analogue</a></li>
                    <li><a href="/lenticular">Lenticular</a></li>
                    <li><a href="/contact">Contact / About Me</a></li>
                </ul>
            </div>
            

        )
    }
};

export default Navigation;

