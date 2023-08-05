import { useEffect, useState } from "react";
import { getCharacters } from "../../../../services/characters";
import { Character } from "../../../../types/agent";
import { generateRandomNumber } from "../../../../utils/number";

const useFormSelectAgent = () => {
    const [characters, setCharacters] = useState<Character[]>([]);


    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = await getCharacters({
                limit: 7,
                offset: generateRandomNumber(7, 1555)
            });
            setCharacters(characters);
        }

        fetchCharacters();
    }, []);

    return {
        characters,
    }
}


export default useFormSelectAgent;