import { Container, ContainerText, Description, Title, stylesAvatar } from "./styles"
import { VisaoGeralProps } from "./types"
import { Avatar } from "@mui/material"


export const VisaoGeral = ({ name, description, urlImage }: VisaoGeralProps) => {

    return (
        <Container>
            <Avatar
                alt={name}
                src={urlImage}
                sx={stylesAvatar}
            />
            <ContainerText>
                <Title>
                    {name}
                </Title>
                <Description>
                    {description}
                </Description>
            </ContainerText>
        </Container>
    )
}