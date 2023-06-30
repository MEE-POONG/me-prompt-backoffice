import React, { useState } from 'react';
import { Form, Dropdown, FloatingLabel } from 'react-bootstrap';

const InputWithSelect: React.FC = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <FloatingLabel 
            controlId="memberID" 
            label="memberID / ผู้แนะนำ" 
            className="mb-3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // onClick={handleClick}
        >
            <Form.Control
                type="text"
                placeholder="name@example.com"
            />
            <Dropdown.Menu show={isDropdownVisible} className='w-100'>
                <Dropdown.Header>เลือกผู้ใช้งาน</Dropdown.Header>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </Dropdown.Menu>

        </FloatingLabel>
    );
};

export default InputWithSelect;
