import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Typography } from '../Typography';
import { Flex } from '../Flex';
import { Button } from './Button';
import {
  ButtonProps,
  ButtonEmphasis,
  ButtonVariant,
  ButtonSize,
} from './props';

const variant: ButtonVariant[] = ['primary', 'secondary'];
const emphasis: ButtonEmphasis[] = ['default', 'primary', 'accent', 'white'];
const size: ButtonSize[] = ['l', 'm', 's'];

const commonArgs = {
  label: 'Button text',
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  onBlur: action('onBlur'),
};

export default {
  title: 'Components/Button',
  component: Button,
  disabled: true,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  ...commonArgs,
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  ...commonArgs,
};

export const Variations: Story<ButtonProps> = (args) => (
  <Flex flexDirection="column" alignItems="flex-start">
    {emphasis.map((e) => (
      <Flex
        flexDirection="column"
        mb="s300"
        key={e}
        py="s200"
        px="s250"
        backgroundColor={e === 'white' ? 'default' : undefined}
      >
        <Typography scale="h4" color={e === 'white' ? 'white' : undefined}>
          {e}
        </Typography>
        <Flex alignItems="center" mt="s200">
          {size.map((s, index) => (
            <Flex key={s} ml={index ? 's300' : undefined}>
              {variant.map((v, index) => (
                <Button
                  {...args}
                  emphasis={e}
                  size={s}
                  variant={v}
                  key={v}
                  ml={index ? 's200' : undefined}
                />
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    ))}
  </Flex>
);

Variations.args = {
  ...commonArgs,
};
