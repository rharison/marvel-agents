import { CardCharacter } from "../../components"
import { Pagination } from "./components/Pagination"
import { Container, Content, Footer, Header, ContainerContent } from "./styles"
import useHome from "./useHome"

export const Home = () => {
    const {
        page,
        characters,
        handleChangePage
    } = useHome()

    return (
        <Container>
            <Header>

            </Header>
            <ContainerContent>
                <Content>
                    {characters.map(character => (
                        <CardCharacter
                            key={character.id}
                            character={character}
                        />
                    ))}
                </Content>
                <Footer>
                    <Pagination />
                </Footer>
            </ContainerContent>
        </Container>
    )
}