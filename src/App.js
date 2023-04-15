import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Main } from './components/pages/main';
import { Contacts } from './components/pages/contacts';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
