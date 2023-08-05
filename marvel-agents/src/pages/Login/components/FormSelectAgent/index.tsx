import { SelectAgent } from "../../../../components"
import { Button } from "../../../../components/Button"
import { ButtonContent, TextButton } from "../../styles"
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
            <Button
                onClick={() => { }}
                style={{
                    width: 'fit-content',
                    alignSelf: 'flex-end',
                }}
            >
                <ButtonContent
                    $width={88}
                    $height={48}
                >
                    <TextButton
                        $size={16}
                    >
                        Entrar
                    </TextButton>
                </ButtonContent>
            </Button>
        </Container>
    )
}