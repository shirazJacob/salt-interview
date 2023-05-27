import React, { useContext } from 'react';
import { RouteDetailsContext } from '../../contexts/routeDetailsContext';
import { RouteTabs, TabInput } from '../../types';
import HeaderPanel from '../HeaderPanel';
import TabPanel from '../TabPanel';
import Tabs from '../Tabs';

const RouteDetails: React.FC = () => {
  const { routeDetails } = useContext(RouteDetailsContext);
  const requestContent: JSX.Element = <TabPanel tab={RouteTabs.request} />;
  const responseContent: JSX.Element = <TabPanel tab={RouteTabs.response} />;

  const tabs: TabInput[] = [
    {
      title: RouteTabs.request,
      panelContent: requestContent,
    },
    {
      title: RouteTabs.response,
      panelContent: responseContent,
    },
  ];
  return (
    <>
      {routeDetails && (
        <>
          <HeaderPanel
            method={routeDetails.method}
            apiName={routeDetails.api}
            path={routeDetails.path}
          />
          <Tabs tabs={tabs} />
        </>
      )}
    </>
  );
};

export default RouteDetails;
