import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Button, styled } from '@mui/material';
import Icon from '../Icon';

export const StyledFilterPanel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px 11.5px 23px',
});

export const FilterPanelRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px',
  height: '35px',
  width: '100%',
  gap: '10px',
});

export const SearchContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '90%',
});

export const SearchInputContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '7px',
  paddingLeft: '11px',
  width: '75%',
  background: '#fff',
  height: '100%',
  maxHeight: '35px',
  borderRadius: '6px 0px 0px 6px',
  borderWidth: '1px 0px 1px 1px',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.light,
}));

export const SearchInput = styled('input')({
  width: '100%',
  height: '90%',
  maxHeight: '35px',
  borderRadius: '6px 0px 0px 6px',
  border: 'none',

  '&:focus': {
    outline: 'none',
  },
});

export const SearchCheckBoxContainer = styled('div')(({ theme }) => ({
  border: `1px solid  ${theme.palette.primary.light}`,
  borderRadius: '0px 6px 6px 0px',
  background: '#fff',
  color: theme.palette.grey[300],
  fontWeight: 400,
  fontSize: '14px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  width: '25%',
}));

interface SearchProps {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

export const Search = React.memo(
  ({ handleSearchChange, searchValue }: SearchProps) => {
    return (
      <SearchInputContainer>
        <Icon icon={faMagnifyingGlass} />
        <SearchInput
          id="search-input"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </SearchInputContainer>
    );
  }
);

export const StyledApplyButton = styled(Button)({
  height: '100%',
  width: '10%',
  padding: '10px 15px',
  color: '#fff',
  border: 'none',
});

export const StyledResetButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignSelf: 'flex-end',
  height: '35px',
  width: '10%',
  padding: '10px 15px',
  color: theme.palette.grey[100],
}));
