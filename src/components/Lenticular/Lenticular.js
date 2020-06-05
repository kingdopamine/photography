import React from 'react'

import './Lenticular.css';

import Navigation from '../Navigation/Navigation'

import img1 from './Lenticulars/Alice-BW-Feather-Portrait-animation.gif';
import img2 from './Lenticulars/Dead-Robin-animation.gif';
import img3 from './Lenticulars/Cat-Skull-animation.gif';
import img4 from './Lenticulars/ALICE-X-SID-animation.gif';
import img5 from './Lenticulars/Pigeon-60cm-animation.gif';
import img6 from './Lenticulars/Dead-Owl-animation.gif';



class Lenticular extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imageGallery:[img1,img2,img3,img4,img5,img6],
            imageAlt:[
                'Alice Black and White Portrait Lenticular',
                'Taxidermy Robin Bird Lenticular',
                'Cat Skull Lenticular',
                'Alice and Sid projector Lenticular',
                'Taxidermy Pigeon Rock Dove Bird Lenticular',
                'Taxidermy Owl Bird Lenticular',
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
                <img src={this.state.imageGallery[0]} className="lenticularImages" alt={this.state.imageAlt[0]}/>
            </div>
        )
    }
}

export default Lenticular