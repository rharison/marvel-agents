import { useCallback, useEffect, useState } from "react"
import { Character } from "../../types/agent"
import { getCharacters } from "../../services/characters"

const LIMIT_DATA_PER_PAGE = 10

const useHome = () => {
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState<Character[]>([])

    const fetchCharacters = useCallback(async () => {
        const characters = await getCharacters({
            limit: LIMIT_DATA_PER_PAGE,
            offset: page * LIMIT_DATA_PER_PAGE
        });
        setCharacters(characters);
    }, [page])

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters, page]);

    const handleChangePage = (newPage: number) => {
        setPage(newPage)
    }

    return {
        page,
        characters,
        handleChangePage
    }
}

export default useHome