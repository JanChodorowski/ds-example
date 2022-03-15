import { Breakpoints } from "./breakpoints";
import { Colors } from "./colors";
import { FontSizes } from "./fontSizes";
import { FontWeights } from "./fontWeights";
import { LineHeights } from "./lineHeights";
import { MediaQueries } from "./mediaQueries";
import { Motion } from "./motion";
import { Radii } from "./radii";
import { Space } from "./space";

export interface Theme {
  breakpoints: Breakpoints;
  colors: Colors;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  mediaQueries: MediaQueries;
  motion: Motion;
  radii: Radii;
  space: Space;
}
