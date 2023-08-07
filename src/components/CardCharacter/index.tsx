import { Container, ContainerCharacterPicture, ContainerText, Title, Description } from "./styles"
import { CardCharacterProps } from "./types"
import { Skeleton } from "@mui/material"

export const CardCharacter = ({ character, skeleton }: CardCharacterProps) => {

    return (
        <Container
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