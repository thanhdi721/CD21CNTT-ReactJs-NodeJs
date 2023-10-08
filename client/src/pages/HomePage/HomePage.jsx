import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProduct,
} from "./style";
import SliderComponents from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.jpg";
import CardComponents from "../../components/CardComponent/CardComponent";

// import NavbarComponents from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
  const arr = ["TV", "Tủ Lạnh", "Laptop"];

  return (
    <>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
        HomePage
      </div>
      <div
        className="body"
        style={{ width: "100%", backgroundColor: "#efefef" }}
      >
        <div
          id="container"
          style={{ height: "1000px", width: "1270px", margin: "0 auto" }}
        >
          <SliderComponents arrImages={[slider1, slider2, slider3]} />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
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
              <CardComponents />
              <CardComponents />
              <CardComponents />
            </WrapperProducts>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              textbutton="xem thêm"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11,116,229)",
                color: "rgb(11,116,229)",
                width: "240px",
                heigth: "38px",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
