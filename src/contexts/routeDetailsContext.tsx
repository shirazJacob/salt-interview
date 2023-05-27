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
  RequestResponseParams,
  RouteDetails,
  RouteTabs,
} from '../types';
import routeDetailsData from '../data/fe_data.json';

interface RouteDetailsContextProps {
  routeDetails: RouteDetails | null;
  updateRoute: (newRoute: RouteDetails) => void;
  filteredData: RouteDetails | null;
  filters: Filters | null;
  setFilters: (filters: Filters) => void;
}

export const RouteDetailsContext = createContext<RouteDetailsContextProps>({
  routeDetails: null,
  updateRoute: () => {},
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
        const requestResponseData = routeDetails[filters.tab];
        if (requestResponseData) {
          let filteredObj: RequestResponseParams = { ...requestResponseData };
          let filteredArray = Object.entries(requestResponseData);

          filteredArray.forEach(([group, arrParams]) => {
            const filteredValue = arrParams.filter(
              (param: GroupParam) =>
                (param.name === searchValue || param.type === searchValue) &&
                (filters.filters.piiChecked ? param.pii : true)
            );
            filteredObj[group as keyof RequestResponseParams] = filteredValue;
          });

          setFilteredData({ ...routeDetails, [filters.tab]: filteredObj });
        }
      }
    }
  }, [filters, routeDetails]);

  useEffect(() => {
    fetchData();
    filterRouteDetails();
  }, [filterRouteDetails, filters]);

  const fetchData = () => {
    let jsonData: RouteDetails = routeDetailsData;
    setRouteDetails(jsonData);
    setFilteredData(jsonData);
  };

  const updateRoute = (newData: RouteDetails) => {
    setRouteDetails(newData);
  };

  const contextValue: RouteDetailsContextProps = {
    routeDetails,
    updateRoute,
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
