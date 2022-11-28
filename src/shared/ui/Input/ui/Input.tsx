import { InputHTMLAttributes } from 'react';
import css from './Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return <input className={css.input} {...props} />;
};
