import {
  AriaAttributes,
  CSSProperties,
  DOMAttributes,
  ComponentType,
} from "react";
import { IntrinsicElementsKeys } from "styled-components";
import {
  MarginProps as SystemMarginProps,
  PaddingProps as SystemPaddingProps,
  SpaceProps as SystemSpaceProps,
  BackgroundColorProps as SystemBackgroundColorProps,
  TextColorProps as SystemTextColorProps,
  BorderRadiusProps as SystemBorderRadiusProps,
} from "styled-system";

import { Colors, Radii, Space, Breakpoints } from "../../theme/types";

export type ResponsiveValue<T> =
  | keyof T
  | { [key in keyof Breakpoints]?: keyof T };

export type HTMLTag = IntrinsicElementsKeys;

export type ResponsiveColorsType = ResponsiveValue<Colors>;
export type ResponsiveSpaceType = ResponsiveValue<Space>;

export type BackgroundColorProps = {
  [key in keyof SystemBackgroundColorProps]?: ResponsiveColorsType;
};

export type TextColorProps = {
  [key in keyof SystemTextColorProps]?: ResponsiveColorsType;
};

export type MarginProps = {
  [key in keyof SystemMarginProps]?: ResponsiveSpaceType;
};

export type PaddingProps = {
  [key in keyof SystemPaddingProps]?: ResponsiveSpaceType;
};

export type SpaceProps = {
  [key in keyof SystemSpaceProps]?: ResponsiveSpaceType;
};

export type BorderRadiusProps = {
  [key in keyof SystemBorderRadiusProps]?: ResponsiveValue<Radii>;
};

export interface BoxProps
  extends BackgroundColorProps,
    TextColorProps,
    SpaceProps,
    BorderRadiusProps,
    AriaAttributes,
    DOMAttributes<HTMLElement> {
  /**
   * Property to allow deeply passing a different "as" prop value to underlying components, ex. `<Text as="p">Text content</Text>`
   */
  as?: HTMLTag | ComponentType<any>;
  /**
   * Custom styles - use them only in special cases, don't use if you need any of theme values.
   * Example of correct use ✅: `css={{ alignSelf: 'center' }}`
   * Example of incorrect use ❌: `css={{ backgroundColor: '#1d1d1d' }}` - you should use `backgroundColor="dark"`
   */
  style?: CSSProperties;
  className?: string;
}
