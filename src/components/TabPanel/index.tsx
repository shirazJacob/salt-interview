import React, { useCallback, useContext } from 'react';
import { RouteDetailsContext } from '../../contexts/routeDetailsContext';
import {
  GroupParam,
  RequestResponseParams,
  RouteFilters,
  RouteTabs,
} from '../../types';
import FilterPanel from '../FilterPanel';
import Table from '../Table';
import { StyledTabPanel } from './styles';

interface TabPanelProps {
  tab: RouteTabs;
}

const TabPanel: React.FC<TabPanelProps> = ({ tab }) => {
  const { filteredData, setFilters, updateRouteDetails } =
    useContext(RouteDetailsContext);

  const handleApplyFilter = useCallback(
    (filters: RouteFilters) => {
      setFilters({ filters: filters, tab: tab });
    },
    [setFilters, tab]
  );

  const handleToggle = (
    group: keyof RequestResponseParams,
    fieldName: string,
    key: keyof GroupParam
  ) => {
    updateRouteDetails(group, fieldName, key, tab);
  };

  const handleResetFilter = useCallback(() => {
    setFilters({ filters: { searchValue: '', piiChecked: false }, tab: tab });
  }, [setFilters, tab]);

  return (
    <StyledTabPanel>
      <FilterPanel
        onApplyFilter={handleApplyFilter}
        onResetFilter={handleResetFilter}
      />
      {filteredData && (
        <Table rows={filteredData[tab]} handleToggle={handleToggle} />
      )}
    </StyledTabPanel>
  );
};

export default TabPanel;
