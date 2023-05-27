import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)({
  width: 'auto',
  minWidth: 0,
  padding: '2px 10px',
  height: '25px',
});

export const StyledType = styled(StyledButton)({
  color: '#0F3899',
  background: '#CCF3FC',
  pointerEvents: 'none',
  boxShadow: 'none',
});
