import React, { FC } from "react";
import styles from "./index.module.scss";
import EditCanvas from "./EditCanvas";
import useLoadFormData from "../../hooks/useLoadFormData";


const Edit: FC = function () {
  const { loading } = useLoadFormData()
  return (
    <div className={styles["edit-container"]}>
      <header className={styles.header}>Edit</header>
      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>Left</div>
          <main className={styles.main}>
            <div className={styles["canvas-wrapper"]}>
              <EditCanvas loading={loading} />
            </div>
          </main>
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
