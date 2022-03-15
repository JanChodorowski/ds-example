import { forwardRef, Ref } from 'react';

import { Text, TextProps } from '../Text';
import { TypographyProps, TypographyScales } from './props';

type ScaleProps = Pick<
  TextProps,
  'fontSize' | 'lineHeight' | 'textTransform' | 'fontWeight'
>;

const switchScaleSettings = (
  scale?: TypographyScales,
): ScaleProps | undefined => {
  const p3: ScaleProps = {
    fontSize: 'p3',
    lineHeight: 'p3',
  };

  const p2: ScaleProps = {
    fontSize: 'p2',
    lineHeight: 'p2',
  };

  const p1: ScaleProps = {
    fontSize: 'p1',
    lineHeight: 'p1',
  };

  switch (scale) {
    case 'caption':
      return {
        fontSize: 'caption',
      };
    case 'p3-semiBold':
      return {
        ...p3,
        fontWeight: 'semiBold',
      };
    case 'p3-medium':
      return {
        ...p3,
        fontWeight: 'medium',
      };
    case 'p3':
      return p3;
    case 'p2-semiBold':
      return {
        ...p2,
        fontWeight: 'semiBold',
      };
    case 'p2-medium':
      return {
        ...p2,
        fontWeight: 'medium',
      };
    case 'p2':
      return p2;
    case 'p1-semiBold':
      return {
        ...p1,
        fontWeight: 'semiBold',
      };
    case 'p1-medium':
      return {
        ...p1,
        fontWeight: 'medium',
      };
    case 'p1':
      return p1;
    case 'h5':
      return {
        fontSize: 'h5',
        lineHeight: 'h5',
        fontWeight: 'medium',
      };
    case 'h4':
      return {
        fontSize: 'h4',
        lineHeight: 'h4',
        fontWeight: 'medium',
      };
    case 'h3':
      return {
        fontSize: 'h3',
        lineHeight: 'h3',
        fontWeight: 'semiBold',
      };
    case 'h2':
      return {
        fontSize: 'h2',
        lineHeight: 'h2',
        fontWeight: 'semiBold',
      };
    case 'h1':
      return {
        fontSize: 'h1',
        lineHeight: 'h1',
        fontWeight: 'semiBold',
      };
    case 'hero':
      return {
        fontSize: 'hero',
        lineHeight: 'hero',
        fontWeight: 'semiBold',
      };
    default:
      return undefined;
  }
};

export const Typography = forwardRef(
  (props: TypographyProps, ref: Ref<HTMLElement>) => {
    const { as, scale, ...rest } = props;

    return <Text ref={ref} as={as} {...switchScaleSettings(scale)} {...rest} />;
  },
);

Typography.defaultProps = {
  scale: 'p2',
  as: 'span',
};
