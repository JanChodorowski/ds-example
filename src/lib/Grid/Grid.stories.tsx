import { Story, Meta } from '@storybook/react';

import { Grid, GridProps } from '.';
import { Box } from '../Box';

export default {
  title: 'Foundations/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: Array.from(Array(12).keys()).map((box) => (
    <Box backgroundColor="primaryAdd2" p="s400" key={box} />
  )),
  gridTemplateColumns: {
    xs: 'repeat(3, 1fr)',
    m: 'repeat(4, 1fr)',
    l: 'repeat(6, 1fr)',
  },
  gridGap: 's200',
};
