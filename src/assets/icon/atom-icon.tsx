import * as React from 'react';

function AtomIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M12 11a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1M4.22 4.22C5.65 2.79 8.75 3.43 12 5.56c3.25-2.13 6.35-2.77 7.78-1.34 1.43 1.43.79 4.53-1.34 7.78 2.13 3.25 2.77 6.35 1.34 7.78-1.43 1.43-4.53.79-7.78-1.34-3.25 2.13-6.35 2.77-7.78 1.34-1.43-1.43-.79-4.53 1.34-7.78-2.13-3.25-2.77-6.35-1.34-7.78m11.32 4.24c.61.62 1.17 1.25 1.69 1.88 1.38-2.13 1.88-3.96 1.13-4.7-.74-.75-2.57-.25-4.7 1.13.63.52 1.26 1.08 1.88 1.69m-7.08 7.08c-.61-.62-1.17-1.25-1.69-1.88-1.38 2.13-1.88 3.96-1.13 4.7.74.75 2.57.25 4.7-1.13-.63-.52-1.26-1.08-1.88-1.69m-2.82-9.9c-.75.74-.25 2.57 1.13 4.7.52-.63 1.08-1.26 1.69-1.88.62-.61 1.25-1.17 1.88-1.69-2.13-1.38-3.96-1.88-4.7-1.13m4.24 8.48c.7.7 1.42 1.34 2.12 1.91.7-.57 1.42-1.21 2.12-1.91.7-.7 1.34-1.42 1.91-2.12-.57-.7-1.21-1.42-1.91-2.12-.7-.7-1.42-1.34-2.12-1.91-.7.57-1.42 1.21-2.12 1.91-.7.7-1.34 1.42-1.91 2.12.57.7 1.21 1.42 1.91 2.12m8.48 4.24c.75-.74.25-2.57-1.13-4.7-.52.63-1.08 1.26-1.69 1.88-.62.61-1.25 1.17-1.88 1.69 2.13 1.38 3.96 1.88 4.7 1.13z" />
    </svg>
  );
}

export default AtomIcon;
