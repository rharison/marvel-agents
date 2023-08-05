import { ContainerAvatarAndName, StyledAvatar, StyledCheckIcon, StyledMenuItem, StyledSelect, TextMenuItem } from "./styles"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { SelectAgentProps } from "./types";
import { useState } from "react";
import useSelectAgent from "./useSelectAgent";

export const SelectAgent = ({ characters }: SelectAgentProps) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);

    const {
        handleRenderValue
    } = useSelectAgent(characters);

    return (
        <StyledSelect
            fullWidth
            displayEmpty
            value={selected}
            onChange={(event) => setSelected(event.target.value as number)}
            IconComponent={() => {
                if (open) {
                    return <KeyboardArrowUpOutlinedIcon />
                }
                return <KeyboardArrowDownOutlinedIcon />
            }}
            renderValue={handleRenderValue}
            MenuProps={{
                PaperProps: {
                    sx: {
                        borderRadius: '0.5rem',
                        boxShadow: '0px 12px 16px -4px #10182814',
                        marginTop: '0.5rem',
                    },
                },
            }}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
        >
            {characters?.map((character) => (
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
            ))}
        </StyledSelect >
    )
}