import React from 'react'

import './DSLR.css';

import Navigation from '../Navigation/Navigation'

import img1 from './DSLR/IMG_2115.jpg';
import img2 from './DSLR/IMG_5149.jpg';
import img3 from './DSLR/IMG_2102.jpg';
import img4 from './DSLR/IMG_1115.jpg';
import img5 from './DSLR/IMG_3589.jpg';
import img6 from './DSLR/IMG_3659.jpg';
import img7 from './DSLR/IMG_4917.jpg';
import img8 from './DSLR/IMG_4375.jpg';
import img9 from './DSLR/IMG_2152.jpg';
import img10 from './DSLR/IMG_2079.jpg';
import img11 from './DSLR/IMG_7018.jpg';


class DSLR extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imageGallery:[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11],
            imageAlt:[
                'Andreas Villas Brown Lingerie',
                'Dave Rudd model for Laird Hatters London',
                'Andreas Villas Brown Lingerie',
                'Alice Words poet model',
                'Blow Out The Cob Webs Oli Walker BOTCW motorcycle',
                'The Howlers Drummer London band',
                'Dave Rudd model',
                '404 guild South London Rap Group performing at the shacklewell arms',
                'Andreas Villas Salmon Orange Lingerie',
                'Andreas Villas Brown Lingerie'
            ]
        }
        this.galleryCarousel=this.galleryCarousel.bind(this)
    }

    componentDidMount(){
        this.galleryCarousel()
    }

    galleryCarousel(){
        setInterval(
            () => {
                let arrCopy = [...this.state.imageGallery];
                let altArrCopy = [...this.state.imageAlt];
                let index0 = arrCopy.shift();
                let index00 = altArrCopy.shift();
                arrCopy.push(index0);
                altArrCopy.push(index00)
                this.setState({imageGallery:[...arrCopy],imageAlt:[...altArrCopy]})
            },
        4000)
    }


    render(){
        return (
            <div>
                <Navigation/>
                <img src={this.state.imageGallery[0]} className="DSLRImages" alt={this.state.imageAlt[0]}/>
            </div>
        )
    }
}

export default DSLR