import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./right.css";

class Rightform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "INR",
      invbasicamt: "15000.00",
      invtaxamt: "1000.00",
      totalinvamtincludof: "16000.00",
      advancepaid: "0.00",
      tcsapplicable: "No",
      netpayableamtexcluof: "16000.00",

      alternatepayee1: "",
      alternatepayee2: "",
      city: "",
      street: "",
      country: "",
      bankkeyifsccode: "",
      bankaccno: "",
      reference: "",
      selectdebit: "",
      gldesc: "",
      glcode: "",
      textdonotenterspecialcharacter: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type } = event.target;
    let parsedValue = value;

    if (type === "number") {
      parsedValue = parseFloat(value);
    }

    this.setState({ [name]: parsedValue });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;

    console.log("Form data submitted: ", data);

    axios
      .post("http://localhost:3006/api/formdata", data)
      .then((response) => {})
      .catch((error) => {
        console.error("Error occurred while sending the data: ", error);
      });
  }

  render() {
    return (
      <div className="contents">
        <div className="header">
          <span className="invoice-details">Invoice Details</span>
          <span className="action-history">Action History</span>
        </div>
        <br />
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>INVOICE AMOUNT DETAILS</Accordion.Header>
            <Accordion.Body>
              <Form onSubmit={this.handleSubmit}>
                {this.renderCurrencySelect("Currency")}
                {this.renderFormGroup("Inv Basic Amt", "number", "invbasicamt")}
                {this.renderFormGroup("Inv Tax Amt", "number", "invtaxamt")}
                {this.renderFormGroup(
                  "Total Inv Amt [Inclu.of tax]",
                  "number",
                  "totalinvamtincludof"
                )}
                {this.renderFormGroup("Advance Paid", "number", "advancepaid")}
                {this.renderRadioGroup("TCS Applicable", ["Yes", "No"])}
                {this.renderFormGroup(
                  "Net Payable Amt [Exclu.of TDS]",
                  "number",
                  "netpayableamtexcluof"
                )}
                <div className="actions">
                  <Button
                    variant="danger"
                    type="button"
                    className="action reject"
                  >
                    Reject
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    className="action approve"
                  >
                    Approve
                  </Button>
                </div>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>ALTERNATE PAYEE DETAILS</Accordion.Header>
            <Accordion.Body>
              <Form>
                {this.renderFormGroup(
                  "Alternate Payee 1",
                  "text",
                  "alternatepayee1"
                )}
                {this.renderFormGroup(
                  "Alternate Payee 2",
                  "text",
                  "alternatepayee2"
                )}
                {this.renderFormGroup("City", "text", "city")}
                {this.renderFormGroup("Street", "text", "street")}
                {this.renderFormGroup("Country", "text", "country")}
                {this.renderFormGroup(
                  "Bank Key/IFSC Code",
                  "text",
                  "bankkeyifsccode"
                )}
                {this.renderFormGroup("Bank Acc No", "text", "bankaccno")}
                {this.renderFormGroup("Reference", "text", "reference")}
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>LINE ITEMS DETAILS</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                {this.renderColFormGroup(
                  "Select Debit",
                  "text",
                  "selectdebit",
                  3
                )}
                {this.renderColFormGroup("GL Desc", "text", "gldesc", 3)}
                {this.renderColFormGroup("GL Code", "number", "glcode", 3)}
                {this.renderColFormGroup(
                  "Text (Do not enter special character)",
                  "text",
                  "textdonotenterspecialcharacter",
                  3
                )}
              </Row>
              <div className="footer">
                <div className="pagination">
                  <div className="page-number">1</div>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <button>200/page</button>
                  </span>
                </div>
                <div className="buttons">
                  <button className="calculate">Calculate</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="add">Add</button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }

  renderCurrencySelect(label) {
    return (
      <Form.Group
        className="mb-3"
        controlId={`formGroup${label.replace(" ", "")}`}
        style={{
          display: "inline-flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Form.Label>
          {label}
          <span style={{ color: "red" }}>★</span>:
        </Form.Label>
        <Form.Select
          name="currency"
          style={{ width: "400px" }}
          value={this.state.currency}
          onChange={this.handleChange}
        >
          <option value="INR">INR - Indian Rupee</option>
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CHF">CHF - Swiss Franc</option>
          <option value="CNY">CNY - Chinese Yuan</option>
          <option value="RUB">RUB - Russian Ruble</option>
        </Form.Select>
      </Form.Group>
    );
  }

  renderFormGroup(label, type, name) {
    return (
      <Form.Group
        className="mb-3"
        controlId={`formGroup${label.replace(" ", "")}`}
        style={{
          display: "inline-flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Form.Label>
          {label}
          <span style={{ color: "red" }}>★</span>:
        </Form.Label>
        <Form.Control
          name={name}
          style={{ width: "400px" }}
          type={type}
          value={this.state[name]}
          onChange={this.handleChange}
        />
      </Form.Group>
    );
  }

  renderRadioGroup(label, options) {
    return (
      <Form.Group
        className="mb-3"
        style={{ display: "inline-flex", width: "100%" }}
      >
        <Form.Label>
          {label}
          <span style={{ color: "red" }}>★</span>:
        </Form.Label>
        {options.map((option) => (
          <div
            key={option}
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <input
              type="radio"
              id={option.toLowerCase()}
              name={label.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}
              value={option}
              checked={this.state.tcsapplicable === option}
              onChange={this.handleChange}
            />
            <label htmlFor={option.toLowerCase()} style={{ marginLeft: "5px" }}>
              {option}
            </label>
          </div>
        ))}
      </Form.Group>
    );
  }

  renderColFormGroup(label, type, name, md) {
    return (
      <Form.Group
        as={Col}
        md={md}
        controlId={`validationCustom${label.replace(" ", "")}`}
      >
        <Form.Label>{label}</Form.Label>
        <Form.Control
          name={name}
          required
          type={type}
          value={this.state[name]}
          onChange={this.handleChange}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    );
  }
}

export default Rightform;
