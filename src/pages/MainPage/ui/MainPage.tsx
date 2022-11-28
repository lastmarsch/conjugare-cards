import { Searchbar } from '@/features/Searchbar';
import { ConjugareCard } from '@/shared/ui/ConjugareCard';
import css from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <div className={css.container}>
        <Searchbar />
        <ConjugareCard
          {...{
            verb: 'a face',
            grupa: 'grupa a III-a',
            conjugarea: 'conjugarea a IX-a',
            infinitivLung: 'facere',
            participiu: 'făcut',
            gerunziu: 'făcând',
            imperativ: {
              sg: 'fă',
              pl: 'faceți, făceți',
            },
            prezent: ['fac', 'faci', 'face', 'facem', 'faceți', 'fac'],
            conjunctivPrezent: [
              '(să) fac',
              '(să) faci',
              '(să) facă',
              '(să) facem',
              '(să) faceți',
              '(să) facă',
            ],
            imperfect: ['făceam', 'făceai', 'făcea', 'făceam', 'făceați', 'făceau'],
            perfectSimplu: ['făcui', 'făcuși', 'făcu', 'făcurăm', 'făcurăți', 'făcură'],
            maiMultCaPerfect: [
              'făcusem',
              'făcuseși',
              'făcuse',
              'făcuserăm',
              'făcuserăți',
              'făcuseră',
            ],
          }}
        />
      </div>
    </div>
  );
};
