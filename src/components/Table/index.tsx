import React from 'react';
import {
  TableHeader,
  RequestResponseParams,
  GroupParam,
  GroupParamKeyEnum,
  GroupParamLabelEnum,
} from '../../types';
import Accordion from './Accordion';
import { StyledSeparator, StyledTable, TableContainer } from './styles';

interface TableProps {
  rows: RequestResponseParams;
  handleToggle: (
    group: keyof RequestResponseParams,
    fieldName: string,
    key: keyof GroupParam
  ) => void;
}

const Table: React.FC<TableProps> = ({ rows, handleToggle }) => {
  const tableHeaders: TableHeader[] = [
    { label: GroupParamLabelEnum.name, key: GroupParamKeyEnum.name },
    { label: GroupParamLabelEnum.pii, key: GroupParamKeyEnum.pii },
    { label: GroupParamLabelEnum.masked, key: GroupParamKeyEnum.masked },
    { label: GroupParamLabelEnum.type, key: GroupParamKeyEnum.type },
  ];

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th></th>
            {tableHeaders.map((header, index) => (
              <th key={index}>
                <StyledSeparator />
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(rows).map((group, index) => (
            <Accordion
              key={index}
              group={group as keyof RequestResponseParams}
              rows={rows[group as keyof RequestResponseParams]}
              handleToggle={handleToggle}
            />
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
