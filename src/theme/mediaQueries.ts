import { MediaQueries } from './types';
import { breakpoints } from './breakpoints';

const { smartphone, tablet, smallDesktop, desktop, largeDesktop } = breakpoints;

const mediaQueries: MediaQueries = {
  smartphone: `@media screen and (min-width: ${smartphone})`,
  tablet: `@media screen and (min-width: ${tablet})`,
  smallDesktop: `@media screen and (min-width: ${smallDesktop})`,
  desktop: `@media screen and (min-width: ${desktop})`,
  largeDesktop: `@media screen and (min-width: ${largeDesktop})`,
};

export { mediaQueries };
