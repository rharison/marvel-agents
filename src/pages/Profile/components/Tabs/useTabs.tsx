import { useState } from "react"
import { Tabs } from "./types"
import { VisaoGeral } from "../VisaoGeral"
import { Character } from "../../../../types/agent"
import { List } from "../List"
import { convertInStringArray } from "../../../../utils/infoCharacter"

const useTabs = (character: Character) => {
    const [selectedTab, setSelectedTab] = useState(1)

    const tabsData = [
        {
            id: Tabs.VISAO_GERAL,
            label: 'Visão Geral',
        },
        ...(character.comics.available > 0
            ? [{
                id: Tabs.COMICS,
                label: 'Comics'
            }]
            : []
        ),
        ...(character.events.available > 0
            ? [{
                id: Tabs.EVENTS,
                label: 'Events'
            }]
            : []
        ),
        ...(character.series.available > 0
            ? [{
                id: Tabs.SERIES,
                label: 'Series'
            }]
            : []
        ),
        ...(character.stories.available > 0
            ? [{
                id: Tabs.STORIES,
                label: 'Stories'
            }]
            : []
        ),
    ]

    const renderContentByTab = (tabId: number) => {
        switch (tabId) {
            case Tabs.VISAO_GERAL:
                return (
                    <VisaoGeral
                        name={character.name}
                        description={character.description}
                        urlImage={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    />
                )
            case Tabs.COMICS:
                return (
                    <List
                        itens={convertInStringArray(character.comics.items)}
                    />
                )
            case Tabs.EVENTS:
                return (
                    <List
                        itens={convertInStringArray(character.events.items)}
                    />
                )
            case Tabs.SERIES:
                return (
                    <List
                        itens={convertInStringArray(character.series.items)}
                    />
                )
            case Tabs.STORIES:
                return (
                    <List
                        itens={convertInStringArray(character.stories.items)}
                    />
                )
            default:
                return (
                    <>
                    </>
                )
        }
    }

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return {
        tabsData,
        selectedTab,
        handleChange,
        a11yProps,
        renderContentByTab
    }

}

export default useTabs

