import { Conjugare } from '@/app/config/store';
import DOMPurify from 'dompurify';
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

  return (
    <div className={css.conjugareCard}>
      <div className={css.header}>
        <div className={css.titleCardContainer}>
          <div className={css.titleCard}>
            <h2 dangerouslySetInnerHTML={{ __html: verb }} />
            <div className={css.tags}>
              <span
                className={css.tag}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(grupa) }}
              />
              <span
                className={css.tag}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(conjugarea) }}
              />
            </div>
          </div>
        </div>
        <div className={css.info}>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Infinitiv Lung</h3>
            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(infinitivLung) }} />
          </div>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Participiu</h3>
            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(participiu) }} />
          </div>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Gerunziu</h3>
            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(gerunziu) }} />
          </div>
          <div className={css.infoGroup}>
            <h3 className={css.title}>Imperativ</h3>
            <div className={css.row}>
              <div className={css.column}>
                <h4 className={css.title}>sg.</h4>
                <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(imperativ.sg) }} />
              </div>
              <div className={css.column}>
                <h4 className={css.title}>pl.</h4>
                <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(imperativ.pl) }} />
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
              <span key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
            ))}
          </div>
        </div>
        <div className={css.conjGroup}>
          <div className={css.header}>
            <h5 className={css.title}>Conjunctiv Prezent</h5>
          </div>
          <div className={css.body}>
            {conjunctivPrezent.map((item, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
            ))}
          </div>
        </div>
        <div className={css.conjGroup}>
          <div className={css.header}>
            <h5 className={css.title}>Imperfect</h5>
          </div>
          <div className={css.body}>
            {imperfect.map((item, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
            ))}
          </div>
        </div>
        <div className={css.conjGroup}>
          <div className={css.header}>
            <h5 className={css.title}>Perfect Simplu</h5>
          </div>
          <div className={css.body}>
            {perfectSimplu.map((item, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
            ))}
          </div>
        </div>
        <div className={css.conjGroup}>
          <div className={css.header}>
            <h5 className={css.title}>Mai mult ca Perfect</h5>
          </div>
          <div className={css.body}>
            {maiMultCaPerfect.map((item, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
