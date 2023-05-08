import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';

interface TableContainerProps {
  headers: string[];
  page: string;
}

const TableContainer: React.FC<TableContainerProps> = ({ headers, page }) => {
  return (
    <Row className=' pt-4 px-4'>
      <Col>
        <Card>
          <Card.Header className='h3'>
            {page}
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Add table body contents as needed */}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TableContainer;
