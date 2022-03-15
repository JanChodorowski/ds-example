/**
 * Function add media queries to styled-components component
 *
 * const Content = styled(Box).attrs({ backgroundColor: 'gray300' })`
 *  max-height: 96%;
 *  position: relative;
 *
 *  ${mediaQueryProp('width', {
 *    xs: '100%',
 *    m: '66.0416666%',
 *  })};
 * `;
 */

import { css, CSSProp } from 'styled-components';

import { breakpoints as themeBreakpoints } from '../theme';
import { Breakpoints } from '../theme/types';

type BreakpointsObject = {
  [key in keyof Breakpoints]?: string | number;
};

export const mediaQueryProp = (
  prop: string,
  bp: BreakpointsObject,
): CSSProp => {
  let mq = '';
  let key: keyof BreakpointsObject;

  for (key in bp) {
    if ({}.hasOwnProperty.call(bp, key)) {
      const width = themeBreakpoints[key];
      const value = bp[key];

      mq += `
        @media screen and (min-width: ${width}) {
          ${prop}: ${!value ? 'unset' : value};
        }
      `;
    }
  }

  return css`
    ${mq}
  `;
};

const queryMax = (bp: keyof Breakpoints): string => {
  const value = themeBreakpoints[bp];

  if (!value) {
    throw new Error(`${bp} - this key doesn't exist in definied breakpoints`);
  }

  return `${+value.replace(/[^0-9]/g, '') - 1}px`;
};

export const mediaQuery = (
  bp: keyof Breakpoints | [keyof Breakpoints, keyof Breakpoints],
  styles: string | CSSProp | CSSProp,
): CSSProp => {
  if (Array.isArray(bp)) {
    return css`
      @media screen and (min-width: ${themeBreakpoints[
    bp[0]
  ]}) and (max-width: ${queryMax(bp[1])}) {
        ${styles};
      }
    `;
  }

  return css`
    @media screen and (min-width: ${themeBreakpoints[bp]}) {
      ${styles};
    }
  `;
};

export const smartphone = (styles: string | CSSProp): CSSProp =>
  mediaQuery(['xs', 's'], styles);
export const tablet = (styles: string | CSSProp): CSSProp =>
  mediaQuery(['s', 'm'], styles);
export const smallDesktop = (styles: string | CSSProp): CSSProp =>
  mediaQuery(['m', 'l'], styles);
export const desktop = (styles: string | CSSProp): CSSProp =>
  mediaQuery(['l', 'xl'], styles);
export const largeDesktop = (styles: string | CSSProp): CSSProp =>
  mediaQuery('xl', styles);
