import { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { flexbox } from 'styled-system';

import { Box } from '../Box';
import { FlexProps } from './props';

export const Flex = forwardRef((props: FlexProps, ref: Ref<HTMLElement>) => {
  const { as, ...rest } = props;
  return <StyledFlex ref={ref} forwardedAs={as} {...rest} />;
});

Flex.defaultProps = {
  as: 'div',
};

const StyledFlex = styled(Box)<FlexProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${flexbox};
`;
