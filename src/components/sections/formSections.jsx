import React from "react";
import Section from "../main/section";
import Container from "../main/container";
import { Col, Row } from "antd";
import { useForm } from "react-hook-form";
import Heading from "../main/heading";
import BaresBtn from "../main/button";

function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getData = (data) => {
    console.log(data);
  };

  return (
    <>
      <Section classes={"baresForm baresPadding"}>
        <Container>
          <form onSubmit={handleSubmit(getData)} noValidate>
            <Heading
              tagLine={false}
              classes={"textDark"}
              Type={"h3"}
              title={"Input Form"}
            />
            <Row gutter={[7, 12]}>
              <Col span={24}>
                <p className="baresDesc textDark">Personal Information*</p>
              </Col>
              <Col span={12}>
                <input
                  className={errors.name ? "inputField invalid" : "inputField"}
                  {...register("name", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Name"
                />
              </Col>
              <Col span={12}>
                <input
                  className={errors.email ? "inputField invalid" : "inputField"}
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                  })}
                  type="email"
                  placeholder="Email"
                />
              </Col>
              <Col span={24}>
                <input
                  className={
                    errors.address ? "inputField invalid" : "inputField"
                  }
                  {...register("address", {
                    required: true,
                  })}
                  type="text"
                  placeholder="New York, United States"
                />
              </Col>
              <p className="baresDesc textDark">Subject*</p>
              <Col span={24}>
                <input
                  className={
                    errors.subject ? "inputField invalid" : "inputField"
                  }
                  {...register("subject", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Subject"
                />
              </Col>
              <p className="baresDesc textDark">Describbe Your Case*</p>

              <Col span={24}>
                <textarea
                  className={
                    errors.message ? "inputField invalid" : "inputField"
                  }
                  {...register("message")}
                ></textarea>
              </Col>
            </Row>
            <BaresBtn classes={"baresButtonE baresBtn2"}>Send Message</BaresBtn>
          </form>
        </Container>
        <div className="formBg">
          <Row>
            <Col span={8}>
              <img className="pattern" src="/images/form/pattern.png" alt="" />
            </Col>
            <Col span={16}>
              <img src="/images/form/formBg.jpg" alt="" />
            </Col>
          </Row>
        </div>
      </Section>
    </>
  );
}

export default FormSection;
