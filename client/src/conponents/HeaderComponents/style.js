import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: blue;
  align-items: center;
`;
export const WrapperTextHeader = styled.span`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;
export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #fff;
`;
export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
`;
export const WrapperIconHeader = styled.span`
  font-size: 30px;
`;
