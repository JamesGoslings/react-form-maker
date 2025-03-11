/**
 * @description 输入框组件
 */

import Component from "./Component";
import { inputDefaultProps } from "./type";

export * from "./type";

const InnerInputConfig = {
  title: "输入框",
  type: "innerInput",
  Component,
  defaultProps: inputDefaultProps,
};

export default InnerInputConfig;
