import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogCard from "@/components/ui/BlogCard";
import BlogCardList from "@/components/ui/BlogCardList";
import React from "react";

const Blog = () => {
  return (
    <>
      <Header></Header>
      {/* <ImageOverlay
    imageUrl="/images/bg-title.jpeg"
    text="BLOG"
    height="200"
    width="1000"
  /> */}
      <BlogCardList>
        <BlogCard
          imageURL="/images/blog/1.webp"
          title="How does a solenoid pump work?"
          date="May 8, 2020"
          content="Solenoid dosing pump is a form of displacement pump that uses a diaphragm and solenoid 
          assembly to discharge fluid into a discharge line. The solenoid…"
          link="/blog/1"
        ></BlogCard>
        <BlogCard
          imageURL="/images/blog/2.webp"
          title="Water pump procurement guide"
          date="February 26, 2020"
          content="Water pumps are extremely versatile tools that can solve a variety 
          of problems and make your life easier than you ever thought possible. From a…"
          link="/blog/2"
        ></BlogCard>
        <BlogCard
          imageURL="/images/blog/3.webp"
          title="Types of industrial pumps"
          date="October 11, 2019"
          content="Industrial pumps are designed for harsh or heavy-duty applications. 
          They convey a range of material types, including water and wastewater, 
          chemicals, petroleum, oil…"
          link="/blog/3"
        ></BlogCard>
        <BlogCard
          imageURL="/images/blog/4.webp"
          title="What is positive displacement pump?"
          date="September 13, 2019"
          content="What is positive displacement pump? Positive displacement (PD) 
          pumps move fluid by repeatedly closing a fixed volume and moving it mechanically 
          through..."
          link="/blog/4"
        ></BlogCard>
        <BlogCard
          imageURL="/images/blog/5.webp"
          title="Mechanical seal types for centrifugal pump"
          date="July 19, 2019"
          content="Mechanical seals are a key component in centrifugal pump systems. 
          These devices maintain the integrity of the pump system by preventing fluid 
          leakage and keeping…"
          link="/blog/5"
        ></BlogCard>
        <BlogCard
          imageURL="/images/blog/6.webp"
          title="Centrifugal pump working principle"
          date="June 21, 2019"
          content="What is a centrifugal pump? A centrifugal pump is a mechanical device 
          that moves fluid by transferring rotational energy from one or more driven rotors…"
          link="/blog/6"
        ></BlogCard>
        <BlogCard
          imageURL="/images/blog/7.webp"
          title="What is slurry pump?"
          date="May 28, 2019"
          content="Slurry is one of the most challenging fluids to work with. It is highly 
          abrasive, thick, sometimes corrosive, and contains a high concentration of solids...."
          link="/blog/7"
        ></BlogCard>
      </BlogCardList>
      <Footer></Footer>
    </>
  );
};

export default Blog;
