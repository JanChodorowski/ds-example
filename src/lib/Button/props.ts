import { DOMAttributes, ButtonHTMLAttributes } from 'react';

import { MarginProps } from '../Box';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonEmphasis = 'default' | 'primary' | 'accent' | 'white';
export type ButtonSize = 's' | 'm' | 'l';

export interface ButtonProps
  extends Pick<
      ButtonHTMLAttributes<HTMLElement>,
      | 'autoFocus'
      | 'disabled'
      | 'form'
      | 'formAction'
      | 'formEncType'
      | 'formMethod'
      | 'formNoValidate'
      | 'formTarget'
      | 'name'
      | 'type'
      | 'value'
    >,
    Pick<DOMAttributes<HTMLElement>, 'onClick' | 'onFocus' | 'onBlur'>,
    MarginProps {
  label: string;
  as?: Extract<keyof JSX.IntrinsicElements, 'span' | 'button'>;
  variant?: ButtonVariant;
  emphasis?: ButtonEmphasis;
  size?: ButtonSize;
}
