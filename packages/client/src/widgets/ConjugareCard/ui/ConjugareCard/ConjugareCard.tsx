import { useGetVerbQuery } from '@/app/config/store';
import { Card } from '../Card/Card';

interface ConjugareCardProps {
  verb: string;
}

export const ConjugareCard = (props: ConjugareCardProps) => {
  const { verb = '' } = props;

  const { data, isLoading, error } = useGetVerbQuery(verb);

  return error ? (
    <>Cardul va apărea aici. Caută ceva!</>
  ) : isLoading ? (
    <>Se încarcă...</>
  ) : data ? (
    <>
      <Card {...data} />
    </>
  ) : null;
};
