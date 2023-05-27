import React, { useState } from 'react';
import {
  GroupParam,
  GroupParamKeyEnum,
  RequestResponseParams,
} from '../../../types';
import { StyledButton, StyledType } from './styles';

interface AccordionRowProps {
  row: GroupParam;
  group: keyof RequestResponseParams;
  handleToggle: (
    group: keyof RequestResponseParams,
    fieldName: string,
    key: keyof GroupParam
  ) => void;
}

const AccordionRow: React.FC<AccordionRowProps> = ({
  handleToggle,
  group,
  row,
}) => {
  const [isPII, setIsPII] = useState(row.pii);
  const [isMasked, setIsMasked] = useState(row.masked);

  const handlePIIClick = () => {
    setIsPII((prevIsPII) => !prevIsPII);
    handleToggle(group, row.name, GroupParamKeyEnum.pii);
  };

  const handleMaskedClick = () => {
    setIsMasked((prevIsMasked) => !prevIsMasked);
    handleToggle(group, row.name, GroupParamKeyEnum.masked);
  };

  return (
    <tr>
      <td></td>
      <td>{row.name}</td>
      <td>
        <StyledButton
          variant={isPII ? 'contained' : 'outlined'}
          onClick={handlePIIClick}
        >
          PII
        </StyledButton>
      </td>
      <td>
        <StyledButton
          variant={isMasked ? 'contained' : 'outlined'}
          color="info"
          onClick={handleMaskedClick}
        >
          Masked
        </StyledButton>
      </td>
      <td>
        <StyledType variant="contained">{row.type}</StyledType>
      </td>
    </tr>
  );
};

export default AccordionRow;
