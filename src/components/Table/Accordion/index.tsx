import React, { useState } from 'react';
import {
  GroupParam,
  GroupParamArray,
  RequestResponseParams,
  TableGroup,
} from '../../../types';
import AccordionRow from '../AccordionRow';
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Icon from '../../Icon';
import { GroupCoulmn } from './styles';

interface AccordionProps {
  group: keyof RequestResponseParams;
  rows: GroupParamArray;
  handleToggle: (
    group: keyof RequestResponseParams,
    fieldName: string,
    key: keyof GroupParam
  ) => void;
}

const Accordion: React.FC<AccordionProps> = ({ handleToggle, group, rows }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <tr>
        <GroupCoulmn onClick={handleToggleAccordion}>
          <Icon icon={isExpanded ? faChevronDown : faChevronRight} />
          {TableGroup[group as keyof typeof TableGroup]}
        </GroupCoulmn>
      </tr>
      {isExpanded &&
        rows &&
        rows.map((row) => (
          <AccordionRow
            key={group + row.name}
            group={group}
            row={row}
            handleToggle={handleToggle}
          />
        ))}
    </>
  );
};

export default Accordion;
