import { Button } from '@/shared/ui/Button';
import { saveAs } from 'file-saver';
import { toBlob } from 'html-to-image';
import { useCallback } from 'react';
import css from './DownloadCard.module.scss';

export const DownloadCard = () => {
  const onClick = useCallback(() => {
    const cardDiv = document.querySelector('#conjugareCard');
    if (!cardDiv) return;

    toBlob(cardDiv as HTMLElement).then((blob) => saveAs(blob as Blob, 'card.png'));
  }, []);

  return (
    <Button onClick={onClick} className={css.downloadButton}>
      Descarcă PNG
    </Button>
  );
};
