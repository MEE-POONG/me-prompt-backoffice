import React, { useState, useEffect } from "react";
import Head from 'next/head';
import { Button, Card, Col, Dropdown, DropdownButton, FloatingLabel, Form, Image, InputGroup, Row } from "react-bootstrap";
import useAxios from "axios-hooks";
import Link from "next/link";
import LayOut from "@/components/RootPage/TheLayOut";
import AddModal from "@/components/modal/AddModal";
import InputWithSelect from "@/components/InputWithSelect";
import BasicSearchInput from "@/components/Input/BasicSearch";
import { userAGForm } from "@/data/partner";
import BasicInput from "@/components/Input/Basic";
import BasicDropdownInput from "@/components/Input/BasicDropdown";
import BasicSelectInput from "@/components/Input/BasicSelect";
import BasicToggleButton from "@/components/Button/BasicToggle";

interface Params {
  page: number;
  pageSize: number;
  totalPages: number;
}

const UserAGAdd: React.FC = () => {
  const initialFormData = userAGForm.reduce((acc: any, curr: any) => {
    acc[curr.title] = curr.typeShow === "onOff" ? false : '';
    return acc;
  }, {} as Record<string, any>);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const [formData, setFormData] = useState<any>(initialFormData);
  const [checkIsValid, setCheckIsValid] = useState<boolean>(false);

  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    totalPages: 1,
  });
  const [searchPosition, setSearchPosition] = useState("");
  const [{ data: searchData, loading: searchLoadding, error: searchError }, userAGSearch] = useAxios({
    url: `/api/userAG/search?page=1&pageSize=10&position=${searchPosition}&searchTeam=${formData["originAG"]}`,
    method: "GET",
  }, { autoCancel: false });
  const [{ loading: postLoadding, error: postError }, userAGPost] = useAxios({ url: '/api/userAG', method: 'POST' }, { manual: true });

  useEffect(() => {
    if (formData["position"]) {
      setIsFormDisabled(false);
      if (formData["position"] === "senior") {
        setSearchPosition("boss");
      } else if (formData["position"] === "master") {
        setSearchPosition("senior");
      } else if (formData["position"] === "agent") {
        setSearchPosition("master");
      }
    } else {
      setIsFormDisabled(true);
    }

  }, [formData["position"]]);

  useEffect(() => {
    setFormData((prev: Record<string, string>) => ({ ...prev, ["userAG"]: formData["originAG"] }));
    if (formData["originAG"] && formData["originAG"].length >= 3) {
      userAGSearch();
    }
  }, [formData["originAG"]]);


  const handleInputChange = (title: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [title]: value
    }));
  }
  const isInputDisabled = (inputTitle: string) => {
    if (inputTitle === "position") return false;
    return isFormDisabled;
  };
  const getValidationRule = (inputTitle: string, formData: Record<string, string>) => {
    switch (inputTitle) {
      case "userAG":
        return (value: any) => value?.length > formData["originAG"].length;
      case "originAG":
        if (formData["position"] === "senior") {
          return (value: any) => value === '';
        } else {
          return (value: any) => value?.length >= 5;
        }
      case "percen":
        return (value: any) => value?.length >= 0;
      case "overdue":
        return (value: any) => value === true || value === false;
      case "commission":
        return (value: any) => value === true || value === false;
      case "adjustPercentage":
        return (value: any) => value === true || value === false;
      case "pay":
        return (value: any) => value === true || value === false;
      case "customerCommission":
        return (value: any) => value === true || value === false;
      case "actuallypaid":
        return (value: any) => value === true || value === false;
      case "recommender":
        return (value: any) => value?.length >= 0;

      default:
        return (value: any) => value?.length >= 3;
    }
  }
  const getListArray = (inputTitle: string, arrayLoop: any[]) => {
    switch (inputTitle) {
      case "originAG":
        return arrayLoop?.map((userAG: any) => ({
          id: userAG.id,
          textShow: userAG.username
        }));

      default:
        return []; // default return value, modify as needed
    }
  }
  const getListSelect = (inputTitle: string) => {
    switch (inputTitle) {
      case "percen":
        const inputItem = userAGForm.find(item => item.title === "percen");
        const minValue = inputItem?.min || 0.0;
        const maxValue = inputItem?.max || 0.50;
        const incrementValue = 0.05;
        let options = [];

        for (let i = minValue; i <= maxValue; i += incrementValue) {
          options.push({
            id: i.toString(),   // convert number to string
            textShow: Math.round(i * 100).toString(),
          });
        }
        return options;
      default:
        return [];
    }
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCheckIsValid(true);
    const validationResult = userAGForm.reduce((acc, curr: any) => {
      const value = formData[curr.title];
      const rule = getValidationRule(curr.title, formData);

      if (!rule(value)) {
        acc.isValid = false;
        acc.invalidFields[curr.title] = curr.invalidFeedback;
      }

      return acc;
    }, { isValid: true, invalidFields: {} as Record<string, string> });

    if (validationResult.isValid) {
      userAGPost({ data: formData });
    } else {
      console.log("Fields that failed validation:", validationResult.invalidFields);
    }
  };


  if (postLoadding) return <p>Loading...</p>;
  if (postError) return <p>Error!</p>;
  return (
    <LayOut>
      <div className='member-page'>
        <Card>
          {/* <AddModal checkAlertShow={alertForm} setCheckAlertShow={setAlertForm} checkBody={checkBody} /> */}
          <Card.Header className="d-flex space-between">
            <h4 className="mb-0 py-1">
              UserAG - เพิ่มข้อมูล
            </h4>
          </Card.Header>
          <Card.Body>
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
                      rules={getValidationRule(inputItem.title, formData)}
                      checkIsValid={checkIsValid}
                      invalidFeedback={inputItem.invalidFeedback}
                      disabled={isInputDisabled(inputItem.title)}

                    />
                  )}

                  {inputItem.typeShow === "dropdown" && (
                    <BasicDropdownInput
                      title={inputItem.title}
                      labelShow={inputItem.labelShow}
                      placeholderShow={inputItem.placeholderShow}
                      typeShow={inputItem.typeShow}
                      valueSet={(value: string) => handleInputChange(inputItem.title, value)}
                      rules={getValidationRule(inputItem.title, formData)}
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
                      rules={getValidationRule(inputItem.title, formData)}
                      checkIsValid={checkIsValid}
                      invalidFeedback={inputItem.invalidFeedback}
                      listArray={getListArray(inputItem.title, searchData?.data)}
                      disabled={isInputDisabled(inputItem.title)}

                    />
                  )}
                  {inputItem.typeShow === "select" && (
                    <BasicSelectInput
                      title={inputItem.title}
                      labelShow={inputItem.labelShow}
                      placeholderShow={inputItem.placeholderShow}
                      typeShow={inputItem.typeShow}
                      valueShow={formData[inputItem.title]}
                      valueSet={(value: any) => handleInputChange(inputItem.title, value)}
                      rules={getValidationRule(inputItem.title, formData)}
                      checkIsValid={checkIsValid}
                      invalidFeedback={inputItem.invalidFeedback}
                      listArray={getListSelect(inputItem.title)}
                    />
                  )}
                  {inputItem.typeShow === "onOff" && (
                    <BasicToggleButton
                      title={inputItem.title}
                      labelShow={inputItem.labelShow}
                      placeholderShow={inputItem.placeholderShow}
                      typeShow={inputItem.typeShow}
                      valueShow={formData[inputItem.title]}
                      valueSet={() => handleInputChange(inputItem.title, !formData[inputItem.title])}  // Convert boolean back to string if necessary.
                      rules={getValidationRule(inputItem.title, formData)}
                      checkIsValid={checkIsValid}
                      invalidFeedback={inputItem.invalidFeedback}
                    />
                  )}
                </Col>
              ))}
            </Row>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="primary" onClick={handleSubmit}>
              ยืนยัน
            </Button>
            {/* <Button variant="primary mx-2" onClick={reloadPage}>
              ล้าง
            </Button>
            <Link href="/partner" className="btn btn-danger mx-2">
              ย้อนกลับ
            </Link> */}
          </Card.Footer>
        </Card>
      </div>
    </LayOut >
  );
}
export default UserAGAdd;