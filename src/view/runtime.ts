import { hydrateRoot } from 'react-dom/client';
import Page from './pages/root';

declare global {
  interface Window {
    __INITIAL_PROPS__: any;
  }
}

const initialProps = window.__INITIAL_PROPS__ as any;

hydrateRoot(document.getElementById('root')!, Page(initialProps));
