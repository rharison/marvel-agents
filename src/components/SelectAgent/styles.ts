import { styled } from 'styled-components';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export const StyledSelect = styled(Select)`
    height: 44px;
    border-radius: 8px !important;

    &:hover {
        & > fieldset {
            border-color: #213770 !important;
        }
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #213770 !important;
        box-shadow: 0px 0px 0px 4px #081B4E14 !important;
    }

    & > svg {
        margin-right: 14px;
        color: #667085;
    }
`;

export const ContainerEmptyValue = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const TextEmptyValue = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #667085;
`;

export const StyledMenuItem = styled(MenuItem)`
    justify-content: space-between;
    &:hover, &.Mui-selected {
        background-color: #F9FAFB !important;
    }

`;

export const TextMenuItem = styled.span`
    font-family: 'Inter', sans-serif;
    font-weight: 500 !important;
    font-size: 1rem;
    color: #101828;
`;

export const StyledAvatar = styled(Avatar)`
    width: 24px !important;
    height: 24px !important;
`;

export const ContainerRenderSelectedValue = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const StyledCheckIcon = styled(CheckOutlinedIcon)`
    width: 20px;
    height: 20px;
    color: #00113D;
`;

export const ContainerAvatarAndName = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
