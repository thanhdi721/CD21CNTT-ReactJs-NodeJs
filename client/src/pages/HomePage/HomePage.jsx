import React from "react";
import TypeProduct from "../../conponents/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponents from "../../conponents/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.jpg";
import CardComponents from "../../conponents/CardComponent/CardComponent";
import NavbarComponents from "../../conponents/NavbarComponent/NavbarComponent";

const HomePage = () => {
  const arr = ["TV", "Tủ Lạnh", "Laptop"];

  return (
    <>
      <div style={{ padding: "0px 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
        HomePage
      </div>
      <div
        id="container"
        style={{
          background: "#efefef",
          padding: "0px 120px",
          height: "1000px",
        }}
      >
        <SliderComponents arrImages={[slider1, slider2, slider3]} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardComponents />
        </div>
        <NavbarComponents />
      </div>
    </>
  );
};

export default HomePage;
