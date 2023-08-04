import { styled } from "styled-components";

export const Container = styled.div<{ $height?: number, $width?: number }>`
    padding: 49px 36px 43px 36px;
    width: ${props => props.$width ? `${props.$width}px` : '380px'};
    height: ${props => props.$height ? `${props.$height}px` : '433px'};
    display: flex;
    flex-direction: column;
`;

export const Description = styled.span`
    font-size: 1rem;
    color: #777777;
    letter-spacing: -1px;
    line-height: 20.32px
`;

export const ContainerInputsLogin = styled.div`
    display: flex;
    flex-direction: column;
    margin: 6px 0 11px 0;
    gap: 23px;
`;

export const ButtonContent = styled.div<{$width?: number, $height?: number}>`
    color: #fff;
    width:  ${props => props.$width ? `${props.$width}px` : '100%'};
    height: ${props => props.$height ? `${props.$height}px` : '57px'};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
`;

export const TextButton = styled.span<{ size?: number, weight?: number }>`
    color: #fff;
    font-weight: ${props => props.weight ? props.weight : '700'};
    font-size: ${props => props.size ? `${props.size}px` : '24px'};
`;