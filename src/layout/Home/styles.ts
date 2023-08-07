import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00113D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ContainerContent = styled.div`
    max-width: 1200px;
    width: 100%;
`;

export const Header = styled.header`
    position: absolute;
    top: 49px;
    left: 106px;
`;

export const Content = styled.div`
    margin: 42px 0 0 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ChildrenContainer = styled.div`
    box-shadow: 0px 17px 25px 0px #00000040;
    border-radius: 1.75rem;
    background-color: #FFFFFF;
`;