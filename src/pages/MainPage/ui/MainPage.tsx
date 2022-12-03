import { useGetVerbQuery } from '@/app/config/store';
import { Card } from '@/features/Card';
import { DownloadCard } from '@/features/DownloadCard';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { FormEvent, useCallback, useState } from 'react';
import css from './MainPage.module.scss';

export const MainPage = () => {
  const [verb, setVerb] = useState('');

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const verb = new FormData(form).get('verb')?.toString() || '';
    setVerb(verb);
  }, []);

  const { data, isLoading, error } = useGetVerbQuery(verb, { skip: verb.length === 0 });

  return (
    <div className={css.mainPage}>
      <div className={css.container}>
        <form className={css.searchBar} onSubmit={onSubmit}>
          <Input placeholder='Verb' name='verb' />
          <Button type='submit'>Căută</Button>
        </form>

        {verb.length > 0 ? (
          error ? (
            <>Scuzați, cuvintele sau expresiile alese nu pot fi găsite. 😢</>
          ) : isLoading ? (
            <Loader />
          ) : data ? (
            <>
              <Card {...data} />
              <DownloadCard />
            </>
          ) : null
        ) : (
          <>Cartea va apărea aici. Caută ceva!</>
        )}
      </div>
    </div>
  );
};
