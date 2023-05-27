import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from 'react';
import {
  Filters,
  GroupParam,
  GroupParamKeyEnum,
  RequestResponseParams,
  RouteDetails,
  RouteTabs,
} from '../types';
import routeDetailsData from '../data/fe_data.json';

interface RouteDetailsContextProps {
  routeDetails: RouteDetails | null;
  updateRouteDetails: (
    group: keyof RequestResponseParams,
    fieldName: string,
    key: keyof GroupParam,
    tab: RouteTabs
  ) => void;
  filteredData: RouteDetails | null;
  filters: Filters | null;
  setFilters: (filters: Filters) => void;
}

export const RouteDetailsContext = createContext<RouteDetailsContextProps>({
  routeDetails: null,
  updateRouteDetails: () => {},
  filteredData: null,
  filters: null,
  setFilters: () => {},
});

export const RouteDetailsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [routeDetails, setRouteDetails] = useState<RouteDetails | null>(null);
  const [filteredData, setFilteredData] = useState<RouteDetails | null>(null);
  const [filters, setFilters] = useState<Filters | null>(null);

  const fetchData = () => {
    let jsonData: RouteDetails = routeDetailsData;
    setRouteDetails(jsonData);
    setFilteredData(jsonData);
  };

  const filterRouteDetails = useCallback(() => {
    if (filters && routeDetails) {
      const searchValue = filters.filters.searchValue
        .replace(/\s/g, '')
        .toLowerCase();
      if (
        searchValue &&
        (filters.tab === RouteTabs.request ||
          filters.tab === RouteTabs.response)
      ) {
        const requestResponseData = { ...routeDetails[filters.tab] };
        if (requestResponseData) {
          let filteredObj: RequestResponseParams = { ...requestResponseData };
          let filteredArray = Object.entries(requestResponseData);

          filteredArray.forEach(([group, arrParams]) => {
            const filteredValue = arrParams?.filter(
              (param: GroupParam) =>
                (param.name === searchValue || param.type === searchValue) &&
                (filters.filters.piiChecked ? param.pii : true)
            );
            filteredObj[group as keyof RequestResponseParams] = filteredValue;
          });

          setFilteredData({ ...routeDetails, [filters.tab]: filteredObj });
        }
      } else {
        setFilteredData(routeDetails);
      }
    }
  }, [filters, routeDetails]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterRouteDetails();
  }, [filterRouteDetails]);

  const updateRouteDetails = useCallback(
    (
      group: keyof RequestResponseParams,
      fieldName: string,
      key: keyof GroupParam,
      tab: RouteTabs
    ) => {
      if (routeDetails) {
        const updateData = { ...routeDetails[tab] };
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

              let updatedRouteDetails: RouteDetails = {
                ...routeDetails,
                [tab]: updateData,
              };

              setRouteDetails(updatedRouteDetails);
            }
          }
        }
      }
    },
    [routeDetails]
  );

  const contextValue: RouteDetailsContextProps = {
    routeDetails,
    updateRouteDetails,
    filteredData,
    filters,
    setFilters,
  };

  if (!routeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <RouteDetailsContext.Provider value={contextValue}>
      {children}
    </RouteDetailsContext.Provider>
  );
};
