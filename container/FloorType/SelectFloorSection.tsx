import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Image, Tab, Nav } from 'react-bootstrap';
interface FloorType {
  key: string;
  title: string;
  images: string;
}
const SelectFloorSection: React.FC = () => {
  const floorType: FloorType[] = [
    { key: 'floor1', title: 'Floor 1', images: 'floor1.jpg' },
    { key: 'floor2', title: 'Floor 2', images: 'floor2.jpg' },
    { key: 'floor3', title: 'Floor 3', images: 'floor3.jpg' },
    { key: 'floor4', title: 'Floor 4', images: 'floor4.jpg' },
    { key: 'floor5', title: 'Floor 5', images: 'floor5.jpg' },
    { key: 'floor6', title: 'Floor 6', images: 'floor6.jpg' },
    { key: 'floor7', title: 'Floor 7', images: 'floor7.jpg' },
  ];

  return (
    <div className="selectroom-section">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="floor1" >
          <Row className='select mx-0 px-0 py-4'>
            <Col sm="12" className='select-nav'>
              <Nav variant="pills" className='mb-4'>
                {floorType.map((floor) => (
                  <Nav.Item key={floor.key} >
                    <Nav.Link className='text-center font-bold f-f-roboto' eventKey={floor.key}>{floor.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col className='max-width-content select-tab'>
              <Nav variant="pills" className="flex-column">
                {floorType.map((floor) => (
                  <Nav.Item key={floor.key} >
                    <Nav.Link className='text-center font-bold f-f-roboto' eventKey={floor.key}>{floor.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col >
              <Tab.Content>
                {floorType.map((floor) => (
                  <Tab.Pane eventKey={floor.key} key={floor.key}>
                    <Image src={`/images/` + floor.images} alt={`Image for ${floor.title}`} fluid className='w-100' />
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default SelectFloorSection;
