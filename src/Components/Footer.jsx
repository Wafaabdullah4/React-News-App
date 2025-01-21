import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      className="bg-dark text-white"
      style={{
        background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
        padding: '20px 0'
      }}
    >
      <br />
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://x.com/Wafaabdullahnur" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaSquareTwitter />
          </a>
          <a href="https://www.instagram.com/bany_dam"className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/wafa-abdullah-nurbani-adam-a39283327/" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Wafaabdullah4" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </section>

      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">News APP</h6>
              <p>
                Welcome to News APP, where you can find the latest updates on various topics including technology, business, health, sports, and entertainment.
              </p>
            </Col>


            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">

            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">

            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>Bandung, Jawa Barat, Indonesia</p>
              <p>wafa.abdullahnurbani@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2025 Copyright:
        <a className="text-reset fw-bold" href="https://bootstrap.com/"> wafaabdullahnurbaniadam </a>
      </div>
    </div>
  );
};

export default Footer;
