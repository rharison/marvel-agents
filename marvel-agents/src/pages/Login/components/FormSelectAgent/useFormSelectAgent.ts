import { useEffect, useState } from "react";
import { getCharacters } from "../../../../services/characters";
import { Character } from "../../../../types/agent";
import { generateRandomNumber } from "../../../../utils/number";
import { useNavigate } from "react-router-dom";

const useFormSelectAgent = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState<number | undefined>();

    const navigate = useNavigate();

    const handleSelectAgent = (characterId: number) => {
        setSelectedCharacterId(characterId);
    }

    useEffect(() => {
        const fetchCharacters = async () => {
            const { characters } = await getCharacters({
                limit: 7,
                offset: generateRandomNumber(7, 1555)
            });
            setCharacters(characters);
        }

        fetchCharacters();
    }, []);

    const handleClickEnter = () => {
        if(selectedCharacterId) {
            navigate(`/profile?characterId=${selectedCharacterId}`);
        }
    }

    const isDisabledButton = !selectedCharacterId;

    return {
        characters,
        isDisabledButton,
        handleSelectAgent,
        handleClickEnter
    }
}


export default useFormSelectAgent;