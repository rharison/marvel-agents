import { useNavigate } from "react-router-dom";

const useCardCharacter = () => {
    const navigate = useNavigate();

    const handleCardClick = (characterId: number) => {
            localStorage.setItem('selectedCharacterId', characterId.toString());
            navigate(`/profile?characterId=${characterId}`);
        }

    return {
        handleCardClick
    }
}

export default useCardCharacter