import { Character } from "../../../../types/agent";

export enum Tabs {
    VISAO_GERAL = 1,
    EVENTS = 2,
    COMICS = 3,
    SERIES = 4,
    STORIES = 5,
}

export type TabsProfileProps = {
    character: Character;
}
