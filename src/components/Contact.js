import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const templateParams = {
      user_name: `${formDetails.firstName} ${formDetails.lastName}`,
      user_email: formDetails.email,
      user_phone: formDetails.phone,
      message: formDetails.message,
      reply_to: formDetails.email,
    };

    emailjs
      .send(
        "service_ln4ty0t",
        "template_ubm97d8",
        templateParams,
        "pN9qZ8hA0etpYeazi"
      )
      .then(
        (response) => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: "Message sent successfully!" });
        },
        (err) => {
          setButtonText("Send");
          setStatus({
            success: false,
            message:
              "Something went wrong, please check your connection or EmailJS settings.",
          });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col xs={12} className="px-1">
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>

              {/* هنا جعلنا الرسالة في Row منفصل تماماً لضمان ظهورها في سطر لوحدها */}
              {status.message && (
                <Row>
                  <Col className="mt-3">
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                      style={{
                        textAlign: "center",
                        fontSize: "18px",
                        width: "100%",
                      }}
                    >
                      {status.message}
                    </p>
                  </Col>
                </Row>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
