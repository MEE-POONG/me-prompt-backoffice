// pages/form.tsx

import BasicInput from "@/components/Input/Basic";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    userAG: '',
  });
  const [checkIsValid, setCheckIsValid] = useState<boolean>(false);


  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCheckIsValid(true);

    console.log('UserAG:', formData?.userAG);
  };
  return (
    <div className="container mt-5">
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <BasicInput
            title="userAG"
            labelShow="UserAG / ยูสเซอร์AG"
             placeholderShow="Enter name" typeShow="text" 
             valueShow={formData.userAG}
              valueSet={(value) => handleInputChange('userAG', value)}
              checkIsValid={checkIsValid}
              rules={2}
              invalidFeedback={"Name should be more than 2 characters."}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>

      </Card>
    </div>
  );
}

export default FormPage;
