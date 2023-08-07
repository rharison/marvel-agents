import { Character } from "../../../../types/agent";

export enum Tabs {
    VISAO_GERAL = 1,
    TEAMS = 2,
    POWERS = 3,
    SPECIES = 4,
    AUTHORS = 5,
}

export type TabsProfileProps = {
    character: Character;
}