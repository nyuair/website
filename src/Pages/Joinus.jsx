import React, { useEffect, useState } from 'react';
import { Form, Input, Radio } from 'antd';
import { Spin } from 'antd';
import { MdOutgoingMail } from 'react-icons/md';
import { MdOpenInNew } from "react-icons/md";
// text area
const { TextArea } = Input;
import nyuadImg from '../assets/images/nyuad.jpg';

const Joinus = () => {
  const whatWeofferItmes = [
    { title: 'Open Culture', desc: " We foster an inclusive and transparent environment where everyone's ideas and contributions are valued." },
    { title: 'Cutting-Edge Resources', desc: ' State-of-the-art facilities and tools to empower you to conduct groundbreaking research and innovation.' },
    { title: 'Compensation', desc: ' Competitive salaries and benefits to ensure our team members are well-rewarded for their hard work. ' },
    { title: 'Interdisciplinary Collaboration', desc: ' Opportunities to work with experts from various fields, enhancing your skills and broadening your knowledge. ' },
    { title: 'Fun Environment', desc: ' A vibrant workplace with regular team-building activities and social events to keep the atmosphere lively and enjoyable. ' },
    { title: 'Professional Development', desc: ' Access to workshops, conferences, and training programs to support your continuous growth and career advancement. ' }
  ];
  // use state for form
  const [formvalues, setFormValues] = useState({
    fullname: '',
    email: '',
    phone: '',
    university: '',
    degree: 'Undergraduate',
    address: '',
    reason: ''
  });

  const [sending, setSending] = useState(false);

  // on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
  };

  useEffect(() => {
    // apply the css element here
    const style = document.createElement('style');
    style.innerHTML = `
      nav {
        padding: 4px 0;
        border-bottom: 1px solid #dedee3;
        backdrop-filter: blur(8px);
        background-color: rgba(26, 27, 25, .29);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  });

  return (
    <div className="pub-body-all joinusbg">
      {/* upper part  */}
      <div className="container">
        <div className="row">
          <div className="pubHeader">
            <h4>JOIN</h4>
            <p className="headtextpub">Research Team</p>
            <p className="smallertexts">
              We are always looking for talented, hardworking students and engineers who are committed to <br />
              pushing the boundaries of AI. If that sounds like you, consider applying.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="mainHeadjoin">
            <div>
              <h1>NYUAD student</h1>
              <p>If you are a NYUAD student interested in joining the lab, please email professor Yi Fang with subject, 'Request for Student Research Assistantship'.</p>

              <button
                className="btnGradiented btnwithsvg"
                onClick={() => {
                  window.open('https://mail.google.com/a/nyu.edu/mail/#compose?to=yf23@nyu.edu', '_blank');
                }}>
                Send an email <MdOpenInNew />
              </button>
            </div>
            <div>
              <img
                src={nyuadImg}
                alt="nyuad"
              />
            </div>
          </div>
        </div>
      </div>

      {/* lower part */}
      <div className="container">
        <div className="row undergradApply">
          <h1>Apply now</h1>
          <div className="applyPagMain">
            <div className="leftApply">
              <h2>What we offer</h2>
              <div className="whatweofferItems">
                {whatWeofferItmes.map((item, index) => (
                  <div
                    key={index}
                    className="whatweofferItme">
                    <p className="offerTitle">{item.title}</p>
                    <p className="offerDesc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rightApply">
              <h2>Send an interest form.</h2>

              <div className="submitappform">
                <div className="formrow">
                  <div className="left">
                    <Form.Item
                      label="Full Name"
                      name="fullname"
                      layout="vertical"
                      rules={[{ required: true, message: 'Please input your full name!' }]}>
                      <Input
                        placeholder="Enter your name"
                        onChange={handleChange}
                        value={formvalues.fullname}
                        name="fullname"
                      />
                    </Form.Item>
                  </div>
                  <div className="right">
                    <Form.Item
                      label="Email"
                      name="email"
                      layout="vertical"
                      rules={[{ required: true, message: 'Please input your email!' }]}>
                      <Input
                        placeholder="Enter your email"
                        value={formvalues.email}
                        name="email"
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="formrow">
                  <div className="left">
                    <Form.Item
                      label="Phone Number (with country code)"
                      name="phone"
                      layout="vertical"
                      rules={[{ required: false, message: 'Please input your phone number!' }]}>
                      <Input
                        placeholder="Enter your phone number"
                        value={formvalues.phone}
                        onChange={handleChange}
                        name="phone"
                      />
                    </Form.Item>
                  </div>
                  <div className="right">
                    <Form.Item
                      label="University"
                      name="university"
                      layout="vertical"
                      rules={[{ required: true, message: 'Please input your university!' }]}>
                      <Input
                        placeholder="Enter your university"
                        value={formvalues.university}
                        name="university"
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="formrow">
                  <Form.Item
                    label="Degree"
                    name="degree"
                    layout="vertical"
                    rules={[{ required: true, message: 'Please select highest level of education completed!' }]}>
                    <p className="smallanditalic"> Note: Please select highest level of education completed! </p>
                    <Radio.Group
                      value={formvalues.degree}
                      name="degree"
                      optionType="button"
                      onChange={handleChange}>
                      <Radio
                        defaultChecked
                        value="Undergraduate">
                        Undergraduate
                      </Radio>
                      <Radio value="Graduate">Graduate</Radio>
                      <Radio value="PhD">PhD</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>

                <div className="formrow fullwidthform">
                  {/* current address  */}

                  <Form.Item
                    label="Current Address"
                    name="address"
                    layout="vertical"
                    rules={[{ required: true, message: 'Please input your current address!' }]}>
                    <Input
                      placeholder="Enter your current address"
                      value={formvalues.address}
                      name="address"
                      onChange={handleChange}
                    />
                  </Form.Item>
                </div>

                <div className="formrow fullwidthform">
                  {/* current address  */}
                  <Form.Item
                    label="Explain in brief about your research interests. If we have an opening we will get back to you."
                    name="reason"
                    layout="vertical"
                    rules={[{ required: true, message: 'Please input your reason for joining the lab!' }]}>
                    <TextArea
                      rows={4}
                      value={formvalues.reason}
                      name="reason"
                      onChange={handleChange}
                      placeholder="Please explain your interest. A copy of your response will be sent back to you."
                    />
                  </Form.Item>
                </div>
                <div>
                  <p>
                    Note: Only submit if you are willing to relocate to Abu Dhabi, UAE. We do not offer remote positions.
                    <br />
                    <br />
                  </p>
                </div>

                <button
                  className="btnClr btnwithsvg"
                  onClick={() => {
                    console.log(formvalues);
                    setSending(true);
                  }}>
                  Submit Application {sending ? <Spin size="small" /> : <MdOutgoingMail />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
