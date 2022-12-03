import { Header } from '@/widgets/Header';
import { ReactNode } from 'react';
import css from './Layout.module.scss';

interface LayoutProps {
  headerLinks: ReactNode[];
  body: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { headerLinks, body } = props;

  return (
    <div className={css.layout}>
      <Header>{headerLinks}</Header>
      {body}
    </div>
  );
};
