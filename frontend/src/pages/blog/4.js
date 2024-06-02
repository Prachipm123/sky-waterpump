import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlassCard from "@/components/ui/GlassCard";
import React from "react";
import Image from "next/image";
import styles from "@/styles/blogPage.module.css";

const B4 = () => {
  return (
    <>
      <Header></Header>
      <GlassCard customStyle={styles.conatinerCard}>
        <h1 style={{ textAlign: "center" }}>
          What is positive displacement pump?
        </h1>
        <br></br>

        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/4.webp"}
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
          Positive displacement (PD) pumps move fluid by repeatedly closing a
          fixed volume and moving it mechanically through the system. Simply
          put, positive displacement pump is a pump that uses the change in
          volume within the pump cylinder to move fluid. The pumping action is
          cyclic and can be driven by pistons, screws, gears, rollers,
          diaphragms or vanes.
        </p>
        <br></br>
        <h2>Positive displacement pump working principle</h2>
        <br></br>
        <p>
          There are many types of positive displacement pump designs, but most
          can be divided into two categories: reciprocating and rotary.
        </p>
        <br></br>
        <h3>Reciprocating positive displacement pumps</h3>
        <br></br>

        <p>
          Reciprocating positive displacement pumps work by repeated back and
          forth motions (strokes) of the piston, plunger or diaphragm (see
          figure below). These cycles are called reciprocating.
        </p>
        <br></br>

        <p>
          In a piston pump, the first stroke of the piston creates a vacuum that
          opens the inlet valve, closes the outlet valve and draws fluid into
          the piston chamber (suction phase). When the piston motion is
          reversed, the inlet valve, now under pressure, closes and the outlet
          valve opens, allowing the fluid in the piston chamber to be expelled
          (compression phase). A bicycle pump is a simple example. Piston pumps
          can also be double acting, with inlet and outlet valves on either side
          of the piston. While one side of the piston is in the suction state,
          the other side is in the compression state. More complex radial
          versions are often used in industrial applications.
        </p>
        <br></br>

        <p>
          Piston pumps operate in a similar manner. The volume of fluid moved by
          a piston pump depends on the cylinder volume; in a plunger pump, it
          depends on the plunger size. The seal around the piston or plunger is
          important to maintain the pumping action and avoid leakage. In
          general, the piston pump seal is easier to maintain because it is
          fixed at the top of the pump cylinder, while the seal around the
          piston moves up and down repeatedly in the pump chamber.
        </p>
        <br></br>

        <p>
          Diaphragm pumps use a flexible membrane instead of a piston or plunger
          to move the fluid. By expanding the diaphragm, the volume of the
          pumping chamber is increased and fluid is drawn into the pump.
          Compressing the diaphragm reduces the volume and discharges some
          fluid. Diaphragm pumps have the advantage of a sealing system, making
          them ideal for pumping hazardous fluids.
        </p>
        <br></br>
        <p>
          The cyclic action of a reciprocating pump creates pulses during
          discharge, with the fluid accelerating during the compression phase
          and decelerating during the suction phase. This can cause damaging
          vibrations in the installation and is often damped or smoothed in some
          way. Pulsation can also be minimized by using two (or more) pistons,
          plungers or diaphragms, one in the compression phase and the other in
          the suction phase.
        </p>
        <br></br>
        <p>
          The repeatable and predictable action of reciprocating pumps makes
          them ideal for applications requiring precise metering or dosing. By
          varying the stroke rate or length, it is possible to provide a
          measured amount of fluid to be pumped.
        </p>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/b4.webp"}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "60%",
              height: "250px",
              borderRadius: "16px",
              border: "1px solid grey",
            }}
            alt="Image"
          />
        </div>
        <br></br>
        <h3>Rotary displacement pumps</h3>
        <br></br>

        <p>
          Rotary positive displacement pumps use the action of a rotating gear
          or gears to transfer fluid rather than the back and forth motion of a
          reciprocating pump. The rotating element forms a fluid seal with the
          pump casing and creates suction at the pump inlet. The fluid being
          drawn into the pump is enclosed within the teeth of its rotating gear
          or gears and transferred to the discharge port. The simplest example
          of a rotary displacement pump is a gear pump. Gear pumps come in two
          basic designs: external and internal (see figure below).
        </p>
        <br></br>

        <p>
          External gear pumps consist of two interlocking gears supported by
          separate shafts (one or both of these shafts can be driven). The
          rotation of the gears traps fluid between the teeth, moving it from
          the inlet to the discharge port around the housing. Because they are
          interlocked, no fluid is transmitted back through the center between
          the gears. The tight tolerances between the gears and housing allow
          the pump to create suction at the inlet and prevent fluid from leaking
          back out the discharge side. Low viscosity fluids are more likely to
          leak or “slip”.
        </p>
        <br></br>

        <p>
          Internal gear pumps work on the same principle, but with two
          interlocking gears of different sizes, one rotating inside the other.
          The cavity between the two gears is filled with fluid at the inlet and
          conveyed to the discharge port, where it is discharged by the action
          of the smaller gear.
        </p>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/b41.webp"}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "60%",
              height: "250px",
              borderRadius: "16px",
              border: "1px solid grey",
            }}
            alt="Image"
          />
        </div>
        <br></br>
        <p>
          Gear pumps require lubrication of the fluid being pumped and are ideal
          for pumping oil and other high viscosity fluids. For this reason, gear
          pumps should not be idle. The tight tolerances between the gears and
          housing mean that these types of pumps are prone to wear when used
          with abrasive fluids or feeds containing entrained solids.
        </p>
        <br></br>
        <p>
          Two other designs similar to gear pumps are lobe pumps and vane pumps.
        </p>
        <br></br>
        <p>
          In the case of a lobe pump, the rotating element is a cam rather than
          a gear. The biggest advantage of this design is that the vanes do not
          come into contact with each other during pumping, thus reducing wear,
          contamination and fluid shear. A vane pump uses a set of movable vanes
          (spring loaded, hydraulic or flexible) mounted in an eccentric rotor.
          The vanes maintain a tight seal with the casing wall and deliver the
          trapped fluid to the discharge port.
        </p>
        <br></br>
        <p>
          Another class of rotary pumps uses one or more webbed screws to convey
          fluid along the screw shaft. The basic principle of these pumps is
          that of the Archimedean screw, a design that has been used for
          thousands of years in irrigation.
        </p>
        <br></br>
        <h2>
          What are the main features and advantages of positive
          displacementpump?
        </h2>
        <br></br>
        <p>
          There are two main families of pumps: positive displacement pumps and
          centrifugal pumps. Centrifugal pumps can provide higher flow rates and
          can be used with lower viscosity liquids. In some chemical plants, 90%
          of the pumps are centrifugal. However, there are many applications
          where positive displacement pumps are preferred. For example, they can
          handle higher viscosity fluids and can operate more efficiently at
          high pressures and relatively low flow rates. They are also more
          accurate when metering is an important consideration.
        </p>
        <br></br>
        <h2>What are the limitations of a positive displacement pump?</h2>
        <br></br>
        <p>
          Displacement pumps are more complex and more difficult to maintain
          than centrifugal pumps. They also do not produce the high flow
          characteristics of centrifugal pumps.
        </p>
        <br></br>
        <p>
          Displacement pumps are not as capable of handling low viscosity fluids
          as centrifugal pumps. To generate suction and reduce slippage and
          leakage, rotary pumps rely on seals between their rotating elements
          and the pump casing. The use of low-viscosity fluids can significantly
          reduce this situation. Similarly, it is more difficult to prevent
          valve slippage in reciprocating pumps with low-viscosity feeds because
          of the high pressures generated during the pumping action.
        </p>
        <br></br>
        <p>
          Displacement pumps are more complex and more difficult to maintain
          than centrifugal pumps. They also do not produce the high flow
          characteristics of centrifugal pumps.
        </p>
        <br></br>
        <p>
          Pulsating discharge is also a characteristic of positive displacement
          pump designs, especially reciprocating pump designs. Pulsation can
          cause noise and vibration in the piping system as well as cavitation
          problems that eventually lead to damage or failure. Pulsation can be
          reduced by using multiple pump cylinders and pulsation dampers, but
          this requires careful system design. Centrifugal pumps, on the other
          hand, produce a smooth, constant flow.
        </p>
        <br></br>
        <p>
          The back and forth motion of a reciprocating pump can also be a source
          of vibration and noise. Therefore, it is important to build a very
          strong foundation for this type of pump. Because of the high pressures
          generated during the pumping cycle, it is also important that the pump
          or discharge line has some form of pressure relief in the event of a
          blockage. Centrifugal pumps do not require overpressure protection: in
          this case, the fluid is simply recirculated.
        </p>
        <br></br>
        <p>
          A feed containing large amounts of abrasive solids can cause excessive
          wear on components of all types of pumps, especially valves and seals.
          Although the components of displacement pumps operate at much lower
          speeds than centrifugal pumps, they are still susceptible to these
          problems. This is especially true for piston and plunger reciprocating
          pumps and gear rotary pumps. With this type of feed, a lobe, screw or
          diaphragm pump may be suitable for more demanding applications.
        </p>
        <br></br>
        <h2>What are the main applications of positive displacement pumps?</h2>
        <br></br>
        <p>
          Positive displacement pumps are typically used to pump high viscosity
          fluids such as oils, paints, resins or foods. They are preferred in
          any application where precise metering or high pressure output is
          required. Unlike centrifugal pumps, the output of positive
          displacement pumps is not affected by pressure, so they are also often
          preferred in any situation where supply is irregular. Most are
          self-priming.
        </p>
        <br></br>
        <h2>Summary</h2>
        <br></br>
        <p>
          Positive displacement pumps move fluid by repeatedly closing a fixed
          volume with the help of seals or valves and moving the fluid
          mechanically through the system. The pumping action is cyclic and can
          be driven by a piston, screw, gear, vane, diaphragm or vanes. There
          are two main types: reciprocating and rotary.
        </p>
        <br></br>
        <p>
          Volumetric pumps are suitable for applications involving high
          viscosity fluids (e.g. thick oils and slurries), especially at high
          pressures, for complex feeds (e.g. emulsions, food or biological
          fluids), and where precise metering is required.
        </p>
        <br></br>
      </GlassCard>
      <Footer></Footer>
    </>
  );
};

export default B4;
