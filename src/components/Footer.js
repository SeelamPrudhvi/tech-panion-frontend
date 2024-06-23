import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";

function BasicExample({ formData }) {
  console.log(`i am footer component ${formData} form data `);
  console.log(formData);
  console.log("i am end of footer");

  // {advancepaid : 1234
  //   currency: "INR"
  // invbasicamt  : 1234
  //   invtaxamt: 234
  //   netpayableamtexcluoftds
  //   :
  //   1234568
  //   tcsapplicable
  //   :
  //   true
  //   totalinvamtincluoftax
  //   :
  //   1234    }

  return (
    <Navbar expand="lg" className="navbar-custom justify-content-between">
      <Container className="container-custom">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="info">
              <span className="info-item">
                Currency:{" "}
                <span className="value">
                  {formData.currency ? formData.currency : "00"}
                </span>
              </span>
              <span className="info-item">
                Inv Basic Amt:{" "}
                <span className="value">
                  {formData.invbasicamt ? formData.invbasicamt : "00"}
                </span>
              </span>
              <span className="info-item">
                Basic Tax Amt:{" "}
                <span className="value">
                  {formData.invtaxamt ? formData.invtaxamt : "00"}
                </span>
              </span>
              <span className="info-item">
                Inv Total Amt:{" "}
                <span className="value">
                  {formData.netpayableamtexcluoftds
                    ? formData.netpayableamtexcluoftds
                    : "00"}
                </span>
              </span>
              <span className="info-item">
                TDS Amt:{" "}
                <span className="value">
                  {formData.tcsapplicable ? "YES" : "NO"}
                </span>
              </span>
              <span className="info-item">
                Net Payable Amt:{" "}
                <span className="value">
                  {formData.totalinvamtincluoftax
                    ? formData.totalinvamtincluoftax
                    : "00"}
                </span>
              </span>
              <span className="info-item danger">
                Basic Amt Diff:{" "}
                <span className="value">
                  {formData.advancepaid ? formData.advancepaid : "00"}
                </span>
              </span>
            </div>
            <div className="actions">
              <select className="action-select">
                <option>Select Action</option>
              </select>
              <span className="action reject">Reject</span>
              <span className="action approve">Approve</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
