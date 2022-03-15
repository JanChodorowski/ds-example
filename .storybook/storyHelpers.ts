import { ArgTypes } from '@storybook/react/types-6-0';
import { Parameters } from '@storybook/react';

import { colors, space, fontSizes, fontWeights } from '../src/theme';
import { Colors } from '../src/theme/types';

type SpacePropsNames =
  | 'm'
  | 'margin'
  | 'mt'
  | 'marginTop'
  | 'mr'
  | 'marginRight'
  | 'mb'
  | 'marginBottom'
  | 'ml'
  | 'marginLeft'
  | 'mx'
  | 'marginX'
  | 'my'
  | 'marginY'
  | 'p'
  | 'padding'
  | 'pt'
  | 'paddingTop'
  | 'pr'
  | 'paddingRight'
  | 'pb'
  | 'paddingBottom'
  | 'pl'
  | 'paddingLeft'
  | 'px'
  | 'paddingX'
  | 'py'
  | 'paddingY';

interface SpaceControl {
  [key: string]: {
    control?: {
      type: 'select';
      options: SpacePropsNames[];
    };
    table?: { disable: boolean };
  };
}

const getDisabledSpaceControl = (param: 'm' | 'p'): ArgTypes => {
  const shortcut = param;
  const attr = param === 'm' ? 'margin' : 'padding';

  const props = [
    `${shortcut}`,
    `${attr}`,
    `${shortcut}t`,
    `${attr}Top`,
    `${shortcut}r`,
    `${attr}Right`,
    `${shortcut}b`,
    `${attr}Bottom`,
    `${shortcut}l`,
    `${attr}Left`,
    `${shortcut}x`,
    `${attr}X`,
    `${shortcut}y`,
    `${attr}Y`,
  ];

  const argTypes: SpaceControl = {};

  props.forEach((key) => {
    argTypes[key] = { table: { disable: true } };
  });

  return argTypes;
};

export const controlDisabled = {
  control: { disable: true },
};

export const controlHidden = {
  table: { disable: true },
};

export const storyBackgrounds = (defaultColor?: keyof Colors): Parameters => ({
  default: defaultColor,
  values: Object.keys(colors).map((color) => ({
    name: color,
    value: colors[color as keyof Colors],
  })),
});

export const getSpaceArgTypes = (
  s?: SpacePropsNames | SpacePropsNames[],
): ArgTypes => {
  const disabledArgTypes = {
    ...getDisabledSpaceControl('m'),
    ...getDisabledSpaceControl('p'),
  };

  if (!s) return disabledArgTypes;

  if (Array.isArray(s)) {
    const argTypes: SpaceControl = {};

    s.forEach((key: SpacePropsNames) => {
      argTypes[key] = {
        control: {
          type: 'select',
          options: spaceKeys as SpacePropsNames[],
        },
      };
    });

    return { ...disabledArgTypes, ...argTypes };
  }

  return {
    ...disabledArgTypes,
    [s]: {
      control: {
        type: 'select',
        options: spaceKeys,
      },
    },
  };
};

export const fontSizesKeys = Object.keys(fontSizes || []);

export const fontWeightsKeys = Object.keys(fontWeights || []);

export const colorsKeys = Object.keys(colors || []);

export const spaceKeys = Object.keys(space || []);

export const flexArgTypes = {
  alignItems: {
    control: {
      type: 'select',
      options: [
        'normal',
        'flex-start',
        'flex-end',
        'start',
        'end',
        'self-start',
        'self-end',
        'baseline',
        'first baseline',
        'last baseline',
        'stretch',
        'safe',
        'unsafe',
      ],
    },
  },
  alignContent: {
    control: {
      type: 'select',
      options: [
        'stretch',
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'initial',
        'inherit',
      ],
    },
  },
  justifyContent: {
    control: {
      type: 'select',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'initial',
        'inherit',
      ],
    },
  },
  justifyItems: {
    control: {
      type: 'select',
      options: [
        'legacy',
        'normal',
        'stretch',
        'left',
        'right',
        'center',
        'legacy left',
        'legacy right',
        'legacy center',
        'baseline',
        'first baseline',
        'last baseline',
        'safe center',
        'unsafe center',
        'start',
        'end',
        'self-start',
        'self-end',
        'flex-start',
        'flex-start',
      ],
    },
  },
  flexWrap: {
    control: {
      type: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
  },
  flexGrow: {
    control: {
      type: 'number',
      min: 1,
      step: 1,
    },
  },
  flexShrink: {
    control: {
      type: 'number',
      min: 1,
      step: 1,
    },
  },
  flexBasis: {
    control: {
      type: 'text',
    },
  },
  flex: {
    control: {
      type: 'text',
    },
  },
  justifySelf: {
    control: {
      type: 'select',
      options: [
        'auto',
        'normal',
        'stretch',
        'left',
        'right',
        'center',
        'baseline',
        'first baseline',
        'last baseline',
        'safe center',
        'unsafe center',
        'start',
        'end',
        'self-start',
        'self-end',
        'flex-start',
        'flex-start',
      ],
    },
  },
  alignSelf: {
    control: {
      type: 'select',
      options: [
        'auto',
        'normal',
        'self-start',
        'self-end',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'first baseline',
        'last baseline',
        'stretch',
        'safe',
        'unsafe',
      ],
    },
  },
  flexDirection: {
    control: {
      type: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
  },
};

export const gridArgTypes: ArgTypes = {
  gridGap: {
    control: {
      type: 'select',
      options: spaceKeys,
    },
  },
  gridColumnGap: {
    control: {
      type: 'select',
      options: spaceKeys,
    },
  },
  gridRowGap: {
    control: {
      type: 'select',
      options: spaceKeys,
    },
  },
  gridColumn: {
    control: {
      type: 'text',
    },
  },
  gridRow: {
    control: {
      type: 'text',
    },
  },
  gridAutoFlow: {
    control: {
      type: 'select',
      options: ['row', 'column', 'dense', 'row dense', 'column dense'],
    },
  },
  gridAutoColumns: {
    control: {
      type: 'text',
    },
  },
  gridAutoRows: {
    control: {
      type: 'text',
    },
  },
  gridTemplateColumns: {
    control: {
      type: 'text',
    },
  },
  gridTemplateRows: {
    control: {
      type: 'text',
    },
  },
  gridTemplateAreas: {
    control: {
      type: 'text',
    },
  },
  gridArea: {
    control: {
      type: 'text',
    },
  },
};

export const htmlTagsKeys = [
  'a',
  'abbr',
  'acronym',
  'address',
  'applet',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'basefont',
  'bdi',
  'bdo',
  'bgsound',
  'big',
  'blink',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'center',
  'cite',
  'code',
  'col',
  'colgroup',
  'content',
  'data',
  'datalist',
  'dd',
  'decorator',
  'del',
  'details',
  'dfn',
  'dir',
  'div',
  'dl',
  'dt',
  'element',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'font',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'isindex',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'listing',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'nobr',
  'noframes',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'plaintext',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'shadow',
  'small',
  'source',
  'spacer',
  'span',
  'strike',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'tt',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'xmp',
];
