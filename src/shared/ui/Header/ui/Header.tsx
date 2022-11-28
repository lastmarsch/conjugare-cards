import css from './Header.module.scss';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <h1>Cărți cu conjugare</h1>
        <a href='/#'>Despre</a>
      </div>
    </header>
  );
};
