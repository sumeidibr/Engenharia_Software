import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from "../src/pages/login";
import Bilhetes from "../src/pages/bilhetes";
import DetalhesBilhetes from "../src/pages/detalhesBilhetes";
import Home from "../src/pages/home";
import Localizacao from "../src/pages/localizacao";
import Pagamento from "../src/pages/pagamento";
import Recibo from "../src/pages/recibo";
import Reserva from "../src/pages/reserva";

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <main style={{ flexGrow: 1 }}>
          <Routes> 
            {/* Rotas gerais */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bilhetes" element={<Bilhetes />} />
            <Route path="/detalhesBilhetes" element={<DetalhesBilhetes />} />
            <Route path="/home" element= {<Home />} />
            <Route path="/localizacao" element= {<Localizacao />} />
            <Route path="/pagamento" element= {<Pagamento />} />
            <Route path="/recibo" element= {<Recibo />} />
            <Route path="/reserva" element= {<Reserva />} />
          </Routes>
        </main>
      </div>
      </div>
  );
}

export default App;
