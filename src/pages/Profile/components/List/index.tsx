import { Container, ItemList, StyledUL } from "./styles"
import { ListProps } from "./types"


export const List = ({ itens }: ListProps) => {

    return (
        <Container>
            <StyledUL>
                {itens.map((item) => (
                    <ItemList
                        key={item}
                    >
                        {item}
                    </ItemList>
                ))}
            </StyledUL>
        </Container>
    )
}