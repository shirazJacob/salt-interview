import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material';

export const StyledIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

interface Props {
  icon: IconProp;
}

const Icon: React.FC<Props> = ({ icon }) => {
  return <StyledIcon icon={icon} />;
};

export default Icon;
