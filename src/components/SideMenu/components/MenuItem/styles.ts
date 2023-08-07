import { styled } from "styled-components";

export const Container = styled.div<{ $isActive: boolean, $changeIconStrokeColor: boolean }>`
    display: flex;
    align-items: center;
    gap: 14px;
    font-weight: 500;
    color: ${({ $isActive }) => $isActive ? "#F21A05" : "#000"};
    cursor: pointer;
    width: fit-content;

    & > svg {
        width: 20px;
        height: 20px;
        & > path {
            stroke: ${({ $changeIconStrokeColor, $isActive }) =>
                $changeIconStrokeColor
                    ? $isActive
                        ? "#F21A05"
                        : "#000"
                    : 'initial'
            };
        }
    }
`;

export const TextMenuItem = styled.span`
    font-size: 0.813rem;
    transform: translateY(1px);
`;