import { DownloadCard } from '@/features/DownloadCard';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { ConjugareCard } from '@/widgets/ConjugareCard';
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

  return (
    <div className={css.mainPage}>
      <div className={css.container}>
        <form className={css.searchBar} onSubmit={onSubmit}>
          <Input placeholder='Verb' name='verb' />
          <Button type='submit'>Căută</Button>
        </form>

        <ConjugareCard verb={verb} />

        <DownloadCard />
      </div>
    </div>
  );
};
