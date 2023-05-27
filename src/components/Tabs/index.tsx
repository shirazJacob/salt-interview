import React, { useState } from 'react';
import { Tabs as MuiTabs, Tab } from '@mui/material';
import { TabInput } from '../../types';
import { StyledTabsBar } from './styles';

interface TabsProps {
  tabs: TabInput[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <StyledTabsBar>
      <MuiTabs value={activeTab} onChange={handleChangeTab}>
        {tabs.map((tab) => (
          <Tab label={tab.title} key={tab.title} />
        ))}
      </MuiTabs>

      {tabs[activeTab].panelContent}
    </StyledTabsBar>
  );
};

export default Tabs;
