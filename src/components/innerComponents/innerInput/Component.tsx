import React, { FC } from "react";
import { Typography, Input } from "antd";
import { InputPropsType, inputDefaultProps } from "./type";

const { Paragraph } = Typography;
const InnerInput: FC<InputPropsType> = function (props) {
  const { title, placeholder } = { ...inputDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  );
};

export default InnerInput;
