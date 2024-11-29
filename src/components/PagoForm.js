import React, { useState } from 'react';
import { crearPago, actualizarPago } from '../services/PagoService';

const PagoForm = ({ pagoExistente, onSave }) => {
  const [pago, setPago] = useState(pagoExistente || { monto: '', fechaPago: '', metodoPago: '', clienteId: '' });

  const handleChange = (e) => {
    setPago({
      ...pago,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pago.id) {
      await actualizarPago(pago.id, pago);
    } else {
      await crearPago(pago);
    }
    onSave(); // Llamar a esta función para actualizar la lista de pagos
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Monto</label>
      <input type="number" name="monto" value={pago.monto} onChange={handleChange} required />

      <label>Fecha de Pago</label>
      <input type="date" name="fechaPago" value={pago.fechaPago} onChange={handleChange} required />

      <label>Método de Pago</label>
      <input type="text" name="metodoPago" value={pago.metodoPago} onChange={handleChange} required />

      <label>ID del Cliente</label>
      <input type="number" name="clienteId" value={pago.clienteId} onChange={handleChange} required />

      <button type="submit">{pago.id ? 'Actualizar Pago' : 'Crear Pago'}</button>
    </form>
  );
};

export default PagoForm;
