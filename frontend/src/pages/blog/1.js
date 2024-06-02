import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlassCard from "@/components/ui/GlassCard";
import React from "react";
import Image from "next/image";
import styles from "@/styles/blogPage.module.css";

const B1 = () => {
  return (
    <>
      <Header></Header>
      <GlassCard customStyle={styles.conatinerCard}>
        <h1 style={{ textAlign: "center" }}>How does a solenoid pump work?</h1>
        <br></br>

        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/1.webp"}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "40%",
              height: "200px",
              borderRadius: "16px",
            }}
            alt="Image"
          />
        </div>
        <br></br>

        <p>
          Solenoid dosing pump is a form of displacement pump that uses a
          diaphragm and solenoid assembly to discharge fluid into a discharge
          line.
        </p>
        <br></br>
        <p>
          The solenoid “actuator” consists of a solenoid and spring assembly
          that is activated/deactivated by a series of electrical pulses. When
          the solenoid is activated, the solenoid pushes against the diaphragm,
          displacing the fluid. When the solenoid is deactivated, the spring
          mechanism returns the diaphragm, allowing more fluid to enter the
          chamber from the suction line in preparation for delivery.
        </p>
        <br></br>

        <p>
          The dosing aspect is determined by programming the pump to deliver at
          a rate. This rate can be set at will by the operator, or it can be set
          based on an external signal, such as from a sensor probe that measures
          pH. The pump can then proportionally meter its fluid – in this case,
          it may meter caustic soda based on the correct acidic effluent.
        </p>
        <br></br>

        <p>
          Some electromagnetic metering pumps also allow variable stroke lengths
          and stroke rates. This allows very high “regulation ratios”, i.e.,
          very high ratios between maximum and minimum potential flow rates.
        </p>
        <br></br>

        <p>
          Solenoid dosing pump is a form of displacement pump that uses a
          diaphragm and solenoid assembly to discharge fluid into a discharge
          line.
        </p>
        <br></br>

        <p>
          Solenoid metering pumps or metering pumps are commonly used in water
          treatment applications such as cooling towers, boilers and industrial
          wastewater treatment; however, they are used in many different
          chemical processes around the world.
        </p>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/b1.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "90%",
              height: "250px",
              borderRadius: "16px",
              border: "1px solid grey",
            }}
            alt="Image"
          />
        </div>
        <br></br>

        <p>
          While there are many types of metering pumps, electromagnetically
          driven positive displacement metering pumps are preferred in chemical
          feed applications due to their low cost, ease of use, reliability and
          high accuracy.
        </p>
      </GlassCard>
      <Footer></Footer>
    </>
  );
};

export default B1;
