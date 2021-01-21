import React from 'react'

import './Retouch.css';

import Navigation from '../Navigation/Navigation'

import gif1 from './Elen-Bowman.gif';
import gif2 from './Alice.gif';
import gif3 from './Dave-Rudd-Alley.gif';

class Retouch extends React.Component{
    render(){ 
        return (
            <div>
                <Navigation/>
                <img src={gif1} className="gifs" alt="Andreas Villas Brown Lingerie"/>
                <img src={gif2} className="gifs" alt='Model Alice for experimental photoshoot'/>
                <img src={gif3} className="gifs" alt='Dave Rudd model for Laird Hatters London'/>
            </div>
        )
    }
}

export default Retouch