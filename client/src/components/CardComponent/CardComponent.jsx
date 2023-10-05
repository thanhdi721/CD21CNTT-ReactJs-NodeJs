import {} from "antd";
// import Meta from "antd/lib/card/Meta";
import { StarFilled } from "@ant-design/icons";
import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReporttext,
} from "./style";
import genuine from "../../assets/images/genuine.png";

const CardComponents = () => {
  return (
    <div>
      <WrapperCardStyle
        hoverable
        bodyStyle={{ padding: "10px" }}
        style={{
          width: 200,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <img
          src={genuine}
          alt=""
          style={{
            width: "68px",
            height: "14px",
            position: "absolute",
            top: -1,
            left: -1,
            borderTopLeftRadius: "3px",
          }}
        />
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReporttext>
          <span style={{ marginRight: "4px" }}>
            <span> 4.5</span>
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          </span>
          <span> | da ban 1000+</span>
        </WrapperReporttext>
        <WrapperPriceText>
          10.000.000D
          <WrapperDiscountText>-10%</WrapperDiscountText>
        </WrapperPriceText>
      </WrapperCardStyle>
    </div>
  );
};

export default CardComponents;
