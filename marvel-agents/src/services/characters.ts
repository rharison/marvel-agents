import { Character } from "../types/agent";
import { axiosInstance } from "./axios";

type GetCharactersParams = {
    limit?: number;
    offset?: number;
}

export const getCharacters = async ({ limit, offset }: GetCharactersParams): Promise<Character[]> => {
    const { data } = await axiosInstance.get('/v1/public/characters', {
        params: {
            limit,
            offset
        }
    });

    return data.data.results;
}