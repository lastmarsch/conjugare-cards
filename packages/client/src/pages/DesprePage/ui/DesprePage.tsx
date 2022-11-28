import css from './DesprePage.module.scss';

export const DesprePage = () => {
  return (
    <div className={css.desprePage}>
      <div className={css.container}>
        <p>
          <b>Salut!</b>
        </p>
        <p>
          Acest site a fost creat pentru cei care suferă, de asemenea, de perfecționism și doresc ca
          vizualizarea cardurilor de conjugare să arate perfect.{' '}
        </p>
        <p>
          Datele de conjugare sunt colectate de pe site-ul uimitor{' '}
          <a href='https://dexonline.ro/'>dexonline.ro</a>. Designul cardului a fost, de asemenea,
          inspirat de tabelele de conjugare <b>Dexonline</b>. Poate mai târziu voi veni cu propriul
          meu design.
        </p>
        <p>Vă mulțumim pentru vizită!</p>
      </div>
    </div>
  );
};
