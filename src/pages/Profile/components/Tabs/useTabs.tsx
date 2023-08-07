import { useState } from "react"
import { Tabs } from "./types"
import { VisaoGeral } from "../VisaoGeral"
import { Character } from "../../../../types/agent"

const useTabs = (character: Character) => {
    const [selectedTab, setSelectedTab] = useState(1)

    const tabsData = [
        {
            id: Tabs.VISAO_GERAL,
            label: 'Visão Geral',
        },
        {
            id: Tabs.TEAMS,
            label: 'Teams'
        },
        {
            id: Tabs.POWERS,
            label: 'Powers'
        },
        {
            id: Tabs.SPECIES,
            label: 'Species'
        },
        {
            id: Tabs.AUTHORS,
            label: 'Authors'
        }
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
            case Tabs.TEAMS:
                return (
                    <>
                        teams
                    </>
                )
            case Tabs.POWERS:
                return (
                    <>
                        powers
                    </>
                )
            case Tabs.SPECIES:
                return (
                    <>
                        species
                    </>
                )
            case Tabs.AUTHORS:
                return (
                    <>
                        authors
                    </>
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

