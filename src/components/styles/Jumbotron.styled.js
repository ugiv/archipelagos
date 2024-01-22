import styled from "styled-components";

export const JumbotronContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items; center
`

export const TextContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    width: 30%;
    margin: 0 12.5%;
    height: auto;
    background-color: white;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeroContainer = styled.div`
    width: 45%;
    height: 100%;
    overflow: hidden;
    background-color: white;
    border-radius: 0 0 100px  0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 100%;
        height: auto;
        min-width: 550px;

    }
`
export const Header = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 50px;
    z-index: 10;
`

export const Logo = styled.h3`
    width: 45%;
    display: inline-block;
    font-size: 26px;
    color: black;
    font-weight: 700;
    margin: 0;
`
export const ButtonHeaderContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: black;
    font-size: 48px;
    font-weight: 700;
    margin: 0;
`

export const Paragraph = styled.p`
    width: 80%;
    color: black;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
`

export const SolidButtonLarge = styled.button`
    background-color: black;
    width: 150px;
    height: 50px;
    color: white;
    border: none;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;
`
export const SolidButtonMedium = styled.button`
    background-color: black;
    width: 90px;
    height: 30px;
    color: white;
    border: 2px solid black;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    margin: 5px;
`
export const HollowButtonMedium = styled.button`
    background-color: white;
    width: 90px;
    height: 30px;
    color: black;
    border: 2px solid black;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    margin: 5px;
`