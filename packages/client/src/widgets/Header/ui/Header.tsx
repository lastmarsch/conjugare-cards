import { RouterPaths } from '@/app/config/router/Router';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.scss';

interface HeaderProps {
  children: ReactNode[];
}

export const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link to={RouterPaths.MAIN} className={css.logo}>
          <h1>Cărți cu conjugare</h1>
        </Link>
        <div>{children}</div>
      </div>
    </header>
  );
};
