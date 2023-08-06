import { styled } from "styled-components";

export const Container = styled.div<{ $skeleton?: boolean }>`
    display: flex;
    gap: 15px;
    background-color: #EAECF0;
    border-radius: 15px;
    padding:  ${({ $skeleton }) => $skeleton ? '0' : '14px 10px'};
    height: 150px;
`;

export const ContainerCharacterPicture = styled.div`
    min-width: 84px;
    width: 84px;
    height: 119px;
    border-radius: 15px;
    overflow: hidden;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: calc(100% - 104px);
`;

export const Title = styled.span`
    color: #000;
    font-size: 1rem;
    font-weight: 700;
`;

export const Description = styled.span`
    color: #000;
    font-weight: 300;
    font-size: 0.75rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;