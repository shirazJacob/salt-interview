import { Typography } from '@mui/material';
import React from 'react';
import { StyledPath, StyledIcon, StyledBreadcrumbs } from './styles';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';

interface HeaderPanelProps {
  method: string;
  apiName: string;
  path: string;
}

const AllAPIS = 'All APIS';

const HeaderPanel: React.FC<HeaderPanelProps> = ({ method, apiName, path }) => {
  const breadcrumbs = [
    <Typography key={AllAPIS} variant="subtitle2">
      {AllAPIS}
    </Typography>,
    <Typography key={apiName} variant="subtitle2">
      {apiName}
    </Typography>,
    <Typography key={method} variant="subtitle1">
      {path}
    </Typography>,
  ];

  return (
    <div>
      <StyledIcon>
        <Icon icon={faChevronLeft} />
      </StyledIcon>
      <StyledPath>
        <Typography variant="h1">
          {method.toUpperCase()} {path}
        </Typography>
      </StyledPath>

      <StyledBreadcrumbs separator={<Icon icon={faChevronRight} />}>
        {breadcrumbs}
      </StyledBreadcrumbs>
    </div>
  );
};

export default HeaderPanel;
