import { styled } from "styled-components";

export const Container = styled.div`
    width: calc(100vw - 256px);
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #EBEFF2;
    background-color: #fff;
    padding-left: 37px;
`;

export const Content = styled.div`
    width: 100%;
    min-height: 470px;
    flex: 1;
    background-color: #fff;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(25% - 20px), 1fr));
    gap: 10px;
    & :nth-last-child(-n+2) {
        grid-column: span 2;
    }
    margin-bottom: 32px;
`;

export const Footer = styled.footer`
    flex: 1;
    background-color: #fff;
    padding: 32px 16px 0 39px;
    border-top: 1px solid #EBEFF2;
    display: flex;
    justify-content: center;
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 19px 16px 0 27px;
    background-color: #fff;
`;