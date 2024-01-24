import styled from "styled-components";


export const SwipeContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: #181818;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;

    @media only screen and (min-width: 1024px){
        flex-direction: row;
        padding: 100px 0;
        justify-content: center;
    }
`;
    
export const SwipeSubContainer = styled.div`
    width: 80%;
    max-width: 350px;
    height: 250px;
    padding: 50px 0;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direnction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        width: 65%;
        height: auto;
        border-radius: 10px;
    }

    @media only screen and (min-width: 1024px){
        width: 30%;
        max-width: none;
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
    flex-direction: row-reverse;
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
        flex-direction: column;
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
    cursor: pointer;
    
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
    cursor: pointer;

    @media only screen and (min-width: 1024px){
        width: 120px;
    }
`;
