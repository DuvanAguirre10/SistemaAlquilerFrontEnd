import axios from 'axios';

const API_URL = 'http://localhost:3000/pagos'; // URL de la API

// Obtener todos los pagos
export const obtenerPagos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Crear un nuevo pago
export const crearPago = async (pago) => {
  const response = await axios.post(API_URL, pago);
  return response.data;
};

// Actualizar un pago
export const actualizarPago = async (id, pago) => {
  const response = await axios.put(`${API_URL}/${id}`, pago);
  return response.data;
};

// Eliminar un pago
export const eliminarPago = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
