import { VFC } from 'react';
import styled, { css } from 'styled-components';
import { ValuesType } from 'utility-types';

import { Box, Flex, Text } from '../../lib';
import { Theme } from '../../theme/types';

type Options = ValuesType<Theme>;

interface InlineProps {
  content: Options;
  appearance?: 'fontSizes' | 'lineHeights' | 'fontWeights';
  spaceBetween?: boolean;
}

export const Inline: VFC<InlineProps> = ({
  content,
  appearance,
  spaceBetween,
  ...rest
}) => {
  const keys = Object.keys(content);

  return (
    <Box {...rest}>
      <Group justifyContent={spaceBetween ? 'space-between' : undefined}>
        {keys.reverse().map((i) => (
          <Item key={i}>
            <LabelFrame>
              <Label
                fontSize={
                  appearance === 'fontSizes'
                    ? (i as keyof Theme['fontSizes'])
                    : 'h4'
                }
                lineHeight={
                  appearance === 'lineHeights'
                    ? (i as keyof Theme['lineHeights'])
                    : undefined
                }
                fontWeight={
                  appearance === 'fontWeights'
                    ? (i as keyof Theme['fontWeights'])
                    : 'medium'
                }
                backgroundColor={
                  appearance === 'lineHeights' ? 'defaultAdd6' : undefined
                }
                px={appearance === 'lineHeights' ? 's100' : undefined}
                mb="s200"
              >
                {content[i as keyof Options]}
              </Label>
            </LabelFrame>

            <code>{i}</code>
          </Item>
        ))}
      </Group>
      <Hr backgroundColor="defaultAdd6" />
    </Box>
  );
};

const Group = styled(Flex).attrs({
  flexWrap: 'wrap',
})`
  ${({ theme }) => css`
    margin-left: -${theme.space.s300};
  `};
`;

const Item = styled(Flex).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  ml: 's300',
  mb: 's300',
})``;

const LabelFrame = styled(Flex).attrs({ alignItems: 'flex-end' })`
  flex: 1 1 auto;
`;

const Label = styled(Text)`
  display: block;

  ${({ lineHeight }) =>
    !lineHeight &&
    css`
      line-height: 1em;
    `}
`;

const Hr = styled(Box)`
  height: 1px;
`;
