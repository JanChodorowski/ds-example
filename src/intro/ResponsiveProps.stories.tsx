import { Story, Meta } from '@storybook/react';

import { Box, BoxProps } from '../lib/Box';
import { Flex } from '../lib/Flex';

export default {
  title: 'Intro/ResponsiveProps',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <Flex
    style={{ width: '100%' }}
    backgroundColor={{
      xs: 'accent',
      s: 'primary',
      l: 'white',
    }}
  >
    <Box
      borderRadius={{
        xs: 'rounded',
        s: 'circle',
        l: 'none',
      }}
      backgroundColor={{
        xs: 'default',
        m: 'white',
        l: 'primary',
      }}
      p={{
        xs: 's300',
        s: 's400',
        l: 's500',
      }}
      {...args}
    />
  </Flex>
);

export const Basic = Template.bind({});
