import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../footer/page";

function Courses() {
  return (
    <div>
      <div className="courses-sec">
        <h1 className="heading-one">Find a Course</h1>
        <h1 className="heading-two">Featured Courses</h1>
      </div>
      <div className="border-line"></div>

      <div className="main-grid">
        <div className="grid-box">
          <div className="grid-temp">
            <Image
              src={"/pythone.jpeg"}
              alt="python"
              width={300}
              height={300}
              className="grid-img"
            />
            <h2 className="grid-heading">Python Programming</h2>
            <p className="grid-para">
              Explore Python and how it powers the web with frameworks like
              Django and Flask. Build secure and scalable web applications.
            </p>
            <Link href={"/apply"}>
              <button className="grid-btn">Enroll Now</button>
            </Link>
          </div>
          <div className="grid-temp">
            <Image
              src={"/frontend.jpeg"}
              alt="frontend"
              width={300}
              height={300}
              className="grid-img"
            />
            <h2 className="grid-heading">Frontend Development</h2>
            <p className="grid-para">
              Master the art of creating interactive interfaces with HTML, CSS,
              and JavaScript with modern frontend framework.
            </p>
            <Link href={"/apply"}>
              <button className="grid-btn">Enroll Now</button>
            </Link>
          </div>
          <div className="grid-temp">
            <Image
              src={"/book.webp"}
              alt="javascript"
              width={300}
              height={300}
              className="grid-img"
            />
            <h2 className="grid-heading"> JavaScript (JS)</h2>
            <p className="grid-para">
              Dive into JavaScript to build interactive web pages. Learn core
              concepts, DOM manipulation, and modern ES6+ features.
            </p>
            <Link href={"/apply"}>
              <button className="grid-btn">Enroll Now</button>
            </Link>
          </div>
          <div className="grid-temp">
            <Image
              src={"/graphql.webp"}
              alt="graphql"
              width={300}
              height={300}
              className="grid-img"
            />
            <h2 className="grid-heading">GraphQL</h2>
            <p className="grid-para">
              Learn GraphQL, an alternative to REST APIs,to query your data
              exactly the way you need it for web applications.
            </p>
            <Link href={"/apply"}>
              <button className="grid-btn">Enroll Now</button>
            </Link>
          </div>
          <div className="grid-temp">
            <Image
              src={"/book.webp"}
              alt="django"
              width={300}
              height={300}
              className="grid-img"
            />
            <h2 className="grid-heading">Django</h2>
            <p className="grid-para">
              Leverage Python’s Django framework to build secure, scalable
              websites and REST APIs with authentication.
            </p>
            <Link href={"/apply"}>
              <button className="grid-btn">Enroll Now</button>
            </Link>
          </div>
          <div className="grid-temp">
            <Image
              src={"/bckend.jpeg"}
              alt="backend"
              width={300}
              height={300}
              className="grid-img"
            />
            <h2 className="grid-heading">Backend Development</h2>
            <p className="grid-para">
              Learn to build scalable applications.Master backend technologies
              Node.js,Express and databases for seamless web experiences.
            </p>
            <Link href={"/apply"}>
              <button className="grid-btn">Enroll Now</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
