import { CardCharacter } from "../../components"
import { LIMIT_DATA_PER_PAGE } from "../../config/constants"
import { Pagination } from "./components/Pagination"
import { SearchField } from "./components/SearchField"
import { Container, Content, Footer, Header, ContainerContent } from "./styles"
import useHome from "./useHome"

export const Home = () => {
    const {
        page,
        totalPages,
        characters,
        isLoading,
        handleChangePage,
        handleSearch,
    } = useHome()

    return (
        <Container>
            <Header>
                <SearchField
                    handleChange={handleSearch}
                />
            </Header>
            <ContainerContent>
                <Content>
                    {isLoading &&
                        Array(LIMIT_DATA_PER_PAGE).fill(0).map((_, index) => (
                            <CardCharacter
                                key={index}
                                skeleton
                            />
                        ))
                    }
                    {!isLoading && !!characters.length && characters.map(character => (
                        <CardCharacter
                            key={character.id}
                            character={character}
                        />
                    ))}
                </Content>
                <Footer>
                    {!!characters.length &&
                        <Pagination
                            actualPage={page}
                            totalPages={totalPages}
                            onPageChange={handleChangePage}
                        />
                    }
                </Footer>
            </ContainerContent>
        </Container>
    )
}