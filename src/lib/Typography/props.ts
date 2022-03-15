import { SpaceProps } from '../Box';
import { TextProps } from '../Text';

export type TypographyScales =
  | 'hero'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p1'
  | 'p1-medium'
  | 'p1-semiBold'
  | 'p2'
  | 'p2-medium'
  | 'p2-semiBold'
  | 'p3'
  | 'p3-medium'
  | 'p3-semiBold'
  | 'caption';

export interface TypographyProps
  extends Omit<
      TextProps,
      'fontSize' | 'lineHeight' | 'fontWeight' | 'textTransform'
    >,
    SpaceProps {
  scale?: TypographyScales;
}
