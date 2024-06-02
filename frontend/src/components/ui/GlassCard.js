import React, { useState } from "react";

import styles from "@/styles/glassCard.module.css";

function GlassCard(props) {
  return (
    <>
      <div className={`${styles.glassCard} ${props.customStyle}`}>
        {props.children}
      </div>
    </>
  );
}

export default GlassCard;
