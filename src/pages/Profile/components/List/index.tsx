import { Container, ItemList, StyledUL } from "./styles"
import { ListProps } from "./types"


export const List = ({ itens }: ListProps) => {

    return (
        <Container>
            <StyledUL>
                {itens.map((item) => (
                    <ItemList>
                        {item}
                    </ItemList>
                ))}
            </StyledUL>
        </Container>
    )
}