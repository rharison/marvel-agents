import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 23px;
    width: 100%;
`;

export const ContentTabs = styled.div`
    border-bottom: 1px solid #EAECF0;
`;

export const stylesTab = {
    fontWeight: '500',
    textTransform: 'none',
    '&.Mui-selected': {
        color: '#081B4E'
    }
}

export const stylesTabIndicator = {
    style: {
        backgroundColor: '#081B4E',
        height: '3px'
    }
}

export const ContainerTabPanel = styled.div`
    margin: 27px 60px 0 0;
`;