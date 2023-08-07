import { styled } from "styled-components";

export const Container = styled.div`
    box-shadow: 0px 6px 18px 0px #0000000F;
    width: 100%;
    display: flex;
    border-radius: 15px;
    margin: 0 0 0 10px;
    padding: 42px 35px 72px 34px;
    gap: 28px;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Title = styled.span`
    color: #081B4E;
    font-weight: 700;
    font-size: 1.5rem;
`;

export const Description = styled.span`
    color: #717171;
    font-weight: 600;
    font-size: 1rem;
    margin-left: 3px;
    line-height: 24px;
`;

export const stylesAvatar = {
    width: '90px',
    height: '90px',
}