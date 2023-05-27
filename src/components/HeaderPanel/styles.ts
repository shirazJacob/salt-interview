import { Breadcrumbs, styled } from '@mui/material';

export const StyledPath = styled('div')({
  position: 'absolute',
  left: '70px',
  top: '15px',
});

export const StyledIcon = styled('div')({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  left: '20px',
  top: '19px',
  width: '30px',
  height: '30px',
});

export const StyledBreadcrumbs = styled(Breadcrumbs)({
  position: 'absolute',
  left: '70px',
  top: '64px',
});
