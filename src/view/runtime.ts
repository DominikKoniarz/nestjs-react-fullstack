import { hydrateRoot } from 'react-dom/client';
import Page from './pages/root';

hydrateRoot(
  document.getElementById('root')!,
  Page({ renderDateIso: '2021-09-01T00:00:00.000Z' }),
);
