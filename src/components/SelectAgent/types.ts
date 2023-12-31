import { Character } from "../../types/agent";

export type SelectAgentProps = {
    characters: Character[];
    callbackSelectedAgent: (characterId: number) => void;
}