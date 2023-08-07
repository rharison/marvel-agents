import { useCallback, useEffect, useState } from "react"
import { Character } from "../../types/agent"
import { getCharacters } from "../../services/characters"
import useToast from "../../hooks/useToast"
import { LIMIT_DATA_PER_PAGE } from "../../config/constants"
import { debounce } from 'lodash'
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const useHome = () => {
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState<Character[]>([])
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState<string>('')

    const navigate = useNavigate()
    const {
        isAuthenticated
    } = useAuth()
    const { showToast } = useToast()

    const fetchCharacters = useCallback(async () => {
        try {
            setIsLoading(true)
            const { characters, totalItens } = await getCharacters({
                limit: LIMIT_DATA_PER_PAGE,
                offset: page * LIMIT_DATA_PER_PAGE,
                name: search
            });

            setTotalPages(Math.floor(totalItens / LIMIT_DATA_PER_PAGE));
            setCharacters(characters);
        } catch {
            showToast(
                'error',
                'Erro ao carregar os personagens'
            )
        } finally {
            setIsLoading(false)
        }
    }, [page, search])

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters, page]);

    const handleChangePage = (newPage: number) => {
        if(!isAuthenticated()) {
            return navigate('/login')
        }
        setPage(newPage)
    }

    const debounceSearch = useCallback(
        debounce((search: string) => {
            setSearch(search);
            setPage(1);
        }, 500),
        []
    )

    return {
        page,
        totalPages,
        characters,
        isLoading,
        handleChangePage,
        handleSearch: debounceSearch
    }
}

export default useHome