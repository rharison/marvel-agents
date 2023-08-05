import { Container, ContainerCharacterPicture, ContainerText, Title, Description } from "./styles"
import { CardCharacterProps } from "./types"

export const CardCharacter = ({ character }: CardCharacterProps) => {

    return (
        <Container>
            <ContainerCharacterPicture>
                <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                />
            </ContainerCharacterPicture>
            <ContainerText>
                <Title>
                    {character.name}
                </Title>
                <Description>
                    {character.description}
                </Description>
            </ContainerText>
        </Container>
    )
}