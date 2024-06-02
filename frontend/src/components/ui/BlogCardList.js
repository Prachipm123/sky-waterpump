import React, { useState } from "react";

import styles from "@/styles/blogCardList.module.css";

function BlogCardList(props) {
  return (
    <>
      <section className={styles.blogCardList}>{props.children}</section>
    </>
  );
}

export default BlogCardList;
