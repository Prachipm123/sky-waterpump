import React from "react";
import Link from "next/link";

import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";

import styles from "@/styles/shareBar.module.css";

const ShareBar = () => {
  return (
    <>
      <div className={styles.iconBar}>
        <Link
          target="_blank"
          href="#"
          className={styles.facebook}
        >
          <FaFacebookF style={{ fontSize: "1.2em" }} />
        </Link>
        <Link
          target="_blank"
          href="#"
          className={styles.twitter}
        >
          <BsTwitterX style={{ fontSize: "1.2em" }} />
        </Link>
        <Link
          target="_blank"
          href="#"
          className={styles.instagram}
        >
          <BsInstagram style={{ fontSize: "1.2em" }} />
        </Link>
        <Link
          target="_blank"
          href="#"
          className={styles.linkedin}
        >
          <FaLinkedinIn style={{ fontSize: "1.2em" }} />
        </Link>
        <Link
          target="_blank"
          href="#"
          className={styles.youtube}
        >
          <TfiYoutube style={{ fontSize: "1.2em" }} />
        </Link>
      </div>
    </>
  );
};

export default ShareBar;
