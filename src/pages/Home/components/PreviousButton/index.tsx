import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Container, Text } from './styles';

export const PreviousButton = () => {

    return (
        <Container>
            <ArrowBackOutlinedIcon />
            <Text>
                Anterior
            </Text>
        </Container>
    )
}