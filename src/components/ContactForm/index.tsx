import { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer, SuccessMessage } from "./styles"; // Add SuccessMessage styled component
import emailjs from "emailjs-com";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit, setValues } = useForm(validate);
  
  const [isSubmitted, setIsSubmitted] = useState(false); // To track if the form is successfully submitted
  const [isError, setIsError] = useState(false); // To track if there was an error

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      try {
        const serviceId = "service_drx6dzx"; // Replace with your actual EmailJS service ID
        const templateId = "template_5ry6sw9"; // Replace with your EmailJS template ID
        const userId = "XySMEZ4tVhO2-Bb5P"; // Replace with your EmailJS user ID

        const response = await emailjs.send(
          serviceId,
          templateId,
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          userId
        );

        if (response.status === 200) {
          setIsSubmitted(true); // Set success state to true
          setIsError(false);   // Ensure error state is false
          
          // Clear form values
          setValues({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setIsSubmitted(false);
          setIsError(true);
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setIsSubmitted(false);
        setIsError(true);
      }
    }
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup as="form" autoComplete="off" onSubmit={onSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit" type="submit">
                  {t("Submit")}
                </Button>
              </ButtonContainer>
            </FormGroup>
            {/* Success/Error Message */}
            {isSubmitted && !isError && (
              <SuccessMessage success>
                Your message has been sent successfully!
              </SuccessMessage>
            )}
            {isError && !isSubmitted && (
              <SuccessMessage error>
                There was an error sending your message. Please try again later.
              </SuccessMessage>
            )}
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
