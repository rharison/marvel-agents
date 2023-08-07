import { TitleWithDecoration } from "../../components"
import { SkeletonProfile } from "./components/Skeleton"
import { TabsProfile } from "./components/Tabs"
import { Container, ContainerTitle, Content, Header, Title } from "./styles"
import useProfile from "./useProfile"

export const Profile = () => {
    const {
        character,
        isLoading
    } = useProfile()

    return (
        <Container>
            <Header />
            <Content>
                {isLoading && <SkeletonProfile />}
                {!isLoading && !character && <h1>Personagem não encontrado</h1>}
                {!isLoading && character &&
                    <>
                        <ContainerTitle>
                            <TitleWithDecoration
                                title="Perfil"
                                size={1.5}
                                decoration="/"
                                margin="0"
                            />
                            <Title>
                                {character?.name}
                            </Title>
                        </ContainerTitle>
                        {character &&
                            <TabsProfile
                                character={character}
                            />
                        }
                    </>
                }
            </Content>
        </Container>
    )
}