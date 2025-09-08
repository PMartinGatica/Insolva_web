// Página 404 para el futuro cuando implementen React Router
// También puede usarse como componente de error genérico

import NotFound from './components/NotFound'

// Ejemplo de uso con React Router (para implementación futura):
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import NotFound from './components/NotFound'

function AppWithRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppWithRouter
*/

export default NotFound
