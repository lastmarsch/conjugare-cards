import { Conjugare } from '@/app/config/store';
import css from './Card.module.scss';

type CardProps = Conjugare;

const pronumele = ['eu', 'tu', 'el, ea', 'noi', 'voi', 'ei, ele'];

export const Card = (props: CardProps) => {
  const {
    verb,
    conjugarea,
    conjunctivPrezent,
    gerunziu,
    grupa,
    imperativ,
    imperfect,
    infinitivLung,
    maiMultCaPerfect,
    participiu,
    perfectSimplu,
    prezent,
  } = props;

  const conjGroups = [
    {
      name: '',
      items: pronumele,
    },
    {
      name: 'Prezent',
      items: prezent,
    },
    {
      name: 'Conjunctiv Prezent',
      items: conjunctivPrezent,
    },
    {
      name: 'Imperfect',
      items: imperfect,
    },
    {
      name: 'Perfect Simplu',
      items: perfectSimplu,
    },
    {
      name: 'Mai mult ca Perfect',
      items: maiMultCaPerfect,
    },
  ];

  return (
    <div className={css.conjugareCard}>
      <div className={css.header}>
        <div className={css.titleCardContainer}>
          <div className={css.titleCard}>
            <h2 dangerouslySetInnerHTML={{ __html: verb }} />
            <div className={css.tags}>
              <span className={css.tag} dangerouslySetInnerHTML={{ __html: grupa }} />
              <span className={css.tag} dangerouslySetInnerHTML={{ __html: conjugarea }} />
            </div>
          </div>
        </div>
        <div className={css.info}>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Infinitiv Lung</h3>
            <span dangerouslySetInnerHTML={{ __html: infinitivLung }} />
          </div>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Participiu</h3>
            <span dangerouslySetInnerHTML={{ __html: participiu }} />
          </div>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Gerunziu</h3>
            <span dangerouslySetInnerHTML={{ __html: gerunziu }} />
          </div>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Imperativ</h3>
            <div className={css.row}>
              <div className={css.column}>
                <h4 className={css.title}>sg.</h4>
                <span dangerouslySetInnerHTML={{ __html: imperativ.sg }} />
              </div>
              <div className={css.column}>
                <h4 className={css.title}>pl.</h4>
                <span dangerouslySetInnerHTML={{ __html: imperativ.pl }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.conjugare}>
        {conjGroups.map(({ name, items }) => {
          return (
            <div key={name} className={css.conjGroup}>
              <div className={css.header}>
                <h5 className={css.title}>{name}</h5>
              </div>
              <div className={css.body}>
                {items.map((item, index) => (
                  <span key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
