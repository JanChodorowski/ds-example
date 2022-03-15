import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { Colors, Radii } from '../../theme/types';

import { Box, BoxProps } from '../../lib/Box';
import { Typography } from '../../lib/Typography';
import { Grid, GridProps } from '../../lib/Grid';
import { Flex } from '../../lib/Flex';

interface SampleFrameProp extends BoxProps {
  sampleFrame?: 'padding' | 'rgba';
}

interface PalettePropsItem
  extends BoxProps,
    Pick<SampleFrameProp, 'sampleFrame'> {
  box: {
    backgroundColor?: keyof Colors;
    borderRadius?: keyof Radii;
  };
  name: string;
  description: string | string[];
}

interface PaletteProps extends GridProps {}

export const PaletteItem: FC<PalettePropsItem> = ({
  box,
  name,
  description,
  sampleFrame,
}) => {
  const sampleBox = (
    <SampleBox
      p="s400"
      borderRadius="rounded"
      mb={sampleFrame ? 's000' : 's100'}
      {...box}
    />
  );

  return (
    <Flex flexDirection="column">
      {sampleFrame ? (
        <SampleFrame
          mb="s100"
          p={sampleFrame === 'padding' ? 's400' : 's000'}
          backgroundColor="defaultAdd3"
          borderRadius="rounded"
          sampleFrame={sampleFrame}
        >
          {sampleBox}
        </SampleFrame>
      ) : (
        sampleBox
      )}
      <Typography scale="p2-medium" mb="s025" color="defaultAdd3">
        {name}
      </Typography>

      {description && typeof description === 'object' ? (
        description.map((i) => (
          <Typography scale="caption" color="defaultAdd4" as="p" key={i}>
            {i}
          </Typography>
        ))
      ) : (
        <Typography as="p" scale="caption" color="defaultAdd4">
          {description}
        </Typography>
      )}
    </Flex>
  );
};

export const Palette: FC<PaletteProps> = ({ children, ...rest }) => (
  <Grid {...rest}>{children}</Grid>
);

Palette.defaultProps = {
  gridTemplateColumns: {
    xs: 'repeat(3, 1fr)',
    m: 'repeat(4, 1fr)',
    l: 'repeat(5, 1fr)',
  },
  gridColumnGap: 's200',
  gridRowGap: 's300',
};

const SampleFrame = styled(Box)<SampleFrameProp>`
  display: flex;
  flex-direction: column;

  ${({ sampleFrame, theme }) =>
    sampleFrame === 'rgba' &&
    css`
      background-color: transparent;
      background-image: url('data:image/svg+xml,<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="rgb(216,216,216)"><path d="M2,14 L2,18 L-2,18 L-2,14 L2,14 Z M10,14 L10,18 L6,18 L6,14 L10,14 Z M18,14 L18,18 L14,18 L14,14 L18,14 Z M6,10 L6,14 L2,14 L2,10 L6,10 Z M14,10 L14,14 L10,14 L10,10 L14,10 Z M2,6 L2,10 L-2,10 L-2,6 L2,6 Z M18,6 L18,10 L14,10 L14,6 L18,6 Z M10,6 L10,10 L6,10 L6,6 L10,6 Z M14,2 L14,6 L10,6 L10,2 L14,2 Z M6,2 L6,6 L2,6 L2,2 L6,2 Z M18,-2 L18,2 L14,2 L14,-2 L18,-2 Z M10,-2 L10,2 L6,2 L6,-2 L10,-2 Z M2,-2 L2,2 L-2,2 L-2,-2 L2,-2 Z"></path></svg>');
      background-position: center;
      box-shadow: 0 0 0 1px ${theme.colors.defaultAdd5};
    `};
`;

const SampleBox = styled(Box)`
  ${({ borderRadius, theme }) => css`
    box-shadow: inset 0 0 0 1px ${theme.colors.defaultAdd5};

    ${borderRadius === 'circle' &&
    css`
      align-self: center;
    `};
  `};
`;
