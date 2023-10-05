import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponents from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavbar span={4}>
          <NavbarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts>
            <CardComponents />
            <CardComponents />
            <CardComponents />
            <CardComponents />
            <CardComponents />
            <CardComponents />
            <CardComponents />
            <CardComponents />
          </WrapperProducts>
          <Pagination
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            style={{ textAlign: "center", marginTop: "10px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
