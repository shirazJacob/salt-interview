import { styled } from '@mui/material';

export const TableContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '6px',
  border: `1px solid ${theme.palette.primary.light}`,
  marginLeft: '20px',
  marginRight: '20px',
}));

export const StyledTable = styled('table')(({ theme }) => ({
  width: '100%',
  borderCollapse: 'collapse',
  tableLayout: 'auto',
  tr: {
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  },
  th: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  'th, td': {
    padding: '10px',
    textAlign: 'left',
  },
}));

export const StyledSeparator = styled('span')(({ theme }) => ({
  transform: 'rotate(90deg)',
  width: '25px',
  height: '0px',
  border: `1px solid ${theme.palette.secondary.main}`,
  marginRight: '21px',
}));
