import { useState } from "react"
import { Tabs } from "./types"


const useTabs = () => {
    const [selectedTab, setSelectedTab] = useState(1)
    const tabsData = [
        {
            id: Tabs.VISAO_GERAL,
            label: 'Visão Geral'
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

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return {
        tabsData,
        selectedTab,
        handleChange
    }

}

export default useTabs

