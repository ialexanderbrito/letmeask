import { ButtonHTMLAttributes } from 'react';

import cx from 'classnames';

import './style.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutline?: boolean;
};

export function Button({ isOutline = false, ...props }: ButtonProps) {
  return (
    <button
      className={cx('button', { outlined: isOutline })}
      {...props}
    ></button>
  );
}
