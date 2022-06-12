import React from "react";
import axios from "axios";
import BasicLoginForm from "./Form";
import Heading from "./Form-Heading";
import Subtitle from "./Form-Subtitle";
import { useState } from "react";
import AlertMessage from "./Form-Alert";

const initialStatus = {
  statusAvailable: false,
  status: {
    isLogin: false,
    message: null,
  },
};

const LoginForm = () => {
  const [loginStatus, setIsLogin] = useState(initialStatus);
  const [isLoding, setIsLoading] = useState(false);
  const onFinish = (values) => {
    setIsLoading(true);
    const userData = {
      email: values.email,
      password: values.password,
    };

    axios
      .post("https://reqres.in/api/login", userData)
      .then(function (response) {
        setIsLoading(false);
        setIsLogin({
          statusAvailable: true,
          status: {
            isLogin: true,
            type: "success",
            message: "Login successful",
          },
        });
        setTimeout(() => {
          setIsLogin(initialStatus);
        }, 2000);
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsLogin({
          statusAvailable: true,
          status: {
            isLogin: false,
            type: "error",
            message: "Invalid credentials",
          },
        });
        setTimeout(() => {
          setIsLogin(initialStatus);
        }, 1500);
      });
  };

  return (
    <div>
      <Heading text="Welocme Back" />
      <Subtitle text="Subtitle text goes here" />
      <BasicLoginForm onFinish={onFinish} loading={isLoding} />
      <AlertMessage
        loading={isLoding}
        showAlert={loginStatus.statusAvailable}
        type={loginStatus.status.type}
        message={loginStatus.status.message}
      />
    </div>
  );
};

export default LoginForm;
