import React, { useState } from 'react';
import { Form, Dropdown, FloatingLabel } from 'react-bootstrap';
interface SearchDataProps {
    textSearch: React.Dispatch<React.SetStateAction<string>>;
    setID: React.Dispatch<React.SetStateAction<string>>;
    arrayData: any;
}
const InputWithSelect: React.FC<SearchDataProps> = ({ textSearch, setID, arrayData }) => {
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
