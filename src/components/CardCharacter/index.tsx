import { Container, ContainerCharacterPicture, ContainerText, Title, Description } from "./styles"
import { CardCharacterProps } from "./types"
import { Skeleton } from "@mui/material"
import useCardCharacter from "./useCardCharacter"

export const CardCharacter = ({ character, skeleton }: CardCharacterProps) => {
    const {
        handleCardClick
    } = useCardCharacter()

    return (
        <Container
            onClick={() => {
                if (!skeleton && character) {
                    handleCardClick(character.id)
                }
            }}
            $skeleton={skeleton}
        >
            {!skeleton && character &&
                <>
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
                </>
            }
            {skeleton && !character &&
                <>
                    <Skeleton
                        variant="rectangular"
                        animation="wave"
                        width={'100%'}
                        height={'100%'}
                        sx={{
                            borderRadius: '15px'
                        }}
                    />
                </>
            }
        </Container>
    )
}