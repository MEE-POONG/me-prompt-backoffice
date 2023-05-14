import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Image, Tab, Nav } from 'react-bootstrap';
interface RoomType {
  key: string;
  title: string;
  images: string[];
}
const SelectRoomSection: React.FC = () => {
  const roomTypes: RoomType[] = [
    { key: 'typeA', title: 'Type A', images: ['planA.jpg', 'roomA.jpg'] },
    { key: 'typeB', title: 'Type B', images: ['planB.jpg', 'roomB.jpg'] },
    { key: 'typeC', title: 'Type C', images: ['planC.jpg', 'roomC.jpg'] },
    { key: 'typeD', title: 'Type D', images: ['planD.jpg', 'roomD.jpg'] },
    { key: 'typeE', title: 'Type E', images: ['planE.jpg', 'roomE.jpg'] },
    { key: 'typeF', title: 'Type F', images: ['planF.jpg', 'roomF.jpg'] },
    { key: 'typeG', title: 'Type G', images: ['planG.jpg', 'roomG.jpg'] },
    // Add more types here
  ];

  return (
    <div className=" selectroom-section">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="typeA" >
          <Row className='select mx-0 px-0 py-4'>
            <Col sm="12" className='select-nav'>
              <Nav variant="pills" className='mb-4'>
                {roomTypes.map((type) => (
                  <Nav.Item key={type.key} >
                    <Nav.Link className='text-center font-bold f-f-roboto' eventKey={type.key}>{type.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col className='max-width-content select-tab'>
              <Nav variant="pills" className="flex-column">
                {roomTypes.map((type) => (
                  <Nav.Item key={type.key} >
                    <Nav.Link className='text-center font-bold f-f-roboto' eventKey={type.key}>{type.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col >
              <Tab.Content>
                {roomTypes.map((type) => (
                  <Tab.Pane eventKey={type.key} key={type.key}>
                    <Row>
                      {type.images.map((image, index) => (
                        <Col key={index} sm={6} className='col-show'>
                          <Image src={`/images/` + image} alt={`Image for ${type.title}`} fluid className='w-100' />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div >
  );
};

export default SelectRoomSection;
