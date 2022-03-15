import { rgba } from 'polished';

import { Colors, ColorKeys, ColorAliasesKeys } from './types/colors';

const generateColorAlphas = (color: ColorKeys, alphas: number[]) =>
  alphas.forEach((value) => {
    const key = `${color}Alpha${value}` as ColorAliasesKeys;
    colors[key] = rgba(colors[color], value / 100);
  });

const colors: Colors = {
  default: '#000000',
  defaultAdd1: '#292929',
  defaultAdd2: '#525252',
  defaultAdd3: '#7A7A7A',
  defaultAdd4: '#A3A3A3',
  defaultAdd5: '#CCCCCC',
  defaultAdd6: '#F5F5F5',
  primarySub2: '#003030',
  primarySub1: '#004444',
  primary: '#005555',
  primaryAdd1: '#246F65',
  primaryAdd2: '#488877',
  primaryAdd3: '#6CA08C',
  primaryAdd4: '#91B8A3',
  primaryAdd5: '#B5D0BD',
  primaryAdd6: '#D9E7DB',
  accentSub2: '#7C1B00',
  accentSub1: '#B02D00',
  accent: '#DD4200',
  accentAdd1: '#E25124',
  accentAdd2: '#E76348',
  accentAdd3: '#EB7A6C',
  accentAdd4: '#F09591',
  accentAdd5: '#F5B5B6',
  accentAdd6: '#FAD9DC',
  white: '#FFFFFF',
};

const alphas = [64, 48, 32, 20, 12, 8, 4];

generateColorAlphas('default', alphas);
generateColorAlphas('primary', alphas);
generateColorAlphas('accent', alphas);
generateColorAlphas('white', [40, 32, 24, 16, 12]);

export { colors };
