/**
 * Function add multiple transition property value
 */

import { CSSProp, css } from 'styled-components';
import { motion as themeMotion } from '../theme';
import { Motion } from '../theme/types';

const setValues = (values: string[], motion: keyof Motion): string =>
  values.map((v) => `${v} ${themeMotion[motion]}`).join(',');

export const setTransition = (
  value: string | string[],
  motion: keyof Motion,
): CSSProp => {
  if (typeof value === 'object') {
    return css`
      transition: ${setValues(value, motion)};
    `;
  }

  return css`
    transition: ${value} ${motion};
  `;
};
