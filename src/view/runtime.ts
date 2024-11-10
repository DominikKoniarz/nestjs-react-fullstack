import { hydrateRoot } from 'react-dom/client';
import Page from './pages/root';

hydrateRoot(document.getElementById('root')!, Page());
