import { Story, Meta } from '@storybook/react';

import { Flex, FlexProps } from '.';
import { space } from '../../theme';

export default {
  title: 'Foundations/Flex',
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

const boxes = Object.keys(space)
  .reverse()
  .map((s) => (
    <Flex
      backgroundColor="accentAlpha32"
      pl={s as FlexProps['p']}
      pt={s as FlexProps['p']}
      m="s200"
      key={s}
    />
  ));

export const Row = Template.bind({});
Row.args = {
  children: boxes,
  alignItems: 'center',
};

export const Column = Template.bind({});
Column.args = {
  children: boxes,
  flexDirection: 'column',
  alignItems: 'flex-start',
};
