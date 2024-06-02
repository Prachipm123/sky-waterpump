import React from "react";
import Image from "next/image";
import styles from "@/styles/imageOverlay.module.css";

function ImageOverlay(props) {
  return (
    <>
      <div className={`${styles.imageContainer} ${props.customStyle}`}>
        <Image src={props.imageUrl} width={1000000} height={2000000} alt="" />
        <div className={`${styles.overlay} ${props.customTextStyle}`}>
          {props.text}
        </div>
      </div>
    </>
  );
}

export default ImageOverlay;
