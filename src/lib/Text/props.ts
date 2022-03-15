import { TextAlignProps } from 'styled-system';

import { FontSizes, FontWeights, LineHeights } from '../../theme/types';
import { BoxProps, ResponsiveValue } from '../Box';

export interface TextProps extends TextAlignProps, BoxProps {
  fontSize?: ResponsiveValue<FontSizes>;
  fontWeight?: ResponsiveValue<FontWeights>;
  fontStyle?: 'normal' | 'italic';
  lineHeight?: ResponsiveValue<LineHeights>;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  textDecoration?: 'line-through' | 'underline' | 'none';
  before?: string;
  after?: string;
}
