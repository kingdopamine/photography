import React from 'react'

import './Nishika.css'

import Navigation from '../Navigation/Navigation'


class Nishika extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movies:[
                "https://s3.eu-west-2.amazonaws.com/jojo.photos.videos/Debora+%2B+Suan.mp4",
                "https://s3.eu-west-2.amazonaws.com/jojo.photos.videos/Drake+Night.mp4"/*,
                "https://s3.eu-west-2.amazonaws.com/jojo.photos.videos/Karaoke.mp4",
                "https://s3.eu-west-2.amazonaws.com/jojo.photos.videos/Fabulous.mp4",
                "https://s3.eu-west-2.amazonaws.com/jojo.photos.videos/alice.mp4",
                "https://s3.eu-west-2.amazonaws.com/jojo.photos.videos/kinky+dog.mp4",
                "https://s3.eu-west-2.amazonaws.com/jojo.photos.videos/botcwfinal.mp4",*/
            ],
            movieAlt:[
                'nishika n8000 debora silva and xuan in shoreditch',
                'nishika n8000 drake night at the white hart in new cross'/*,
                'nishika n8000 karaoke at the five bells in new cross',
                'nishika n8000 kinky bdsm dog at london gay pride 2019',
                'nishika n8000 london gay pride 2019',
                'nishika n8000 alice',
                'nishika n8000 oli walker blow out the cobwebs'*/
            ]
        }
        this.n8000GalleryNext=this.n8000GalleryNext.bind(this)
        this.n8000GalleryPrev=this.n8000GalleryPrev.bind(this)
    }

    n8000GalleryNext(){
        let arrCopy = [...this.state.movies];
        let altArrCopy = [...this.state.movieAlt];
        let index0 = arrCopy.shift();
        let index00 = altArrCopy.shift();
        arrCopy.push(index0);
        altArrCopy.push(index00);
        this.setState({movies:[...arrCopy],movieAlt:[...altArrCopy]})
    }

    n8000GalleryPrev(){
        let arrCopy = [...this.state.movies];
        let altArrCopy = [...this.state.movieAlt];
        let index0 = arrCopy.pop();
        let index00 = altArrCopy.pop();
        arrCopy.unshift(index0);
        altArrCopy.unshift(index00);
        this.setState({movies:[...arrCopy],movieAlt:[...altArrCopy]})
    }

    

    render(){
        return(
            <div>
                <Navigation/>
                <p id="nextVideo" onClick={this.n8000GalleryNext}>Next</p>
                <p id="prevVideo" onClick={this.n8000GalleryPrev}>Prev</p>
                <video controls loop autoPlay className="video" key={this.state.movies[0]}>
                    <source src={this.state.movies[0]} type="video/MP4" alt={this.state.movieAlt[0]}/>
                </video>
                
            </div>
        )
    }
}

export default Nishika;