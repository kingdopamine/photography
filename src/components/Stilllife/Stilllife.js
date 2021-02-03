import React from 'react'

import './Stilllife.css';

import Navigation from '../Navigation/Navigation'

import img1 from './Hugo-Boss-Blue-Beetle.jpg';
import img2 from './Hanya-Ring.jpg';
import gif1 from './Hanya-Ring.gif';

class Stilllife extends React.Component{
    render(){ 
        return (
            <div>
                <Navigation/>
                <img src={img1} className="stillimg" alt="Hugo Boss Blue Beetle"/>
                <img src={img2} className="stillimg" alt='The Great Frog Hanya Ring'/>
                <img src={gif1} className="stillimg" alt='The Great Frog Hanya Ring retouched'/>
            </div>
        )
    }
}

export default Stilllife