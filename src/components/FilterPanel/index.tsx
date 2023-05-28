import React, { useState, useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { RouteFilters } from '../../types';
import {
  FilterPanelRow,
  Search,
  SearchCheckBoxContainer,
  SearchContainer,
  StyledApplyButton,
  StyledFilterPanel,
  StyledResetButton,
} from './styles';

interface FilterPanelProps {
  onResetFilter: () => void;
  onApplyFilter: (filters: RouteFilters) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  onResetFilter,
  onApplyFilter,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [piiChecked, setPIIChecked] = useState(false);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    []
  );

  const handlePIICheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPIIChecked(event.target.checked);
    },
    []
  );

  const handleResetFilter = useCallback(() => {
    setSearchValue('');
    setPIIChecked(false);
    onResetFilter();
  }, [onResetFilter]);

  const handleApplyFilter = useCallback(() => {
    if (searchValue) {
      onApplyFilter({
        searchValue: searchValue,
        piiChecked: piiChecked,
      });
    }
  }, [onApplyFilter, piiChecked, searchValue]);

  return (
    <StyledFilterPanel>
      <FilterPanelRow>
        <SearchContainer>
          <Search
            handleSearchChange={handleSearchChange}
            searchValue={searchValue}
          />
          <SearchCheckBoxContainer>
            <Checkbox checked={piiChecked} onChange={handlePIICheckboxChange} />
            Show PII Only
          </SearchCheckBoxContainer>
        </SearchContainer>
        <StyledApplyButton variant="contained" onClick={handleApplyFilter}>
          Apply Filter
        </StyledApplyButton>
      </FilterPanelRow>
      <StyledResetButton variant="text" onClick={handleResetFilter}>
        Reset Filter
      </StyledResetButton>
    </StyledFilterPanel>
  );
};

export default React.memo(FilterPanel);
