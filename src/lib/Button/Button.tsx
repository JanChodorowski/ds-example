import { Ref, forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { Typography } from '../Typography';
import { setTransition } from '../../tools';
import { Space } from '../../theme/types';
import { ButtonProps } from './props';
import {
  defaultProps,
  switchStyles,
  swithHeight,
  swithTypographyProps,
} from './helpers';

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLElement>) => {
    const { label, size, as, ...rest } = props;

    return (
      <ButtonContainer
        ref={ref}
        forwardedAs={as}
        size={size}
        {...swithTypographyProps(size)}
        {...rest}
      >
        {label}
      </ButtonContainer>
    );
  },
);

Button.defaultProps = defaultProps;

export const ButtonContainer = styled(Typography).attrs({
  textAlign: 'center',
  borderRadius: 'none',
})<Omit<ButtonProps, 'label'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  border: 0;
  cursor: pointer;
  appearance: none;
  white-space: nowrap;

  ${setTransition(['background-color', 'color'], 'productive')};

  &::before,
  &::after {
    white-space: pre;
  }

  ${({ theme: { space, colors }, size, variant, emphasis, px = 's000' }) => css`
    height: ${swithHeight(size, space)};

    ${switchStyles(variant, emphasis, colors, space[px as keyof Space])};

    &:focus {
      outline: none;
    }
  `};
`;
