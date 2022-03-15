type BreakpointsAliasesKeys =
  | 'smartphone'
  | 'tablet'
  | 'smallDesktop'
  | 'desktop'
  | 'largeDesktop';

type BreakpointsKeys = 'xs' | 's' | 'm' | 'l' | 'xl';

export type Breakpoints = {
  [key in BreakpointsKeys]: string;
} & {
  [key in BreakpointsAliasesKeys]?: string;
};
