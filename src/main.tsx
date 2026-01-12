import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppCorporate from './AppCorporate.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppCorporate />
  </StrictMode>
);
