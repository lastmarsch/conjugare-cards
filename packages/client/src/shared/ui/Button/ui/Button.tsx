import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import css from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={classNames(css.button, [className])} {...props}></button>;
};
