import React, { useState } from 'react';
import PagoList from './components/PagoList';
import PagoForm from './components/PagoForm';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleSave = () => {
    setMostrarFormulario(false);
    window.location.reload(); // Recargar la página para ver los cambios
  };

  return (
    <div className="App">
      <h1>Gestión de Pagos</h1>
      <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        {mostrarFormulario ? 'Cancelar' : 'Agregar Pago'}
      </button>
      {mostrarFormulario && <PagoForm onSave={handleSave} />}
      <PagoList />
    </div>
  );
}

export default App;
