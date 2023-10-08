import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponents from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div
      style={{
        width: "100%",
        background: "#efefef",
        height: "calc(100vh - 64px)",
      }}
    >
      <div style={{ width: "1270px", margin: "0 auto", height: "100%" }}>
        <Row
          style={{
            flexWrap: "nowrap",
            paddingTop: "10px",
            height: "calc(100% - 20px)",
          }}
        >
          <WrapperNavbar span={4}>
            <NavbarComponent />
          </WrapperNavbar>
          <Col
            span={20}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
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
    </div>
  );
};

export default TypeProductPage;
