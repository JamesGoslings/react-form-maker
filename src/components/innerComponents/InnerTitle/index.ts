/**
 * @description 输入框组件
 */

import Component from "./Component";
import { titleDefaultProps } from "./type";

export * from "./type";

const InnerTitleConfig = {
  title: "标题",
  type: "innerTitle",
  Component,
  defaultProps: titleDefaultProps,
};

export default InnerTitleConfig;
