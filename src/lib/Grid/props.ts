import { GridProps as SystemGridProps } from 'styled-system';

import { BoxProps, ResponsiveSpaceType } from '../Box';

export interface GridProps
  extends Omit<SystemGridProps, 'gridGap' | 'gridColumnGap' | 'gridRowGap'>,
    BoxProps {
  gridGap?: ResponsiveSpaceType;
  gridColumnGap?: ResponsiveSpaceType;
  gridRowGap?: ResponsiveSpaceType;
}
