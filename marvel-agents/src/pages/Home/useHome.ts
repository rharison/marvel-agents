import { useCallback, useEffect, useState } from "react"
import { Character } from "../../types/agent"
import { getCharacters } from "../../services/characters"
import useToast from "../../hooks/useToast"
import { LIMIT_DATA_PER_PAGE } from "../../config/constants"

const useHome = () => {
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState<Character[]>([])
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const { showToast } = useToast()

    const fetchCharacters = useCallback(async () => {
        try {
            setIsLoading(true)
            const { characters, totalItens } = await getCharacters({
                limit: LIMIT_DATA_PER_PAGE,
                offset: page * LIMIT_DATA_PER_PAGE
            });

            setTotalPages(Math.floor(totalItens / LIMIT_DATA_PER_PAGE));
            setCharacters(characters);
        } catch {
            showToast(
                'error',
                'Erro ao carregar os personagens'
            )
        } finally {
            setIsLoading(true)
        }
    }, [page])

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters, page]);

    const handleChangePage = (newPage: number) => {
        setPage(newPage)
    }

    return {
        page,
        totalPages,
        characters,
        isLoading,
        handleChangePage
    }
}

export default useHome