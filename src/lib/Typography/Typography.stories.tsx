import { Story, Meta } from '@storybook/react';

import { Typography, TypographyProps } from '.';
import { fontSizes, lineHeights } from '../../theme';
import { Grid } from '../Grid';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: `Default component variant is p1 (${fontSizes['p1']} / ${lineHeights['p1']})`,
};

export const Variants: Story<TypographyProps> = ({
  children,
  scale,
  ...rest
}) => {
  const variants = [
    'hero',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'p1',
    'p1-medium',
    'p1-semiBold',
    'p2',
    'p2-medium',
    'p2-semiBold',
    'p3',
    'p3-medium',
    'p3-semiBold',
    'caption',
  ] as TypographyProps['scale'][];

  return (
    <Grid gridGap="s300">
      {variants.map((s) => (
        <Typography scale={s} key={s} {...rest}>
          {children}
        </Typography>
      ))}
    </Grid>
  );
};

Variants.args = {
  children: 'Ultricies tincidunt est pellentesque.',
  color: 'default',
};
