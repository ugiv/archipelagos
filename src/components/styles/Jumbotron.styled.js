import styled from "styled-components";

export const JumbotronContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 750px;
    max-height: 920px;
    position: relative;
`;

export const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 750px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (min-width: 1024px){
        flex-direction: row;
    }
`

export const TextContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    width: 80%;
    height: 40%;
    position: relative;
    background-color: white;
    font-family: "Lato", sans-serif;
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px){
        width: 30%;
        height: 100%;
        margin: 0 12.5%;
        align-items: flex-start;
        text-align: left;
        padding: 0;
    }
`

export const HeroContainer = styled.div`
    width: 100%;
    height: 60%;
    overflow: hidden;
    background-color: white;
    border-radius: 0 0 100px  0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        height: auto;
    }

    @media only screen and (min-width: 1024px){
        width: 45%;
        height: 100%;

        img {
            min-width: 700px;
        }
    }
`
export const Header = styled.div`
    width: 70%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 20px;
    z-index: 10;

    @media only screen and (min-width: 1024px){
        width: 100%
    }
`

export const Logo = styled.h3`
    width: auto;
    display: inline-block;
    font-size: 20px;
    color: black;
    font-weight: 800;
    margin: 0;

    @media only screen and (min-width: 1024px){
        width: 45%;
        font-size: 26px;
    }
`
export const ButtonHeaderContainer = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px){
        width: 55%;
    }
`

export const Title = styled.h1`
    color: black;
    font-size: 28px;
    font-weight: 800;
    margin: 0;

    @media only screen and (min-width: 1024px){
        font-size: 48px;
    }
`

export const Paragraph = styled.p`
    width: 80%;
    color: black;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;

    @media only screen and (min-width: 1024px){
        font-size: 20px;
    }
`

export const SolidButtonLarge = styled.button`
    background-color: black;
    width: 100px;
    height: 35px;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 700;
    border-radius: 8px;

    @media only screen and (min-width: 1024px){
        width: 150px;
        height: 40px;
        font-size: 20px;
    }
`
export const SolidButtonMedium = styled.button`
    background-color: black;
    width: 75px;
    height: 30px;
    color: white;
    border: 2px solid black;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    
    @media only screen and (min-width: 1024px){
        width: 90px;
        margin: 5px;
    }
`
export const HollowButtonMedium = styled.button`
    display: none;
    background-color: white;
    width: 90px;
    height: 30px;
    color: black;
    border: 2px solid black;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    margin: 5px;

    @media only screen and (min-width: 1024px){
        display: block;
    }
`
export const ColaborateContainer = styled.div`
    position: absolute;
    width: 100%;
    max-width: 400px;
    height: 20px;
    bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        width: 70px;
    }
    @media only screen and (min-width: 1024px){
        width: 400px;
        img {
            width: 100px;
        }
    }
`;