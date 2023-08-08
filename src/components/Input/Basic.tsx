import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Col, FloatingLabel, Form } from "react-bootstrap";

interface BasicInputProps {
    title: string;
    labelShow: string;
    placeholderShow: string;
    typeShow: string;
    valueShow: string;
    valueSet: (value: string) => void;
    checkIsValid: boolean;
    invalidFeedback: string;
    rules: any;
}

const BasicInput: React.FC<BasicInputProps> = ({ title, labelShow, placeholderShow, typeShow, valueShow, valueSet, checkIsValid, rules, invalidFeedback }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        valueSet(event.target.value);
    };
    return (
        <>
            <Form.Group className="mb-3" controlId={title}>
                <Form.Label>{labelShow}</Form.Label>
                <Form.Control
                    type={typeShow}
                    placeholder={placeholderShow}
                    name={title}
                    value={valueShow}
                    onChange={handleInputChange}
                    isValid={checkIsValid && (e.target.value > rules)}
                    isInvalid={checkIsValid}
                />
                <Form.Control.Feedback type="invalid">
                    {invalidFeedback}
                </Form.Control.Feedback>
            </Form.Group>
        </>
    );
};

export default BasicInput;
