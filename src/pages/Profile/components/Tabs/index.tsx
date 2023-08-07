import { Container, ContentTabs } from "./styles";
import Tabs from '@mui/material/Tabs';
import useTabs from "./useTabs";
import { Tab } from "@mui/material";

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export const TabsProfile = () => {
    const {
        tabsData,
        selectedTab,
        handleChange
    } = useTabs()

    return (
        <Container>
            <ContentTabs>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    aria-label="Tabs infos profile agent"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#081B4E',
                            height: '3px'
                        }
                    }}
                >
                    {tabsData.map((tab) => (
                        <Tab
                            value={tab.id}
                            key={tab.id}
                            label={tab.label}
                            {...a11yProps(tab.id)}
                            sx={{
                                fontWeight: '500',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#081B4E'
                                }
                            }}
                        />
                    ))}
                </Tabs>
            </ContentTabs>
        </Container>
    )
}