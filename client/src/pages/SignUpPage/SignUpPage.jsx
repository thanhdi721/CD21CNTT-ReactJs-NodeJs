import React from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import { useState } from "react";
import imageLogo from "../../assets/images/slider1.png";
import { Image } from "antd";
import InputForm from "../../components/InputForm/InputFrom";
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Hãy đăng ký tài khoản của bạn</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            ></span>
            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
            />
            <InputForm
              placeholder="comfirm password"
              type={isShowPassword ? "text" : "password"}
            />
          </div>

          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textbutton={"Đăng kí"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>

          {/* <p>
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          </p> */}
          <p>
            Bạn đã có tài khoản{" "}
            <WrapperTextLight onClick={handleNavigateSignIn}>
              {" "}
              Đăng nhập
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="iamge-logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại LTTD</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
