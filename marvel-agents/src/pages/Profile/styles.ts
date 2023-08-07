import { styled } from "styled-components";

export const Container = styled.div`
    width: calc(100vw - 256px);
    display: flex;
    flex-direction: column;
    background-color: #fff;
`;

export const Header = styled.header`
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #EBEFF2;
    background-color: #fff;
`;

export const Content = styled.div`
    padding: 24px 10px 0 36px;
    display: flex;
    flex-direction: column;
`;

export const ContainerTitle = styled.div`

`;

export const Title = styled.span`
    font-size: 1.5rem;
    color: #777777;
    font-weight: 300;
    margin-left: 4px;
`;