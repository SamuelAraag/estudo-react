import { createRoot } from 'react-dom/client';
import { PaginaHome } from './pagina-principal/paginaHome';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<PaginaHome tab="home" />);