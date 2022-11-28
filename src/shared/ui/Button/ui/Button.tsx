import { ButtonHTMLAttributes } from 'react';
import css from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return <button className={css.button} {...props}></button>;
};
