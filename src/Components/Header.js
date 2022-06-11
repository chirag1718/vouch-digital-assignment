import { Button, PageHeader } from "antd";
import React from "react";

const Header = () => (
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      title="ATools"
      subTitle="."
      extra={[
        <Button className="header-btn trial_btn" key={1}>Start Free Trial</Button>,
        <Button className="header-btn login_btn" key={1}>Login</Button>
      ]}
    ></PageHeader>
  </div>
);

export default Header