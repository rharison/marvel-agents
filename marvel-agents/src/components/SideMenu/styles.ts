import { styled } from "styled-components";


export const Container = styled.aside`
    height: 100vh;
    width: 256px;
    box-shadow: 6px 0px 18px 0px #0000000F;
    background-color: #FFFFFF;
`;

export const Header = styled.header`
    height: 61px;
    border-bottom: 1px solid #EBEFF2;
    padding: 20px 0 14px 26px;

    & > img {
        cursor: pointer;
    }
`;

export const ContainerMenuItens = styled.div`
    padding: 17px 24px 22px 24px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-bottom: 1px solid #EBEFF2;
`;