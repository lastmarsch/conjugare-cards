import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  return (
    <div
      style={{
        lineHeight: `${24 * 1.5}px`,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px',
      }}
    >
      <p
        style={{
          maxWidth: '900px',
        }}
      >
        <b>{error.message}</b>
      </p>
      <p
        style={{
          maxWidth: '900px',
          fontSize: '20px',
        }}
      >
        {error.stack}
      </p>
    </div>
  );
};
