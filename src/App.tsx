import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { NewCollection } from './pages/NewCollection';
import { Offers } from './pages/Offers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-[72px] md:pt-[120px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nova-colecao" element={<NewCollection />} />
            <Route path="/vestidos" element={<CategoryPage category="Vestidos" />} />
            <Route path="/blusas" element={<CategoryPage category="Blusas" />} />
            <Route path="/calcas" element={<CategoryPage category="Calças" />} />
            <Route path="/acessorios" element={<CategoryPage category="Acessórios" />} />
            <Route path="/ofertas" element={<Offers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;