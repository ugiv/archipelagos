import {JumbotronContainer, 
    SubContainer, TextContainer, HeroContainer, 
    Title, Paragraph, SolidButtonLarge, Header, 
    Logo, ButtonHeaderContainer, SolidButtonMedium, HollowButtonMedium } from '../components/styles/Jumbotron.styled';
import './Home.css';
import Hero from '../image/Hero.jpg';

export default function Home(){
    return (
        <div className="home">
            <JumbotronContainer>
                <SubContainer>
                    <Header>
                        <Logo>Archipelagos</Logo>
                        <ButtonHeaderContainer>
                            <HollowButtonMedium>Sign Up</HollowButtonMedium>
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
                    </TextContainer>
                </SubContainer>
            </JumbotronContainer>
        </div>
    )
}