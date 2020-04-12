import React from 'react';

import './AutoGallery.css';

import image1 from '../../Portfolio images/DSLR/IMG_2115.jpg'

class AutoGallery extends React.Component {
   constructor(props){
       super(props)
       this.state={
           'dslr':{
               image1,
               image2:'../Portfolio images/DSLR',
               image3:'../Portfolio images/DSLR'
           },
           'nishika':{
               image1:'../Portfolio images/Nishika',
               image2:'../Portfolio images/Nishika',
               image3:'../Portfolio images/Nishika'
           },
           'lenticular':{
               image1:'../Portfolio images/Lenticular',
               image2:'../Portfolio images/Lenticular',
               image3:'../Portfolio images/Lenticular'
           }
       }
       
   }


    render(){

        return(
            <img src={this.state.dslr.image1} className="images"></img>

        )
    }
};

export default AutoGallery;

