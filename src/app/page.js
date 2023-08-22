"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import tools from "../data/data";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Greeting Section */}
      <section className="px-10 flex flex-col justify-center items-center h-screen gap-8 -mt-4 md:gap-40  md:flex-row md:justify-center ">
        <motion.div
          className="md:w-2/6 "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-3xl font-semibold flex-col flex gap-1 text-orange-mild ">
            <span className="">Hello!</span>
            <span> I'm Alvin. </span>
            <span> 👋 </span>
          </div>
          <div className="flex-col flex gap-4 mt-4 text-text-normal font-medium">
            <p>
              Hi! I'm Alvin, a
              <span className="text-orange-mild"> Fullstack Developer </span>
              creating dynamic web experiences. Explore my projects and let's
              <span className="text-orange-mild"> connect </span> to bring ideas
              to life!⚡
            </p>
            <p>
              I am actively seeking a job opportunity to kickstart my career. 💻
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-74 "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/avatoon.png"
            alt="my avatar icon"
            width={220}
            height={150}
            className="md:mx-auto"
            // layout="responsive"
          />
        </motion.div>
      </section>
      {/* Projects */}
      <section className="my-10 px-10">
        <div className="flex flex-col items-center">
          <h3 className="text-orange-mild italic">Check My Projects</h3>
          <h3>
            <FontAwesomeIcon
              icon={faSortDown}
              beatFade
              className="text-orange-strong"
            />
          </h3>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  md:flex-row md:items-center md:gap-8">
            <motion.div
              className="w-72 h-80 my-4 rounded-md bg-yellow-100/80 md:w-2/6"
              initial={{ x: -500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              p1
            </motion.div>
            <motion.div
              className="w-72 h-80 rounded-md bg-green-100/80 md:w-1/5"
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              p2
            </motion.div>
          </div>
          <div className="flex flex-col justify-center items-center  md:flex-row md:items-center md:gap-8 ">
            <motion.div
              className="w-72 h-80 my-4 rounded-md bg-blue-100/80 md:md:w-1/5"
              initial={{ x: -500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              p3
            </motion.div>
            <motion.div
              className="w-72 h-80 rounded-md bg-red-100/80 md:w-2/6"
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              p4
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Me */}
      <section className="px-10 my-20 flex flex-col  justify-center items-center gap-4 md:gap-20 md:flex-row  md:my-36">
        <div className="md:w-2/6 ">
          <h1 className="flex-col flex gap-1 text-3xl text-orange-mild font-semibold">
            About Me 🍊
          </h1>
          <div className="text-text-normal font-medium gap-4 ">
            <p className="my-8">
              I am Alvin, actively seeking a position to launch my career in the
              exciting field both Frontend and Backend Development. Throughout
              the pandemic, I discovered a keen interest in both Frontend and
              Backend Development. Seizing the opportunity, I devoted my time
              and resources to become skilled and knowledgeable in these
              domains. I remained committed to my goal, even taking a break from
              employment to focus on honing my skills and investing in my dream.
            </p>
            <p>
              In my career, I've embraced challenges with enthusiasm, always
              seeking opportunities to learn and grow. My dedication to my craft
              drives me to invest in acquiring new skills and staying up-to-date
              with the latest technologies.
            </p>
          </div>
        </div>
        <div className="py-6">
          <Image
            src="/images/alvin.jpg"
            alt="my avatar icon"
            width={220}
            height={150}
            className="rounded-lg md:w-72"
          />
        </div>
      </section>
      {/* tools */}

      {/* <section className="container px-10 flex flex-col md:mx-auto lg:mx-auto"> */}
      <section className="container flex flex-col justify-center px-10 ">
        <div className=" ">
          <h1 className="text-3xl  text-orange-mild font-semibold md:px-12">
            My tools 🔨
          </h1>
        </div>
        <div className="my-8 mx-7">
          <ul className="grid grid-cols-4  gap-x-11 gap-y-2  md:grid-cols-6 md:gap-x-11 md:gap-y-4 md:mx-28 lg:mx-60 text-center">
            {tools.map(tool => (
              <div key={tool.id} className="border-2 border-red-300">
                <li className="h-18  col-span-2 flex flex-col items-center justify-center place-self-center text-xs ">
                  <Image
                    src={tool.image}
                    width={50}
                    height={50}
                    alt={tool.alt}
                    className="grayscale my-4"
                  />
                  <p className="text-text-normal"> {tool.name}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </section>
      <section className="">
        <div className="flex flex-col md:flex-row md:justify-center items-center md:gap-28">
          <div className="flex flex-col md:w-1/4">
            <h1 className="text-orange-mild text-3xl font-semibold my-4">
              Let's Connect! 📧
            </h1>
            <p className="mt-4 text-sm text-text-normal">
              Feel free to reach out to me for any inquiries, collaboration
              opportunities, or just to say hello! I'm excited to connect with
              like-minded individuals and explore potential projects together.
              You can reach me at on social media or you can send me a message
              here!
            </p>
            <div
              className="my-8 flex flex-row justify-center  gap-24 
            "
            >
              <Link href={"https://github.com/peashooter45"}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl text-orange-mild "
                />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/alvin-patrick-bilog-095ba6a8/"
                }
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl text-orange-mild"
                />
              </Link>
              <Link href={"https://www.facebook.com/peashooter45/"}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl text-orange-mild"
                />
              </Link>
            </div>
          </div>
          <div className=" md:w-1/4">
            <form
              action="https://formspree.io/f/xnqkjwvb"
              method="POST"
              className="w-72 flex flex-col justify-center gap-4 md:mt-44"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="border-solid border border-opacity-60 border-orange-mild rounded ps-2 text-sm h-8 "
              />
              <textarea
                type="message"
                name="message"
                required
                placeholder="message"
                className="border-solid border border-opacity-60 border-orange-mild rounded px-2 text-sm h-48 p-2"
              />
              <button
                type="submit"
                className="p-2 rounded bg-orange-strong w-16 text-white uppercase text-xs hover:bg-slate-100 hover:border-orange-mild hover:border hover:border-opacity-50 hover:text-orange-mild mb-20"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
