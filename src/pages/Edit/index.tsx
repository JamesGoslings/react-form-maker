import React, { FC, useEffect } from "react";
import styles from "./index.module.scss";
import EditCanvas from "./EditCanvas";
import axios from "axios";


const Edit: FC = function () {
  useEffect(()=>{
    axios.get("/api/test").then(data => console.log(data))
  }, [])
  return (
    <div className={styles["edit-container"]}>
      <header className={styles.header}>Edit</header>
      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>Left</div>
          <main className={styles.main}>
            <div className={styles["canvas-wrapper"]}>
              <EditCanvas />
            </div>
          </main>
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
