import React, { useState, useEffect } from 'react';
import { Dropdown, Form } from "react-bootstrap";
interface ListItem {
    id: string;
    textShow: string;
}
interface BasicSelectInputProps {
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
const BasicSelectInput: React.FC<BasicSelectInputProps> = ({
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

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const inputValue = event.target.value;
    //     valueSet(inputValue);
    // };

    useEffect(() => {
        if (checkIsValid && rules) {
            setIsValid(rules(valueShow));
            setShowValidation(true);
        }
    }, [checkIsValid, valueShow, rules]);

    return (
        <Form.Group className="mb-3 position-relative" controlId={title} >
            <Form.Label>{labelShow}</Form.Label>
            <Form.Select aria-label="Default select example" className='text-center'>
                <option disabled>เลือกรายการ</option>
                {listArray?.map((item, index) => {
                    return (
                        <option
                            key={index}
                            onClick={() => {
                                valueSet(item?.textShow);
                            }}
                        >
                            {item?.textShow}
                        </option>
                    );
                })}
            </Form.Select>
            {showValidation && isValid === false && <Form.Control.Feedback type="invalid">
                {invalidFeedback}
            </Form.Control.Feedback>}
        </Form.Group>
    );
};
export default BasicSelectInput;