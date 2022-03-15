import { css, CSSProp } from 'styled-components';

import { TypographyProps } from '../Typography';
import { Space, Colors } from '../../theme/types';
import { ButtonProps } from './props';

export const defaultProps: Required<
  Pick<ButtonProps, 'as' | 'variant' | 'emphasis' | 'size'>
> = {
  as: 'button',
  variant: 'primary',
  emphasis: 'default',
  size: 'm',
};

export const swithTypographyProps = (
  size = defaultProps.size,
): Pick<TypographyProps, 'px' | 'scale'> => {
  switch (size) {
    case 's':
      return { px: 's200', scale: 'p3-semiBold' };
    case 'm':
      return { px: 's225', scale: 'p2-semiBold' };
    case 'l':
      return { px: 's250', scale: 'p1-semiBold' };
    default:
      return { px: 's000' };
  }
};

export const swithHeight = (size = defaultProps.size, space: Space) => {
  switch (size) {
    case 's':
      return space.s325;
    case 'm':
      return space.s350;
    case 'l':
      return space.s375;
    default:
      return 'auto';
  }
};

export const switchStyles = (
  variant = defaultProps.variant,
  emphasis = defaultProps.emphasis,
  colors: Colors,
  pxValue: Space[keyof Space],
): CSSProp => {
  const borderWidth = '2px';

  const defaultDisabledStyles = css`
    &:disabled {
      pointer-events: none;

      ${variant === 'primary'
        ? css`
            background-color: ${colors.defaultAdd5};
            color: ${colors.defaultAdd2};
          `
        : css`
            border-color: ${colors.defaultAdd5};
            color: ${colors.defaultAdd3};
          `}
    }
  `;

  const borderedButton = css`
    border: ${borderWidth} solid currentColor;
    background-color: ${colors.white};
    padding: 0 calc(${pxValue} - ${borderWidth});
  `;

  let colorStyles: CSSProp = '';

  switch (emphasis) {
    case 'default':
      if (variant === 'primary') {
        colorStyles = css`
          background-color: ${colors.default};
          color: ${colors.white};

          &:focus,
          &:hover {
            background-color: ${colors.defaultAdd1};
          }

          &:active {
            background-color: ${colors.defaultAdd2};
          }
        `;
      }

      if (variant === 'secondary') {
        colorStyles = css`
          color: ${colors.default};

          &:focus,
          &:hover {
            color: ${colors.defaultAdd2};
          }

          &:active {
            background-color: ${colors.defaultAdd6};
            color: ${colors.default};
          }
        `;
      }
      break;
    case 'white':
      if (variant === 'primary') {
        colorStyles = css`
          background-color: ${colors.white};
          color: ${colors.default};

          &:focus,
          &:hover {
            color: ${colors.defaultAdd2};
          }

          &:active {
            background-color: ${colors.defaultAdd5};
            color: ${colors.default};
          }

          &:disabled {
            background-color: ${colors.defaultAdd2};
            color: ${colors.defaultAdd4};
          }
        `;
      }

      if (variant === 'secondary') {
        colorStyles = css`
          background-color: transparent;
          border-color: ${colors.white};
          color: ${colors.white};

          &:focus,
          &:hover {
            background-color: ${colors.whiteAlpha12};
          }

          &:active {
            background-color: ${colors.whiteAlpha16};
          }

          &:disabled {
            background-color: transparent;
            border-color: ${colors.whiteAlpha32};
            color: ${colors.whiteAlpha40};
          }
        `;
      }
      break;
    case 'primary':
      if (variant === 'primary') {
        colorStyles = css`
          background-color: ${colors.primary};
          color: ${colors.white};

          &:focus,
          &:hover {
            background-color: ${colors.primaryAdd1};
          }

          &:active {
            background-color: ${colors.primarySub2};
          }
        `;
      }

      if (variant === 'secondary') {
        colorStyles = css`
          color: ${colors.primary};

          &:focus,
          &:hover {
            color: ${colors.primaryAdd1};
          }

          &:active {
            background-color: ${colors.defaultAdd6};
            color: ${colors.primarySub2};
          }
        `;
      }

      break;
    case 'accent':
      if (variant === 'primary') {
        colorStyles = css`
          background-color: ${colors.accent};
          color: ${colors.white};

          &:focus,
          &:hover {
            background-color: ${colors.accentAdd1};
          }

          &:active {
            background-color: ${colors.accentSub2};
          }
        `;
      }

      if (variant === 'secondary') {
        colorStyles = css`
          color: ${colors.accent};

          &:focus,
          &:hover {
            color: ${colors.accentAdd2};
          }

          &:active {
            background-color: ${colors.defaultAdd6};
            color: ${colors.accentSub2};
          }
        `;
      }
      break;

    default:
      break;
  }

  return css`
    ${defaultDisabledStyles}
    ${variant === 'secondary' && borderedButton};
    ${colorStyles};
  `;
};
