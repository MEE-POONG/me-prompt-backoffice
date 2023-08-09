import BasicInput from "@/components/Input/Basic";
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import { userAGForm } from "@/data/partner";
const FormPage: React.FC = () => {
  const initialFormData = userAGForm.reduce((acc: any, curr: any) => {
    acc[curr.title] = '';
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState(initialFormData);
  const [checkIsValid, setCheckIsValid] = useState<boolean>(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: Record<string, string>) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCheckIsValid(true);
    console.log('FormData:', formData);
  };

  return (
    <div className="container mt-5">
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              {userAGForm.map((inputItem, index) => (
                <Col md={3} key={index}>
                  <BasicInput
                    title={inputItem.title}
                    labelShow={inputItem.labelShow}
                    placeholderShow={inputItem.placeholderShow}
                    typeShow={inputItem.typeShow}
                    valueShow={formData[inputItem.title]}
                    valueSet={(value: any) => handleInputChange(inputItem.title, value)}
                    rules={(value: any) => value.length >= 3}
                    checkIsValid={checkIsValid}
                    invalidFeedback={inputItem.invalidFeedback}
                  />

                </Col>
              ))}
              <Col sm="12">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FormPage;
