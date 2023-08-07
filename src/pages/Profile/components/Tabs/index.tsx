import { Container, ContainerTabPanel, ContentTabs, stylesTab, stylesTabIndicator } from "./styles";
import Tabs from '@mui/material/Tabs';
import useTabs from "./useTabs";
import { Tab } from "@mui/material";
import { TabsProfileProps } from "./types";

export const TabsProfile = ({ character }: TabsProfileProps) => {
    const {
        tabsData,
        selectedTab,
        handleChange,
        a11yProps,
        renderContentByTab
    } = useTabs(character)

    return (
        <Container>
            <ContentTabs>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    aria-label="Tabs infos profile agent"
                    TabIndicatorProps={stylesTabIndicator}
                >
                    {tabsData.map((tab) => (
                        <Tab
                            value={tab.id}
                            key={tab.id}
                            label={tab.label}
                            {...a11yProps(tab.id)}
                            sx={stylesTab}
                        />
                    ))}
                </Tabs>
            </ContentTabs>
            <ContainerTabPanel>
                {renderContentByTab(selectedTab)}
            </ContainerTabPanel>
        </Container>
    )
}