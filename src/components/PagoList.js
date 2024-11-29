import React, { useState, useEffect } from 'react';
import { obtenerPagos, eliminarPago } from '../services/PagoService';
import PagoItem from './PagoItem';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

const PagoList = () => {
  const [pagos, setPagos] = useState([]);

  useEffect(() => {
    const fetchPagos = async () => {
      const data = await obtenerPagos();
      setPagos(data);
    };
    fetchPagos();
  }, []);

  const handleDelete = async (id) => {
    await eliminarPago(id);
    setPagos(pagos.filter((pago) => pago.id !== id));
  };

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Lista de Pagos</h2>
          <ListGroup>
            {pagos.map((pago) => (
              <ListGroup.Item key={pago.id} className="d-flex justify-content-between align-items-center">
                <PagoItem pago={pago} />
                <Button variant="danger" onClick={() => handleDelete(pago.id)}>
                  Eliminar
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PagoList;
