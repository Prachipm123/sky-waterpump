import React from "react";
import styles from "@/styles/responsiveContainer.module.css";

const ResponsiveContainer = (props) => {
  return (
    <>
      <div className={`${styles.row} ${props.customStyle}`}>
        {props.children}
      </div>
    </>
  );
};

export default ResponsiveContainer;
