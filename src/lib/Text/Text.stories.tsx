import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from '.';

import {
  controlDisabled,
  htmlTagsKeys,
  colorsKeys,
  fontSizesKeys,
  fontWeightsKeys,
  getSpaceArgTypes,
} from '../../../.storybook/storyHelpers';

export default {
  title: 'Foundations/Text',
  component: Text,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: htmlTagsKeys,
      },
    },
    fontSize: {
      control: {
        type: 'select',
        options: fontSizesKeys,
      },
    },
    fontWeights: {
      control: {
        type: 'select',
        options: fontWeightsKeys,
      },
    },
    color: {
      control: {
        type: 'select',
        options: colorsKeys,
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: colorsKeys,
      },
    },
    ...getSpaceArgTypes(['m', 'p']),
    forwardedAs: controlDisabled,
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Text content',
};

export const LargeParagraph = Template.bind({});
LargeParagraph.args = {
  children:
    'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
  fontSize: 'p1',
  lineHeight: 'p1',
  as: 'p',
};

export const Heading = Template.bind({});
Heading.args = {
  children: 'Neque porro quisquam',
  as: 'h1',
  fontSize: 'h1',
  lineHeight: 'h1',
  fontWeight: 'bold',
  color: 'primaryAdd3',
};
