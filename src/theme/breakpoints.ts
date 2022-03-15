import { Breakpoints } from './types';

const breakpoints: Breakpoints = {
  xs: '0px', // smartphones
  s: '768px', // tablets
  m: '1024px', // small desktop
  l: '1280px', // desktop
  xl: '1440px', // large desktop
};

breakpoints.smartphone = breakpoints.xs;
breakpoints.tablet = breakpoints.s;
breakpoints.smallDesktop = breakpoints.m;
breakpoints.desktop = breakpoints.l;
breakpoints.largeDesktop = breakpoints.xl;

export { breakpoints };
