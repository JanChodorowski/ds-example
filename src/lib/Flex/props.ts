import { FlexboxProps } from 'styled-system';

import { BoxProps } from '../Box';

export interface FlexProps extends FlexboxProps, BoxProps {
  inline?: boolean;
}
