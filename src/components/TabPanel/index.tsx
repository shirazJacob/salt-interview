import React, { useState, useEffect, useCallback, useContext } from 'react';
import { RouteDetailsContext } from '../../contexts/routeDetailsContext';
import {
  Filters,
  GroupParam,
  GroupParamKeyEnum,
  RequestResponseParams,
  RouteDetails,
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
  const { filteredData, setFilters, routeDetails, updateRoute } =
    useContext(RouteDetailsContext);
  // const [requestResponseData, setRequestResponseData] =
  //   useState<RequestResponseParams>();
  // const [filteredRequestResponse, setFilteredData] =
  //   useState<RequestResponseParams>();

  // const getRequestResponseData = useCallback(() => {
  //   let requestResponseData: RequestResponseParams | undefined;
  //   if (routeDetails) {
  //     switch (tab) {
  //       case RouteTabs.request: {
  //         requestResponseData = routeDetails.request;
  //         break;
  //       }
  //       case RouteTabs.response: {
  //         requestResponseData = routeDetails.response;
  //         break;
  //       }
  //       default: {
  //         break;
  //       }
  //     }
  //   }
  //   setFilteredData(filteredRequestResponse);
  //   return requestResponseData;
  // }, [routeDetails, tab]);

  // useEffect(() => {
  //   let requestResponseData = getRequestResponseData();
  //   if (requestResponseData) {
  //     setFilteredData(requestResponseData);
  //   }
  // }, [getRequestResponseData]);

  const handleApplyFilter = useCallback(
    (filters: RouteFilters) => {
      setFilters({ filters: filters, tab: tab });
      // const searchValue = filters.searchValue.replace(/\s/g, '').toLowerCase();
      // const requestResponseData = getRequestResponseData();
      // if (requestResponseData) {
      //   let filteredObj: RequestResponseParams = { ...requestResponseData };
      //   let filteredArray = Object.entries(requestResponseData);

      //   filteredArray.forEach(([group, arrParams]) => {
      //     const filteredValue = arrParams.filter(
      //       (param: GroupParam) =>
      //         (param.name === searchValue || param.type === searchValue) &&
      //         (filters.piiChecked ? param.pii : true)
      //     );
      //     filteredObj[group as keyof RequestResponseParams] = filteredValue;
      //   });

      //   setFilteredData(filteredObj);
      // }
    },
    [setFilters, tab]
  );

  const handleToggle = useCallback(
    (
      group: keyof RequestResponseParams,
      fieldName: string,
      key: keyof GroupParam
    ) => {
      if (routeDetails) {
        const updateData = routeDetails[tab];
        if (updateData) {
          const groupParams = updateData[group];
          if (groupParams) {
            let updatedField = groupParams.find(
              (field) => field.name === fieldName
            );
            if (updatedField) {
              if (
                key === GroupParamKeyEnum.pii ||
                key === GroupParamKeyEnum.masked
              ) {
                updatedField[key] = !updatedField[key];
              }

              let updatedRouteDetails = {
                ...routeDetails,
                [tab]: updateData,
              };

              updateRoute(updatedRouteDetails as RouteDetails);

              //   if (filteredData) {
              //     let updatedFilteredGroupData = filteredData[group]?.map(
              //       (field: GroupParam) => {
              //         if (field.name === fieldName) {
              //           return {
              //             ...field,
              //             [key]: !field[key],
              //           };
              //         }
              //         return field;
              //       }
              //     );
              //     let updatedFilteredData = {
              //       ...filteredData,
              //       [group]: updatedFilteredGroupData,
              //     };

              //     setFilteredData(updatedFilteredData as RequestResponseParams);
              //   }
            }
          }
        }
      }
    },
    [routeDetails, tab, updateRoute]
  );

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
