import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/blogCard.module.css";

function BlogCard(props) {
  return (
    <>
      <article className={styles.blogCard}>
        <div className={styles.blogCardImg}>
          <Image
            src={props.imageURL}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "16px 16px 0 0",
            }}
            alt="Image"
          />
        </div>
        <div className={styles.blogCardContent}>
          <div className={styles.blogCardData}>
            <h2>
              <Link href={props.link}>{props.title}</Link>
            </h2>
            <br />

            <span>{props.date}</span>
            <br />
            <br />
            <p>{props.content}</p>
          </div>
          <div className={styles.blogBtn}>
            <Link href={props.link}>Read More</Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default BlogCard;
