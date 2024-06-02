import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlassCard from "@/components/ui/GlassCard";
import React from "react";
import Image from "next/image";
import styles from "@/styles/blogPage.module.css";

const B6 = () => {
  return (
    <>
      <Header></Header>
      <GlassCard customStyle={styles.conatinerCard}>
        <h1 style={{ textAlign: "center" }}>
          Centrifugal pump working principle
        </h1>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/6.webp"}
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
        <h2>What is a centrifugal pump?</h2>
        <br></br>
        <p>
          A centrifugal pump is a mechanical device that moves fluid by
          transferring rotational energy from one or more driven rotors, called
          impellers. The fluid enters the rapidly rotating impeller along its
          axis and is discharged by centrifugal force along its circumference
          through the tips of the impeller’s vanes. The impeller’s action
          increases the velocity and pressure of the fluid and directs it toward
          the pump outlet. The pump casing is specifically designed to compress
          the fluid from the pump inlet, direct it to the impeller, and then
          slow and control the fluid before discharging.
        </p>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/b6.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "90%",
              height: "300px",
              borderRadius: "16px",
              border: "1px solid grey",
            }}
            alt="Image"
          />
        </div>
        <br></br>
        <h2>How does a centrifugal pump work?</h2>
        <br></br>
        <p>
          The impeller is the key component of a centrifugal pump. It consists
          of a series of curved vanes. These are usually sandwiched between two
          discs (closed impellers). For fluids with entrained solids, open or
          semi-open impellers (supported by a single disc) are preferred (refer
          to the figure below).
        </p>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/b61.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "90%",
              height: "300px",
              borderRadius: "16px",
              border: "1px solid grey",
            }}
            alt="Image"
          />
        </div>
        <br></br>
        <p>
          The fluid enters the impeller along its shaft (“eye”) and flows out
          along the circumference between the blades. The impeller, located on
          the other side of the eye, is connected to the motor via the drive
          shaft and rotates at high speed (typically 500-5000 rpm). The
          rotational motion of the impeller accelerates the fluid through the
          impeller vanes and into the pump casing.
        </p>
        <br></br>
        <p>
          There are two basic designs of pump casing: the worm casing and the
          diffuser. The purpose of both designs is to convert the fluid flow
          into a controlled discharge under pressure.
        </p>
        <br></br>
        <p>
          In the worm casing, the impeller is offset, effectively creating a
          curved funnel with a cross-sectional area that increases toward the
          pump outlet. This design results in an increase in fluid pressure
          toward the outlet (refer to the figure below).
        </p>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/b62.webp"}
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
          The same basic principle applies to the diffuser design. In this case,
          the fluid pressure increases as the fluid exits between a fixed set of
          blades surrounding the impeller (refer to the figure below). Diffuser
          designs can be customized for specific applications and are therefore
          more efficient. When it is advantageous to avoid additional shrinkage
          of the diffuser blades, the worm gear is better suited for
          applications involving entrained solids or high viscosity fluids. The
          asymmetry of the worm housing design can lead to greater wear on the
          impeller and drive shaft.
        </p>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/b63.webp"}
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
        <h2>What are the main features of a centrifugal pump?</h2>
        <br></br>
        <p>
          There are two main pump families: centrifugal pumps and displacement
          pumps. Compared to the latter, centrifugal pumps are usually specified
          for higher flow rates and pumping low viscosity liquids down to 0.1
          cP. In some chemical plants, 90% of the pumps are centrifugal pumps.
          However, there are many applications where positive displacement pumps
          are preferred.
        </p>
        <br></br>
        <h2>What are the limitations of centrifugal pumps?</h2>
        <br></br>
        <p>
          The efficient operation of centrifugal pumps relies on the constant
          high speed rotation of their impellers. For high viscosity feeds,
          centrifugal pumps become increasingly inefficient: resistance is
          greater and higher pressures are required to maintain a specific flow
          rate. In general, therefore, centrifugal pumps are suitable for
          low-pressure, high-volume, pumped liquid applications with viscosities
          between 0.1 and 200 cP.
        </p>
        <br></br>
        <p>
          Slurries such as mud or high-viscosity oils can cause excessive wear
          and overheating, which can lead to damage and premature failure.
          Volumetric pumps typically operate at fairly low speeds and are less
          prone to these problems.
        </p>
        <br></br>
        <p>
          Any shear-sensitive pumping media (emulsions, slurries or separation
          of biological fluids) can also be damaged by the high speed of the
          centrifugal pump impeller. In this case, the lower speed of the
          positive displacement pump is preferred.
        </p>
        <br></br>
        <p>
          Another limitation is that, unlike positive displacement pumps, a
          centrifugal pump cannot provide suction during drying: it must first
          be filled with the pumped fluid. Therefore, centrifugal pumps are not
          suitable for any application with intermittent supply. In addition, if
          the feed pressure is variable, a centrifugal pump will produce a
          variable flow rate; a positive displacement pump is not sensitive to
          pressure changes and will provide a constant output. Therefore, a
          positive displacement pump is preferred in applications where precise
          metering is required.
        </p>
        <br></br>
        <h2>Conclusion</h2>
        <br></br>
        <p>
          Centrifugal pumps operate by transferring rotational energy from one
          or more driven rotors, called impellers. The impellers act to increase
          the speed and pressure of the fluid and direct it to the pump outlet.
          The centrifugal pump is simple in design and easy to operate and
          maintain.
        </p>
        <br></br>
        <p>
          The centrifugal pump design provides a simple and cost effective
          solution for most low pressure, high volume pumping applications
          involving low viscosity fluids such as water, solvents, chemicals and
          light oils. Typical applications include water supply and circulation
          in petrochemical plants, irrigation and chemical transfer. Volumetric
          pumps are suitable for applications involving high viscosity fluids
          such as thick oils and slurries, especially at high pressures, for
          complex feeds such as emulsions, food or biological fluids, and when
          precise metering is required. For more information about types of
          pumps, please check The classification of the pump.
        </p>
      </GlassCard>
      <Footer></Footer>
    </>
  );
};

export default B6;
