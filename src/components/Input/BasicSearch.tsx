import React, { useState, useEffect } from 'react';
import { Dropdown, Form } from "react-bootstrap";
interface ListItem {
    id: string;
    textShow: string;
}
interface BasicSearchInputProps {
    title: string;
    labelShow: string;
    placeholderShow: string;
    typeShow: string;
    valueShow: string;
    valueSet: (value: string) => void;
    checkIsValid: boolean;
    rules?: (value: string) => boolean;
    invalidFeedback: string;
    listArray?: ListItem[];
}
const BasicSearchInput: React.FC<BasicSearchInputProps> = ({
    title,
    labelShow,
    placeholderShow,
    typeShow,
    valueShow,
    valueSet,
    rules,
    checkIsValid,
    invalidFeedback,
    listArray,
}) => {
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [showValidation, setShowValidation] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        valueSet(inputValue);
    };

    useEffect(() => {
        if (checkIsValid && rules) {
            setIsValid(rules(valueShow));
            setShowValidation(true);
        }
    }, [checkIsValid, valueShow, rules]);

    return (
        <Form.Group className="mb-3 position-relative" controlId={title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Form.Label>{labelShow}</Form.Label>
            <Form.Control
                type={typeShow}
                placeholder={placeholderShow}
                name={title}
                value={valueShow}
                onChange={handleInputChange}
                isValid={showValidation && isValid === true}
                isInvalid={showValidation && isValid === false}
                autoComplete={"off"}
            />
            <Dropdown.Menu show={isDropdownVisible} className='w-100'>
                <Dropdown.Header>เลือกรายการ</Dropdown.Header>
                {listArray?.map((item, index) => {
                    console.log(item);
                    
                    return (
                        <Dropdown.Item
                            key={index}
                            onClick={() => {
                                valueSet(item?.textShow);
                                handleMouseLeave();
                            }}
                            eventKey={item.id}
                        >
                            {item?.textShow}
                        </Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
            {showValidation && isValid === false && <Form.Control.Feedback type="invalid">
                {invalidFeedback}
            </Form.Control.Feedback>}
        </Form.Group>
    );
};
export default BasicSearchInput;