import css from './ConjugareCard.module.scss';

interface ConjugareCardProps {
  verb: string;
  grupa: string;
  conjugarea: string;
  infinitivLung: string;
  participiu: string;
  gerunziu: string;
  imperativ: {
    sg: string;
    pl: string;
  };
  prezent: string[];
  conjunctivPrezent: string[];
  imperfect: string[];
  perfectSimplu: string[];
  maiMultCaPerfect: string[];
}

const pronumele = ['eu', 'tu', 'el, ea', 'noi', 'voi', 'ei, ele'];

export const ConjugareCard = (props: ConjugareCardProps) => {
  const {
    verb,
    grupa,
    conjugarea,
    infinitivLung,
    participiu,
    gerunziu,
    imperativ,
    prezent,
    conjunctivPrezent,
    imperfect,
    perfectSimplu,
    maiMultCaPerfect,
  } = props;

  return (
    <div className={css.conjugareCard}>
      <div className={css.header}>
        <div className={css.titleCardContainer}>
          <div className={css.titleCard}>
            <h2>{verb}</h2>
            <div className={css.tags}>
              <span className={css.tag}>{grupa}</span>
              <span className={css.tag}>{conjugarea}</span>
            </div>
          </div>
        </div>
        <div className={css.info}>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Infinitiv Lung</h3>
            <span>{infinitivLung}</span>
          </div>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Participiu</h3>
            <span>{participiu}</span>
          </div>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Gerunziu</h3>
            <span>{gerunziu}</span>
          </div>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Imperativ</h3>
            <div className={css.row}>
              <div className={css.column}>
                <h4 className={css.title}>sg.</h4>
                <span>{imperativ.sg}</span>
              </div>
              <div className={css.column}>
                <h4 className={css.title}>pl.</h4>
                <span>{imperativ.pl}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.conjugare}>
        <div className={css.conjGroup}>
          <div className={css.header}></div>
          <div className={css.body}>
            {pronumele.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div className={css.conjGroup}>
          <div className={css.header}>
            <h5 className={css.title}>Prezent</h5>
          </div>
          <div className={css.body}>
            {prezent.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div className={css.conjGroup}>
          <div className={css.header}>
            <h5 className={css.title}>Conjunctiv Prezent</h5>
          </div>
          <div className={css.body}>
            {conjunctivPrezent.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div className={css.conjGroup}>
          <div className={css.header}>
            <h5 className={css.title}>Imperfect</h5>
          </div>
          <div className={css.body}>
            {imperfect.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div className={css.conjGroup}>
          <div className={css.header}>
            <h5 className={css.title}>Perfect Simplu</h5>
          </div>
          <div className={css.body}>
            {perfectSimplu.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div className={css.conjGroup}>
          <div className={css.header}>
            <h5 className={css.title}>Mai mult ca Perfect</h5>
          </div>
          <div className={css.body}>
            {maiMultCaPerfect.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
