type LineHeightsAliases =
  | 'caption'
  | 'p3'
  | 'p2'
  | 'p1'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1'
  | 'hero';

export type LineHeights = {
  [key in LineHeightsAliases]: string;
};
