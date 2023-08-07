import { TitleWithDecoration } from "../../components"
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
                    {character &&
                        <TabsProfile
                            character={character}
                        />
                    }
                </ContainerTitle>
            </Content>
        </Container>
    )
}