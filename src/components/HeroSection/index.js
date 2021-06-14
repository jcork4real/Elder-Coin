import React, {useState} from 'react'
import Video from  '../../videos/video.mp4'
import { 
    HeroContainer, 
    HeroBg,
    VideoBg, 
    HeroContent, 
    HeroH1, HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
    ImgBg
} 
from './HeroElements'
import {Button} from '../ButtonElement'
import img from '../../images/pride-month-hero.svg'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

   const onHover = () => {
        setHover(!hover)
   }

    return (
     <HeroContainer>
         <HeroBg>
             {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
             <ImgBg src={img}/>
         </HeroBg>
         <HeroContent>
             <HeroH1>JUST A WHOLESOME COIN FOR THE FAMILY</HeroH1>
             <HeroP>CHOOSE THE RIGHT, BUY ELDER COIN</HeroP>
         </HeroContent>
         {/* <HeroBtnWrapper>
             <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                primary="true"
                dark="true"
             >
                 Buy $Prayers{hover ? <ArrowForward /> : <ArrowRight />} 
             </Button>
         </HeroBtnWrapper> */}
     </HeroContainer>
    )
}

export default HeroSection
