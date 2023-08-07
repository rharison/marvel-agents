import { Character } from "../types/agent";
import { axiosInstance } from "./axios";

type GetCharactersParams = {
    limit?: number;
    offset?: number;
    name?: string;
}

type Response = {
    characters: Character[];
    totalItens: number;
}

export const getCharacters = async ({ limit, offset, name }: GetCharactersParams): Promise<Response> => {
    const { data } = await axiosInstance.get('/v1/public/characters', {
        params: {
            limit,
            offset,
            ...(name && { nameStartsWith: name })
        }
    });

    const response = {
        characters: data.data.results,
        totalItens: data.data.total,
    }

    return response
}