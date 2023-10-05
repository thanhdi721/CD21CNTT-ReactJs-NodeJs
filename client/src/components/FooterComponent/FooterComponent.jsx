import { Col } from "antd";
import React from "react";

import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
  WrapperIconHeader,
} from "./style";
import Search from "antd/es/input/Search";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const FooterComponents = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>DKT Travel</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <>
            <Search
              placeholder="Nhập thông tin tìm kiếm..."
              allowClear
              enterButton="Tìm Kiếm"
              size="large"
            />
          </>
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <div style={{ display: "flex" }}>
              <WrapperIconHeader>
                <ShoppingCartOutlined />
              </WrapperIconHeader>

              <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default FooterComponents;
