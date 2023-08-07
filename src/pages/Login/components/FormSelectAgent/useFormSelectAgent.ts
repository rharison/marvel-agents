import { useContext, useEffect, useState } from "react";
import { getCharacters } from "../../../../services/characters";
import { Character } from "../../../../types/agent";
import { generateRandomNumber } from "../../../../utils/number";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { HomePagDispatchContext } from "../../../../context/HomePageContext"
import { LoginSteps } from "../../types";

const useFormSelectAgent = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState<number | undefined>();

    const navigate = useNavigate();
    const {
        isAuthenticated
    } = useAuth()
    const setStepHomePage = useContext(HomePagDispatchContext)

    const handleSelectAgent = (characterId: number) => {
        setSelectedCharacterId(characterId);
    }

    useEffect(() => {
        if(!isAuthenticated()) {
            return setStepHomePage(LoginSteps.LOGIN)
        }

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
            localStorage.setItem('selectedCharacterId', selectedCharacterId.toString());
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