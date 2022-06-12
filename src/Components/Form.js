import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

const BasicLoginForm = ({ onFinish, loading }) => {
  return (
    <Form
      name="basic-login-form"
      className="login-form"
      onFinish={onFinish}
      initialValues={{
        remember: true,
      }}
    >
      {/* Email */}
      <Form.Item
        //   label="email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter you Email!",
          },
        ]}
      >
        <Input placeholder="Email Address *" />
      </Form.Item>

      {/* Password */}
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please Enter your Password!",
          },
        ]}
      >
        <Input 
        type="password" 
        placeholder="Password *" />
      </Form.Item>

      {/* Login Button */}
      <Form.Item>
        <Button
          disabled={loading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Login
        </Button>
      </Form.Item>

      {/* Reember me */}
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox className="left">Remember me</Checkbox>
      </Form.Item>

      {/* Forgot Password */}
      <Form.Item>
        <a className="login-form-forgot" href="/">
          Forgot Password
        </a>
      </Form.Item>
    </Form>
  );
};

export default BasicLoginForm;
