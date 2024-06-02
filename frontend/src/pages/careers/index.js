import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CareerForm from "@/components/ui/CareerForm";
import GlassCard from "@/components/ui/GlassCard";
import ResponsiveContainer from "@/components/ui/ResponsiveContainer";
import styles from "@/styles/careers.module.css";

import Image from "next/image";

import React from "react";

const Careers = () => {
  return (
    <>
      <Header></Header>

      <Image
        src="/images/career/banner.png"
        width={1000000}
        height={1000000}
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="Image"
      />

      <div className="container">
        <br />
        <GlassCard>
          <ResponsiveContainer>
            <div className={styles.career_content}>
              <h1 style={{ textAlign: "center" }}>Current Openings</h1>
              <br></br>
              <br></br>
              <div className={styles.career_card}>
                <strong style={{ fontSize: "18px" }}>
                  Production Department
                </strong>

                <hr className={styles.shortHr} />
                <span>
                  <strong>Designation:– </strong>CNC Machine Shop Supervisor /
                  Manager
                </span>
                <p>
                  <strong>Experience :– </strong>More than 4-5 Years Experience
                </p>
                <p>
                  <strong>Location :– </strong>Ahmedabad
                </p>
              </div>
              <br />
              <div className={styles.career_card}>
                <strong style={{ fontSize: "18px" }}>
                  Sales & Marketing Department
                </strong>

                <hr className={styles.shortHr} />
                <span>
                  <strong>Designation:– </strong>Sr. Marketing Executive / Area
                  Incharge
                </span>
                <p>
                  <strong>Experience :– </strong>More than 1 Years Experience
                </p>
                <p>
                  <strong>Location :– </strong>Ahmedabad
                </p>
              </div>
              <div className={styles.career_card}>
                <strong style={{ fontSize: "18px" }}>Service Department</strong>

                <hr className={styles.shortHr} />
                <span>
                  <strong>Designation:– </strong>Service Engineer
                </span>
                <p>
                  <strong>Experience :– </strong>More than 2 Years Experience
                </p>
                <p>
                  <strong>Location :– </strong>Ahmedabad
                </p>
              </div>
              <div className={styles.career_card}>
                <strong style={{ fontSize: "18px" }}>
                  Purchase Department
                </strong>

                <hr className={styles.shortHr} />
                <span>
                  <strong>Designation:– </strong>Purchase Manager / Engineer
                </span>
                <p>
                  <strong>Experience :– </strong>More than 2 Years Experience
                </p>
                <p>
                  <strong>Location :– </strong>Ahmedabad
                </p>
              </div>
              <div className={styles.career_card}>
                <strong style={{ fontSize: "18px" }}>
                  Industrial and CBS Sales Department
                </strong>

                <hr className={styles.shortHr} />
                <span>
                  <strong>Designation:– </strong>CBS Sales & Marketing Manager /
                  Engineer
                </span>
                <p>
                  <strong>Experience :– </strong>More than 5 Years Experience
                </p>
                <p>
                  <strong>Location :– </strong>Ahmedabad
                </p>
              </div>
              <br />
            </div>

            <div className={styles.career_form}>
              <GlassCard>
                <CareerForm></CareerForm>
              </GlassCard>
            </div>
          </ResponsiveContainer>
        </GlassCard>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Careers;
