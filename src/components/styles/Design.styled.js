import styled from "styled-components";

export const SubContainerDesign = styled.div`
    width: auto;
    height: auto;
    padding: 100px 0;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
        width: 300px;
        height: auto;
        border-radius: 10px;
        margin-right: 20px;
    }

    @media only screen and (min-width: 1024px){
        width: 70%;
        flex-wrap: wrap;
        margin: 0 15%;

        img {
            width: 30%;
            height: auto;
            border-radius: 20px;
            margin: 20px 0;
        }

    }
`;

export const ContainerDesign = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    @media only screen and (min-width: 1024px){
        overflow-x: hidden;
    }
`;