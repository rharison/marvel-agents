import { useEffect, useState } from "react"
import { getCharacterById } from "../../services/characters";
import { useSearchParams } from "react-router-dom"
import { Character } from "../../types/agent";
import useToast from "../../hooks/useToast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const useProfile = () => {
    const [character, setCharacter] = useState<Character | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()
    const {
        isAuthenticated
    } = useAuth()
    const [searchParams] = useSearchParams();
    const { showToast } = useToast()

    useEffect(() => {
        if(!isAuthenticated()) {
            return navigate('/login')
        }
        getCharacter()
    }, [])

    const getCharacter = async () => {
        try {
            setIsLoading(true)
            const idAgent = searchParams.get('characterId') || localStorage.getItem('selectedCharacterId')
            const character = await getCharacterById(Number(idAgent))
            setCharacter(character)
        } catch {
            showToast(
                'error',
                'Erro ao carregar os dados do personagem'
            )
        } finally {
            setIsLoading(false)
        }
    }

    return {
        character,
        isLoading
    }
}

export default useProfile