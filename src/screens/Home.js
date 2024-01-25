import { useState } from 'react';
import {JumbotronContainer, 
    SubContainer, TextContainer, HeroContainer, 
    Title, Paragraph, SolidButtonLarge, Header, 
    Logo, ButtonHeaderContainer, SolidButtonMedium, HollowButtonMedium, ColaborateContainer } 
from '../components/styles/Jumbotron.styled';
import {ContainerDesign, SubContainerDesign } from '../components/styles/Design.styled';
import { SwipeMiniContainer, SwipeButtonHollow, SwipeButtonSolid, SwipeContainer, SwipeSubContainer, SwipeImageContainer } from '../components/styles/Swipe.styled';

import './Home.css';
import Hero from '../image/Hero.jpg';
import companyOne from '../image/Architecteam.png';
import companyTwo from '../image/ArchiMania.png';
import companyThree from '../image/BlueTechure.png';
import designOne from '../image/design-one.jpg';
import designTwo from '../image/design-two.jpg';
import designThree from '../image/design-three.jpg';
import designFour from '../image/design-four.jpg';
import designFive from '../image/design-five.jpg';
import designSix from '../image/design-six.jpg';
import resultOne from '../image/resultOne.jpg';
import resultTwo from '../image/resultTwo.jpg';
import resultThree from '../image/resultThree.jpg';
import resultFour from '../image/resultFour.jpg';
import resultFive from '../image/resultFive.jpg';
import resultSix from '../image/resultSix.jpg';
import resultSeven from '../image/resultSeven.jpg';
import resultEight from '../image/resultEight.jpg';
import resultNine from '../image/resultNine.jpg';




const resultImage = [resultOne, resultTwo, resultThree, resultFour, resultFive, resultSix, resultSeven, resultEight, resultNine];

export default function Home(){
    const [imageData, setImageData] = useState([designOne, designTwo, designThree, designFour, designFive, designSix]);
    // const [onProcess, setOnProcess] = useState(true);
    // const [result, setResult] = useState(false);
    const handleSwipeLeft = () => {
        const id = 'image'+ (imageData.length - 1);
        const imageSwipe = document.getElementById(id);
        if (imageData.length > 1){
            imageSwipe.classList.remove("imageLeft");
        }
        if (imageData.length === 2){
            imageSwipe.classList.remove("imageOne");
        }
        imageSwipe.classList.add("swipeActiveLeft");
        setTimeout(() => setImageData((prev) => prev.slice(1)), 900);
    }
    const handleSwipeRight = () => {
        const id = 'image'+ (imageData.length - 1);
        const imageSwipe = document.getElementById(id);
        if (imageData.length > 1){
            imageSwipe.classList.remove("imageLeft");
        }
        if (imageData.length === 2){
            imageSwipe.classList.remove("imageOne");
        }
        imageSwipe.classList.add("swipeActiveRight");
        setTimeout(() => setImageData((prev) => prev.slice(1)), 900);
    }
    const handleSwipeResult = () => {
        const randomIndex = Math.floor(Math.random() * 9);
        return <img src={resultImage[randomIndex]} alt='result' />
    }
    return (
        <div className="home">
            <JumbotronContainer>
                <SubContainer>
                    <Header>
                        <Logo>ARCHIPELAGOS</Logo>
                        <ButtonHeaderContainer>
                            <HollowButtonMedium >Sign Up</HollowButtonMedium>
                            <SolidButtonMedium>Log In</SolidButtonMedium>
                        </ButtonHeaderContainer>
                    </Header>
                    <HeroContainer>
                        <img src={Hero} alt='hero'/>
                    </HeroContainer>
                    <TextContainer>
                        <Title>Create home design with the easy ways.</Title>
                        <Paragraph>Just swap design picture you like and it will give your dream house design.</Paragraph>
                        <SolidButtonLarge>Try</SolidButtonLarge>
                        <ColaborateContainer>
                            <img src={companyOne} alt='companyOne' />
                            <img src={companyTwo} alt='companyOne' />
                            <img src={companyThree} alt='companyOne' />
                        </ColaborateContainer>
                    </TextContainer>
                </SubContainer>
            </JumbotronContainer>
            <ContainerDesign>
                <SubContainerDesign>
                    <img src={designOne} alt='design one' /> 
                    <img src={designTwo} alt='design two' /> 
                    <img src={designThree} alt='design three' /> 
                    <img src={designFour} alt='design four' /> 
                    <img src={designFive} alt='design five' /> 
                    <img src={designSix} alt='design six' /> 
                </SubContainerDesign>
            </ContainerDesign>
            <SwipeContainer>
                <SwipeMiniContainer>
                    <h2>JUST SWIPE IT</h2>
                </SwipeMiniContainer>
                <SwipeSubContainer>
                    <SwipeImageContainer>
                        { imageData.length ? 
                            imageData.toReversed().map((image, index) => {
                                if (imageData.length > 2) {
                                    if (index === imageData.length - 1){
                                        return <img src={image} alt="index" id={"image" + index} className='imageLeft'/>
                                    } else if (index === 0) {
                                        return <img src={image} alt="index" id={"image" + index} className='imageRight'/>
                                    } else {
                                        return <img src={image} alt="index" id={"image" + index} />
                                    }
                                } else if (imageData.length === 2){
                                    if (index === 0){
                                        return <img src={image} alt="index" id={"image" + index} className='imageTwo'/>
                                    } else {
                                        return <img src={image} alt="index" id={"image" + index} className='imageOne'/>
                                    }
                                } else {
                                    return <img src={image} alt="index" id={"image" + index}/>
                                }
                            }):
                            handleSwipeResult()
                        }
                    </SwipeImageContainer>
                </SwipeSubContainer>
                <SwipeMiniContainer>
                    <SwipeButtonSolid onClick={handleSwipeRight}>Like</SwipeButtonSolid>
                    <SwipeButtonHollow onClick={handleSwipeLeft}>Dislike</SwipeButtonHollow>
                </SwipeMiniContainer>
            </SwipeContainer>
        </div>
    )
}