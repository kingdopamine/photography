import React from 'react';

import './AutoGallery.css';

import image1 from '../../Portfolio images/DSLR/IMG_2115.jpg';
import image2 from '../../Portfolio images/DSLR/IMG_1115.jpg';
import image3 from '../../Portfolio images/DSLR/IMG_2102.jpg';
import image4 from '../../Portfolio images/DSLR/IMG_2152.jpg';
import image5 from '../../Portfolio images/DSLR/IMG_3589.jpg';
import image6 from '../../Portfolio images/DSLR/IMG_3659.jpg';
import image7 from '../../Portfolio images/DSLR/IMG_4375.jpg';
import image8 from '../../Portfolio images/DSLR/IMG_4917.jpg';
import image9 from '../../Portfolio images/DSLR/IMG_5149.jpg';
import image10 from '../../Portfolio images/DSLR/IMG_7018.jpg';
import image11 from '../../Portfolio images/DSLR/IMG_2079.jpg';

import lenticular1 from '../../Portfolio images/Lenticular/Alice-BW-Feather-Portrait-animation.gif';
import lenticular2 from '../../Portfolio images/Lenticular/ALICE-X-SID-animation.gif';
import lenticular3 from '../../Portfolio images/Lenticular/Cat-Skull-animation.gif';
import lenticular4 from '../../Portfolio images/Lenticular/Dead-Owl-animation.gif';
import lenticular5 from '../../Portfolio images/Lenticular/Dead-Robin-animation.gif';
//import lenticular6 from '../../Portfolio images/Lenticular/Dog-Skull-animation.gif';
import lenticular7 from '../../Portfolio images/Lenticular/Pigeon-60cm-animation.gif';

import nishika2 from '../../Portfolio images/Nishika/alice.mp4';
import nishika3 from '../../Portfolio images/Nishika/botcwfinal.mp4';
import nishika4 from '../../Portfolio images/Nishika/Debora + Suan.mp4';
import nishika5 from '../../Portfolio images/Nishika/Drake Night.mp4';
import nishika6 from '../../Portfolio images/Nishika/Fabulous.mp4';
import nishika7 from '../../Portfolio images/Nishika/Karaoke.mp4';
import nishika8 from '../../Portfolio images/Nishika/kinky dog.mp4';

import profile from '../../Portfolio images/IMG_6769.JPG'




class AutoGallery extends React.Component {
   constructor(props){
       super(props);
       this.state={
           imgNumber:0,
           iminNum:0,
           imaxNum:10,
           imgReset:false,
           
           lnumber:0,
           lminNum:0,
           lmaxNum:5,
           lenReset:true,

           imgClickDisable:'imgClickDisable',
           vidClickDisable:'',
           lenClickDisable:'',
           contactClickDisable:'',

           trueContact:false,
           trueVideo:false,
           trueLenticular:false,
           trueImg:true,


           vidcounter:0,
           adder:1,
           clear:false,
           
           'image':[
               image1,
               image9,
               image3,
               image2,
               image5,
               image6,
               image8,
               image7,
               image4,
               image11,
               image10
            ],
            'imageAlt':[
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
            ],
            'lenticular':[
               lenticular1,
               lenticular5,
               lenticular3,
               lenticular2,
               lenticular7,
               //lenticular6,
               lenticular4,
           ],
           'nishika':[nishika4, nishika5, nishika7, nishika6, nishika3, nishika8, nishika2]
           
       };
       this.imgTrigger=this.imgTrigger.bind(this);
       this.showImg=this.showImg.bind(this);
       this.randomImg=this.randomImg.bind(this);
       this.lenticTrigger=this.lenticTrigger.bind(this);
       this.showLenticular=this.showLenticular.bind(this);
       this.randomLenticular=this.randomLenticular.bind(this);
       this.videoTrigger=this.videoTrigger.bind(this);
       this.contactTrigger=this.contactTrigger.bind(this);
       this.showVideo=this.showVideo.bind(this);
       this.nextVideo=this.nextVideo.bind(this);
       this.showContact=this.showContact.bind(this);
   }


   imgTrigger(){
    this.setState({
        trueImg:true /*display img*/, 
        imgNumber:0 /*1st img*/, 
        trueLenticular:false /*hide lenticular*/, 
        lenReset:true /*stop lenticular timer*/,
        trueVideo:false /* hide vid*/,
        trueContact:false, 
        imgClickDisable:'imgClickDisable',
        vidClickDisable:'vidClickDisable',
        lenClickDisable:'lenClickDisable',
        contactClickDisable:'contactClickDisable'
    })
    
    
    setTimeout(()=>{
        this.setState({
            imgReset:false, 
            imgNumber:1, 
            imgClickDisable:'imgClickDisable',
            vidClickDisable:'',
            lenClickDisable:'',
            contactClickDisable:''
        }); //I think because randomImg is the rendered section, it does not need to be initialised
        //all that needs to be done is for imgReset to be set to false; which we have put on a time delay of 4seconds to create a seamless loop
        
    },4000)
    
   }

   showImg(){
       if(this.state.trueImg===true){
           return (
           <img src={this.state.image[this.state.imgNumber]} className="images" alt={this.state.imageAlt[this.state.imgNumber]} ></img>
           )
        }
    }

   randomImg(){
       if(this.state.imgReset===true){
           return
       };//This condition is necersarry because without it, the timer not only continues to run the loop,
         //but it gets doubled up because of the second timer. 

       setTimeout(()=>{//timeout/interval is a countdown, and so once the countdow has begun (even if you exit the timer) that countdown must resolve. You can only stop future countdowns from occuring
           if(this.state.imgReset===true){
               //console.log('i stop now');
               return //this return stops any of the rest of this conditional from running
                      //but does not stop the timer, and neither does cleartimeout/interval 
               //We need this section of the conditional statement
               //because the lenticular timer needs to be activated with lenReset
               //which doesn't work in lenticTrigger for some reason.
            }
            else if (this.state.imgNumber === this.state.imaxNum){
                this.setState({imgNumber:this.state.iminNum})
            } else {
                this.setState({imgNumber:this.state.imgNumber+1});
            }; //console.log('bacon');
        }, 4000);
    };


    



    lenticTrigger(){//hide image, deactivate image timer, show lentic, start lentic timer
        this.setState({
            trueLenticular:true /*display lenticular*/, 
            lnumber:0 /*1st lent*/, 
            trueImg:false /*hide img*/,
            trueVideo:false /* hide vid*/, 
            imgReset:true /*img timer stopped*/, 
            lenReset:false /*lentic timer started*/,
            trueContact:false,
            imgClickDisable:'imgClickDisable',
            vidClickDisable:'vidClickDisable',
            lenClickDisable:'lenClickDisable',
            contactClickDisable:'contactClickDisable'

        });
        
        setTimeout(()=>{
            this.setState({
                lnumber:1,
                imgClickDisable:'',
                vidClickDisable:'',
                lenClickDisable:'lenClickDisable',
                contactClickDisable:''
            }) 
            this.randomLenticular();
        },4000) //without this the timer below does not run at all (and for some reason it needs to be interval instead of timeout; although actually, it is behaving the way it should, the real question is why doesn't setinterval work above and why does set timeout work above)
        //even though without it the timer below is triggered, only one timers codeblock can be active at a time, and as the final countdown is still running, this prevents the codeblock
        //of the new countdown from being active. 
        //So what we have done is added an additional timer here, which delays the start of the new timer, which is why we must start the new timer on the second image instead of the first. 
        //And is why we set the first image in lentic trigger. A 4 second delay for the start of the new trigger creates a seamless loop as if there is only one timer
        
        
        
    };


    showLenticular(){
        if(this.state.trueLenticular===true){
            return (
                <img src={this.state.lenticular[this.state.lnumber]} className="lenticulars" alt="lenticular images london taxidermy" ></img>
            )
        }   
    }

   randomLenticular(){
        if(this.state.lenReset===true){//having imgreset on false (before the end of the final countdown?) stops this conditional from running, hence why the timer continues after being stopped
            
            return
        };
            let bacon = setInterval(()=>{
                if(this.state.lenReset===true){
                    
                    //console.log('y u stop')
                    
                    clearInterval(bacon) //IN THIS CASE RETURN DOESN'T WORK ALONE AND CLEAR INTERVAL IS NEEDED EVEN THOUGH IT WASN'T NEEDED FOR RANDOMIMG; something to do with timeout vs interval??
                   
                    return
                }
                else if (this.state.lnumber === this.state.lmaxNum){
                    this.setState({lnumber:this.state.lminNum})
                    //console.log('baku')
                } else {
                    this.setState({lnumber:this.state.lnumber+1});
                }; //console.log('bbr');
            }, 4000);
        
        
    }; 


    videoTrigger(){
        this.setState({
            trueContact:false,
            trueVideo:true,
            trueImg:false,
            trueLenticular:false,
            imgReset:true,
            lenReset:true,
            imgClickDisable:'imgClickDisable',
            vidClickDisable:'vidClickDisable',
            lenClickDisable:'lenClickDisable',
            contactClickDisable:'contactClickDisable'
        });

        setTimeout(()=>{
            this.setState({
                imgClickDisable:'',
                vidClickDisable:'vidClickDisable',
                lenClickDisable:'',
                contactClickDisable:''
            })
        },4000); 

        this.showVideo();

    }

    showVideo(){
      
        if(this.state.trueVideo===true){
            return (
                <div>
                    <video controls loop autoPlay className="video" >
                    <source src={this.state.nishika[this.state.vidcounter]} type="video/mp4" alt="Nishika N8000"></source>
                    </video>
                    <div id="next" onClick={()=>{this.nextVideo()}}>Next</div>
                </div>
               )
            } 
    
       } 


   nextVideo(){
    if(this.state.vidcounter===6){
        this.setState({vidcounter:0,trueVideo:false});
        setTimeout(()=>{
            this.setState({trueVideo:true})
        },500) 
        
    } else {
        this.setState({vidcounter:this.state.vidcounter+1,trueVideo:false});
        setTimeout(()=>{
            this.setState({trueVideo:true})
        },500) 
        
    }
}

    contactTrigger(){
        this.setState({
            trueContact:true,
            trueVideo:false,
            trueImg:false,
            trueLenticular:false,
            imgReset:true,
            lenReset:true,
            imgClickDisable:'imgClickDisable',
            vidClickDisable:'vidClickDisable',
            lenClickDisable:'lenClickDisable',
            contactClickDisable:'contactClickDisable'
        });

        setTimeout(()=>{
            this.setState({
                imgClickDisable:'',
                vidClickDisable:'',
                lenClickDisable:'',
                contactClickDisable:'contactClickDisable'
            })
        },4000); 

        this.showContact();
    }

    
    showContact(){
        
        if(this.state.trueContact===true){
           
            return (
                <div id="contact">
                    <img src={profile} id="profile" alt="James Onashile Photographer"></img>
                    <h3>Hi, my name is James.</h3>
                    <h4>Born, raised, and living in South London.</h4>
                    <h4>I hope you enjoyed the visuals!</h4>
                    <h4>Let's work together! <a href="mailto:jonashile@gmail.com">Email Me</a></h4>
                </div> 
            )
        }
    }

   

   

   
    render(){
        this.randomImg();
        //this.randomLenticular();
        
        
        return(
            <div>
                <div id="nav">
                    <ul>
                        <li onClick={()=>{this.imgTrigger()}} id={this.state.imgClickDisable}>Digital</li>
                        <li onClick={()=>{this.videoTrigger()}} id={this.state.vidClickDisable}>Nishka N8000 / Analogue</li>
                        <li onClick={()=>{this.lenticTrigger()}} id={this.state.lenClickDisable}>Lenticular</li>
                        <li onClick={()=>{this.contactTrigger()}} id={this.state.contactClickDisable}>Contact / About Me</li>
                    </ul>
                </div>
                {this.showImg()}
                {this.showVideo()}
                {this.showLenticular()}
                {this.showContact()}

                
            </div>
            

        )
    }
};

export default AutoGallery;

