import React, { FC } from "react";
import styles from "./index.module.scss";
import { Spin } from "antd";

import InnerInput from "../../../components/innerComponents/InnerInput/Component";
import InnerTitle from "../../../components/innerComponents/InnerTitle/Component";

type PropsType = {
  loading: boolean;
};
const EditCanvas: FC<PropsType> = function ({ loading }: PropsType) {
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Spin />
      </div>
    );
  }
  return (
    <div className={styles.canvas}>
      <div className={styles["canvas-wrapper"]}>
        <div className={styles.component}>
          <InnerTitle level={1} text="标题" />
        </div>
      </div>
      <div className={styles["canvas-wrapper"]}>
        <div className={styles.component}>
          <InnerInput title="输入框" />
        </div>
      </div>
    </div>
  );
};

export default EditCanvas;
