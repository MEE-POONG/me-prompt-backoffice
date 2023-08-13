import React, { useState, useEffect } from 'react';
import { Button, Form } from "react-bootstrap";

interface BasicToggleButtonProps {
    title: string;
    labelShow: string;
    typeShow: string;
    valueShow: boolean;
    valueSet: (value: boolean) => void;
    checkIsValid: boolean;
    rules?: (value: string) => boolean;
    invalidFeedback: string;
}
const BasicToggleButton: React.FC<BasicToggleButtonProps> = ({
    title,
    labelShow,
    typeShow,
    valueShow,
    valueSet,
    rules,
    checkIsValid,
    invalidFeedback,
}) => {
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [showValidation, setShowValidation] = useState(false);

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const inputValue = event.target.value;
    //     valueSet(inputValue);
    // };

    useEffect(() => {
        if (checkIsValid && rules) {
            // setIsValid(rules(valueShow));
            setShowValidation(true);
        }
    }, [checkIsValid, valueShow, rules]);

    return (
        <>
            <Form.Group className="mb-3" controlId={title}>
                <Form.Label>{labelShow}</Form.Label>
                <Button
                    bsPrefix="icon"
                    className={`w-100 ms-2 btn icon ${valueShow ? 'active' : ''}`}
                    onClick={() => valueSet(!valueShow)}
                >
                    ค่าคอม
                </Button>
                {showValidation && isValid === false && <Form.Control.Feedback type="invalid">
                    {invalidFeedback}
                </Form.Control.Feedback>}
            </Form.Group>
        </>
    );
};
export default BasicToggleButton;