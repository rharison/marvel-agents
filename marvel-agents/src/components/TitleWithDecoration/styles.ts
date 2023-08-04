import { styled } from "styled-components";

export const Title = styled.span<{ $decoration: string }>`
    font-size: 2.25rem;
    color: #081B4E;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: initial;

    &::after {
        content: '${props => props.$decoration}';
        color: #F43724;
        position: relative;
        font-size: 2.25rem;
        font-weight: 700;
        margin-left: ${props => props.$decoration !== '.' ? '4px' : '0'};
    }
`;
