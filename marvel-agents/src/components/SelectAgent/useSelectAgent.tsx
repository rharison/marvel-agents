import { useState } from "react";
import { Character } from "../../types/agent";
import { PersonIcon } from "../Icons/Person";
import { ContainerAvatarAndName, ContainerEmptyValue, ContainerRenderSelectedValue, StyledAvatar, StyledCheckIcon, StyledMenuItem, TextEmptyValue, TextMenuItem } from "./styles";
import { SelectChangeEvent } from "@mui/material";


const useSelectAgent = (characters: Character[]) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<number | string>('');

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

    const renderOptions = () => {
        return characters?.map((character) => (
            <StyledMenuItem
                key={character.id}
                value={character.id}
                sx={{
                    padding: '10px 14px',
                    justifyContent: 'space-between',
                }}
            >
                <ContainerAvatarAndName>
                    <StyledAvatar
                        alt={character.name}
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    />
                    <TextMenuItem>
                        {character.name}
                    </TextMenuItem>
                </ContainerAvatarAndName>
                {character.id === selected &&
                    <StyledCheckIcon />
                }
            </StyledMenuItem>
        ))
    }

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSelected(event.target.value as number);
    }

    return {
        open,
        selected,
        handleRenderValue,
        renderOptions,
        setOpen,
        handleChange
    }
};

export default useSelectAgent;