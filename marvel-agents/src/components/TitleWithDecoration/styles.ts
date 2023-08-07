import { styled } from "styled-components";

export const Title = styled.span<{ $decoration: string, $margin: string, $size: number }>`
    font-size: ${props => props.$size}rem;
    color: #081B4E;
    font-weight: 700;
    line-height: initial;
    letter-spacing: -1px;
    margin: ${props => props.$margin};

    &::after {
        content: '${props => props.$decoration}';
        color: #F43724;
        position: relative;
        font-size: ${props => props.$size}rem;
        font-weight: 700;
        margin-left: ${props => props.$decoration !== '.' ? '4px' : '0'};
    }
`;
