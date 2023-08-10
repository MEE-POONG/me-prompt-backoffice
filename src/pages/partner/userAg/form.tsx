import BasicInput from "@/components/Input/Basic";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import { userAGForm } from "@/data/partner";
import BasicDropdownInput from "@/components/Input/BasicDropdown";
import BasicSearchInput from "@/components/Input/BasicSearch";
import useAxios from "axios-hooks";
import { Member } from "@prisma/client";

interface Params {
  page: number;
  pageSize: number;
  searchTerm: string;
  totalPages: number;
}
const FormPage: React.FC = () => {
  const initialFormData = userAGForm.reduce((acc: any, curr: any) => {
    acc[curr.title] = '';
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState(initialFormData);
  const [checkIsValid, setCheckIsValid] = useState<boolean>(false);

  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    searchTerm: "",
    totalPages: 1,
  });
  const [{ data: memberSearch, loading, error }, refetchSearch] = useAxios({
    url: `/api/member?page=${params.page}&pageSize=${params.pageSize}&searchTerm=${formData["originAG"]}`,
    method: "GET",
  });

  useEffect(() => {
    if (formData["recommender"] && formData["recommender"].length >= 3) {
      refetchSearch();
    }
    console.log(memberSearch);
  }, [formData["originAG"], refetchSearch]);


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
                <Col md={4} lg={3} key={index}>
                  {inputItem.typeShow === "text" && (
                    <BasicInput
                      title={inputItem.title}
                      labelShow={inputItem.labelShow}
                      placeholderShow={inputItem.placeholderShow}
                      typeShow={inputItem.typeShow}
                      valueShow={formData[inputItem.title]}
                      valueSet={(value: any) => handleInputChange(inputItem.title, value)}
                      rules={(value: any) => value?.length >= 3}
                      checkIsValid={checkIsValid}
                      invalidFeedback={inputItem.invalidFeedback}
                    />
                  )}

                  {inputItem.typeShow === "dropdown" && (
                    <BasicDropdownInput
                      title={inputItem.title}
                      labelShow={inputItem.labelShow}
                      placeholderShow={inputItem.placeholderShow}
                      typeShow={inputItem.typeShow}
                      valueSet={(value: string) => handleInputChange(inputItem.title, value)}
                      rules={(value: string) => value?.length >= 3}
                      checkIsValid={checkIsValid}
                      invalidFeedback={inputItem.invalidFeedback}
                      list={inputItem.list || []}
                    />
                  )}

                  {inputItem.typeShow === "search" && (
                    <BasicSearchInput
                      title={inputItem.title}
                      labelShow={inputItem.labelShow}
                      placeholderShow={inputItem.placeholderShow}
                      typeShow={inputItem.typeShow}
                      valueShow={formData[inputItem.title]}
                      valueSet={(value: any) => handleInputChange(inputItem.title, value)}
                      rules={(value: any) => value?.length >= 3}
                      checkIsValid={checkIsValid}
                      invalidFeedback={inputItem.invalidFeedback}
                      listArray={memberSearch?.data.map((member: any) => ({
                        id: member.id,
                        textShow: member?.firstname + " " + member?.lastname
                      }))}
                    />
                  )}
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
