import { Button } from '@/shared/ui/Button';
import { useCallback } from 'react';
import css from './DownloadCard.module.scss';

export const DownloadCard = () => {
  const onClick = useCallback(() => {
    // download
  }, []);

  return (
    <Button onClick={onClick} className={css.downloadButton}>
      Descarcă PNG
    </Button>
  );
};
