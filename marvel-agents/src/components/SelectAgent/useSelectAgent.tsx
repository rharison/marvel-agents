import { Character } from "../../types/agent";
import { PersonIcon } from "../Icons/Person";
import { ContainerEmptyValue, ContainerRenderSelectedValue, StyledAvatar, TextEmptyValue, TextMenuItem } from "./styles";


const useSelectAgent = (characters: Character[]) => {

    const handleRenderValue = (selected: unknown) => {
        if (!selected) {
            return (
                <ContainerEmptyValue>
                    <PersonIcon />
                    <TextEmptyValue>
                        Selecione um agente
                    </TextEmptyValue>
                </ContainerEmptyValue>
            )
        }

        const character = characters?.find((character) => character.id === selected) as Character;

        return (
            <ContainerRenderSelectedValue>
                <StyledAvatar
                    alt={character.name}
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
                <TextMenuItem>
                    {character.name}
                </TextMenuItem>
            </ContainerRenderSelectedValue>
        )
    };

    return {
        handleRenderValue
    }
};

export default useSelectAgent;