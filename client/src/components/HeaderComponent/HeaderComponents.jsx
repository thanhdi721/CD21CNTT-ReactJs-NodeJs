import { Badge, Col } from "antd";
import React from "react";

import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
  WrapperHeaderAccout,
} from "./style";
import ButttonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const HeaderComponents = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        background: "#9255FD",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>DKT Travel</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButttonInputSearch
            size="large"
            bordered={false}
            textbutton="Tìm kiếm"
            placeholder="input search text"
            backgroundColorButton="#5a20c1"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccout>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>
          <div>
            <div style={{ display: "flex" }}>
              <Badge count={4} size="small">
                <ShoppingCartOutlined
                  style={{ fontSize: "30px", color: "#fff" }}
                />
              </Badge>

              <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponents;
