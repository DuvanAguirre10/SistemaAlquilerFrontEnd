import React from 'react';

const PagoItem = ({ pago, onDelete }) => {
  return (
    <li>
      {pago.metodoPago}: ${pago.monto} - {pago.fechaPago}

    </li>
  );
};
export default PagoItem;
