import { Story, Meta } from '@storybook/react';

import { Box, BoxProps } from '.';
import { Flex } from '../Flex';

import {
  controlDisabled,
  htmlTagsKeys,
  colorsKeys,
  getSpaceArgTypes,
} from '../../../.storybook/storyHelpers';

export default {
  title: 'Foundations/Box',
  component: Box,
  argTypes: {
    children: controlDisabled,
    as: {
      control: {
        type: 'select',
        options: htmlTagsKeys,
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: colorsKeys,
      },
    },
    color: {
      control: {
        type: 'select',
        options: colorsKeys,
      },
    },
    ...getSpaceArgTypes(['m', 'p']),
    forwardedAs: controlDisabled,
  },
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <Flex>
    <Box {...args} />
  </Flex>
);

export const Basic = Template.bind({});

Basic.args = {
  backgroundColor: 'primary',
  p: 's500',
};

export const Rounded = Template.bind({});

Rounded.args = {
  backgroundColor: 'primaryAlpha64',
  borderRadius: 'circle',
  p: 's500',
};
