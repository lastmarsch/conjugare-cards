import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import axios from 'axios';
import { FormEvent, useCallback } from 'react';
import css from './Searchbar.module.scss';

export const Searchbar = () => {
  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const verb = new FormData(form).get('verb');

    axios
      .get(`http://localhost:${__SERVER_PORT__}/conjugare/${verb}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return (
    <form className={css.searchBar} onSubmit={onSubmit}>
      <Input placeholder='Verb' name='verb' />
      <Button type='submit'>Căută</Button>
    </form>
  );
};
