import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlassCard from "@/components/ui/GlassCard";
import React from "react";
import Image from "next/image";
import styles from "@/styles/blogPage.module.css";

const B3 = () => {
  return (
    <>
      <Header></Header>
      <GlassCard customStyle={styles.conatinerCard}>
        <h1 style={{ textAlign: "center" }}>Types of industrial pumps</h1>
        <br></br>

        <div style={{ textAlign: "center" }}>
          <Image
            src={"/images/blog/3.webp"}
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
          Industrial pumps are designed for harsh or heavy-duty applications.
          They convey a range of material types, including water and wastewater,
          chemicals, petroleum, oil, sludge and slurry, and food.
        </p>
        <br></br>
        <p>
          HAOSH PUMP has the right selection of industrial pumps as well as
          commercial and municipal pumps to fit your needs. We handle all types
          of applications – from water to aggressive chemicals, and everything
          in between. Our sales engineers can assist you with your selection and
          help ensure that your pump is operating at peak efficiency, no matter
          what your application is.
        </p>
        <br></br>

        <h2>Industrial pumps, commercial and municipal</h2>
        <br></br>

        <div className={styles.bullet}>
          <ul>
            <li>End suction</li>
            <li>ANSI</li>
            <li>Non-metallic (lined and sealed)</li>
            <li>Magnetic drive</li>
            <li>Sewage pumps</li>
            <li>Axial flow</li>
            <li>Vertical turbines</li>
            <li>Vane</li>
            <li>Pulp and Paper Processes</li>
            <li>API Processes</li>
          </ul>
        </div>
        <br></br>

        <p>
          Pumps are a key component of the way the world works today. Industrial
          pumps are part of most manufacturing processes. Commercial pumps keep
          office buildings open for business. Municipal pumps provide fresh
          water to our cities and remove wastewater from our cities.
        </p>
        <br></br>

        <p>
          Choosing the most appropriate pump for your application can ensure
          that it handles the task with the least amount of breakage, downtime
          or fluid contamination. There are many types of pumps on the market,
          each with its own strengths and weaknesses. Failure to select the
          right pump for a given use case can result in, at best, operational
          inefficiencies and, at worst, catastrophic equipment failure.
        </p>
        <br></br>
        <h2>Markets/applications served</h2>
        <br></br>

        <p>
          Each of our pumps is designed and manufactured to meet the specific
          needs of industrial and commercial systems. Depending on the type of
          pump, common applications may include:
        </p>
        <br></br>

        <div className={styles.bullet}>
          <ul>
            <li>Water movement</li>
            <li>Chemical processing</li>
            <li>High volume fluid management</li>
            <li>Pressurized water/fluid</li>
          </ul>
        </div>
        <br></br>

        <h2>Industrial pump types and examples</h2>
        <br></br>

        <div className={styles.bullet}>
          <ul>
            <li>
              End suction pumps – The pumped liquid increases in speed as it
              moves along the impeller’s vanes. The liquid then enters the worm
              housing where the diffusion process converts the high velocity
              into high pressure.
            </li>
            <li>
              ANSI pump – the only pump in the United States that is recognized
              as a dimensional standard by the American National Standards
              Institute.
            </li>
            <li>
              Non-metallic (lined and sealed) pumps – corrosion and wear
              resistant to withstand a variety of severe service applications.
            </li>
            <li>
              Magnetic Drive Pumps – Their main feature is that the motor’s
              shaft does not extend into the internal pump, thus eliminating the
              need for a shaft seal to prevent any leakage and thus reducing
              maintenance costs.
            </li>
            <li>
              Sump Pumps – are typically installed in a sump pit where water
              flows through a drain or through the natural migration of the
              soil.
            </li>
            <li>
              Axial flow pumps – consist of an axial impeller in a pipe that can
              be driven directly by a sealed motor.
            </li>
            <li>
              Vertical turbine pumps – designed to pump water from wells deep
              underground.
            </li>
            <li>
              Vane pumps – best suited to handle low viscosity liquids. No
              internal metal-to-metal contact.
            </li>
            <li>
              Pulp and Paper Process Pumps – Perfect for the pulp and paper
              industry, known for its tough abrasive processes.
            </li>
            <li>
              API Process Pumps– Meets American Petroleum Institute standards
              for pumps handling hydrocarbons.
            </li>
            <li>
              Split Pumps– Housing is divided into two separate chambers for
              lower cost for high flow applications. Impellers can be supported
              by bearings on both sides.
            </li>
            <li>
              Double suction pumps – receive suction liquid on both sides of the
              impeller, balancing the impeller thrust.
            </li>
            <li>
              Multi-stage pumps – use multiple impellers that can be mounted on
              the same or different shafts.
            </li>
            <li>
              Rotary gear pumps – the meshing of gears pumps fluid through
              displacement.
            </li>
          </ul>
        </div>
      </GlassCard>
      <Footer></Footer>
    </>
  );
};

export default B3;
