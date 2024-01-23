import {JumbotronContainer, 
    SubContainer, TextContainer, HeroContainer, 
    Title, Paragraph, SolidButtonLarge, Header, 
    Logo, ButtonHeaderContainer, SolidButtonMedium, HollowButtonMedium, ColaborateContainer } 
from '../components/styles/Jumbotron.styled';
import {ContainerDesign, SubContainerDesign } from '../components/styles/Design.styled';
import { SwipeMiniContainer, SwipeButtonHollow, SwipeButtonSolid, SwipeContainer, SwipeSubContainer } from '../components/styles/Swap.styled';

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




export default function Home(){
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
                    <SwipeButtonSolid>Like</SwipeButtonSolid>
                    <SwipeButtonHollow>Dislike</SwipeButtonHollow>
                </SwipeMiniContainer>
                <SwipeSubContainer>
                    <img src={designOne} alt='designOne' />
                </SwipeSubContainer>
                <SwipeMiniContainer>
                    <h2>JUST SWAP IT</h2>
                </SwipeMiniContainer>
            </SwipeContainer>
        </div>
    )
}