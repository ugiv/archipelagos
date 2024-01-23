import styled from "styled-components";


export const SwipeContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: #181818;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;

    @media only screen and (min-width: 1024px){
        flex-direction: row;
        padding: 100px 0;
    }
`;
    
export const SwipeSubContainer = styled.div`
    width: 70%;
    height: 250px;
    padding: 50px 0;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direnction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
    img {
        position: absolute;
        width: 200px;
        height: auto;
        border-radius: 10px;
    }
    
    @media only screen and (min-width: 1024px){
        width: 30%;
        height: 400px;
        min-width: 500px;
        border-radius: 30px;

        img {
            width: 300px;
            border-radius: 20px;
        }
    }
`;


export const SwipeMiniContainer = styled.div`
    width: auto;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        width: 120px;
        color: white;
        font-size: 28px;
        font-weight: 800;
        line-height: 1.6;
    }

    @media only screen and (min-width: 1024px){
        height: 300px;
        width: 20%;

        h2 {
            font-size: 36px;
        }
    }
`;

export const SwipeButtonSolid = styled.button`
    width: 100px;
    height: 35px;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 20px;
    border: 1px solid white;
    
    @media only screen and (min-width: 1024px){
        width: 120px;
    }
`;

export const SwipeButtonHollow = styled.button`
    width: 100px;
    height: 35px;
    margin: 10px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 20px;
    border: 1px solid white;
    background-color: transparent;

    @media only screen and (min-width: 1024px){
        width: 120px;
    }
`;