import React from "react";
import { Row, Col, Image } from "antd";
import imageProduct from "../../assets/images/product1.png";
import imageProductSmall from "../../assets/images/product2.png";
import { WrapperStyleImageSmall } from "./style";
const ProductDetailsComponent = () => {
  return (
    <Row style={{ padding: "16px" }}>
      <Col span={10}>
        <Image
          src={imageProduct}
          alt="image product"
          preview={false}
          style={{ width: "368px", height: "368px" }}
        />
        <Row style={{ paddingTop: "10px" }}>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </Col>
        </Row>
      </Col>
      <Col span={14}></Col>
    </Row>
  );
};

export default ProductDetailsComponent;
