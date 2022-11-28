import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { FormEvent, useCallback } from 'react';
import css from './Searchbar.module.scss';

export const Searchbar = () => {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const verb = new FormData(form).get('verb');
  }, []);

  return (
    <form className={css.searchBar} onSubmit={onSubmit}>
      <Input placeholder='Verb' name='verb' />
      <Button type='submit'>Căută</Button>
    </form>
  );
};
