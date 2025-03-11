import React, { FC } from "react";
import { titleDefaultProps, TitlePropsType } from "./type";
import { Typography } from "antd";

const { Title } = Typography;
const InnerTitle: FC<TitlePropsType> = (props: TitlePropsType) => {
  const { text, level, isCenter } = { ...titleDefaultProps, ...props };
  const levelSizeMap: Record<number, string> = {
    1: "24px",
    2: "20px",
    3: "16px",
  };
  function getFontSize(level: number | undefined): string {
    return levelSizeMap[level as number] ?? "16px";
  }
  return (
    <Title
      level={level}
      style={{
        textAlign: isCenter ? "center" : "start",
        fontSize: getFontSize(level),
        marginBottom: "0",
      }}
    >
      {text}
    </Title>
  );
};

export default InnerTitle;
