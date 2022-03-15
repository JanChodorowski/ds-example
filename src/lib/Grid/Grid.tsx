import { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { grid } from 'styled-system';

import { Box } from '../Box';
import { GridProps } from './props';

export const Grid = forwardRef((props: GridProps, ref: Ref<HTMLElement>) => {
  const { as, ...rest } = props;
  return <StyledGrid ref={ref} forwardedAs={as} {...rest} />;
});

Grid.defaultProps = {
  as: 'div',
};

const StyledGrid = styled(Box)<GridProps>`
  display: grid;
  ${grid};
`;
