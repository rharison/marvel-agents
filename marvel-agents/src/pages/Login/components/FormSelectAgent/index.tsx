import { SelectAgent } from "../../../../components"
import { Container } from "./styles"
import useFormSelectAgent from "./useFormSelectAgent"

export const FormSelectAgent = () => {
    const {
        characters,
    } = useFormSelectAgent()


    return (
        <Container>
            <SelectAgent
                characters={characters}
            />
        </Container>
    )
}